async function isAuthorized(request, env) {
  return request.headers.get('X-Internal-Secret') === env.INTERNAL_SECRET;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeICS(value) {
  return (value || '').replace(/[;\\,\n]/g, '\\$&');
}

function formatICSDate(dateStr) {
  const d = new Date(dateStr);
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function generateICS({ fullName, email, preferredDate, serviceType, notes }) {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const dtStart = formatICSDate(preferredDate);
  const dtEnd = formatICSDate(new Date(new Date(preferredDate).getTime() + 50 * 60000));

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Supreme Counselling//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:' + crypto.randomUUID() + '@scb.tapwaterpauper.com',
    'DTSTAMP:' + now,
    'DTSTART:' + dtStart,
    'DTEND:' + dtEnd,
    'SUMMARY:Booking - ' + escapeICS(serviceType),
    'DESCRIPTION:Booking for ' + escapeICS(fullName) + '\\nService: ' + escapeICS(serviceType) + '\\nNotes: ' + escapeICS(notes || ''),
    'LOCATION:Supreme Counselling, Bridgetown, Barbados',
    'STATUS:CONFIRMED',
    'ORGANIZER;CN=Supreme Counselling:mailto:noreply@scb.tapwaterpauper.com',
    'ATTENDEE;CN=' + escapeICS(fullName) + ':mailto:' + email,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

async function handleBooking(request, env) {
  const body = await request.json();

  if (!body.fullName || !body.email || !body.preferredDate || !body.serviceType) {
    return json({ error: 'Full name, email, preferred date, and service type are required' }, 400);
  }

  try {
    const stmt = env.BOOKINGS_DB.prepare(
      'INSERT INTO bookings (full_name, email, preferred_date, service_type, additional_notes) VALUES (?, ?, ?, ?, ?)'
    );
    await stmt.bind(body.fullName, body.email, body.preferredDate, body.serviceType, body.additionalNotes || null).run();

    const icsContent = generateICS({
      fullName: body.fullName,
      email: body.email,
      preferredDate: body.preferredDate,
      serviceType: body.serviceType,
      notes: body.additionalNotes,
    });

    try {
      await env.EMAIL.send({
        to: body.email,
        from: { email: 'noreply@scb.tapwaterpauper.com', name: 'Supreme Counselling' },
        subject: 'Booking Confirmation - Supreme Counselling',
        html: `<p>Hi ${body.fullName},</p><p>Your booking for <strong>${body.serviceType}</strong> on <strong>${body.preferredDate}</strong> has been received.</p><p>The .ics file attached can be added to your calendar.</p><p>We will confirm your appointment shortly.</p>`,
        text: `Hi ${body.fullName},\n\nYour booking for ${body.serviceType} on ${body.preferredDate} has been received.\n\nWe will confirm your appointment shortly.`,
        attachments: [{
          content: icsContent,
          filename: 'appointment.ics',
          type: 'text/calendar',
          disposition: 'attachment',
        }],
      });
    } catch (emailErr) {
      console.error('Booking email send failed (non-fatal):', emailErr);
    }

    return json({ success: true });
  } catch (err) {
    console.error('Booking error:', err);
    return json({ error: 'Service temporarily unavailable' }, 502);
  }
}

async function handleContact(request, env) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return json({ error: 'Name, email, and message are required' }, 400);
  }

  try {
    await env.EMAIL.send({
      to: 'nikolaiholder@gmail.com',
      from: { email: 'noreply@scb.tapwaterpauper.com', name: 'Supreme Counselling Contact' },
      subject: 'Contact Form: ' + (body.subject || 'New Message'),
      html: `<p><strong>From:</strong> ${body.name} (${body.email})</p><p><strong>Subject:</strong> ${body.subject || 'N/A'}</p><p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, '<br>')}</p>`,
      text: `From: ${body.name} (${body.email})\nSubject: ${body.subject || 'N/A'}\n\nMessage:\n${body.message}`,
    });

    return json({ success: true });
  } catch (err) {
    console.error('Contact error:', err);
    return json({ error: 'Service temporarily unavailable', code: err.code, message: err.message }, 502);
  }
}

async function getContext(message, env) {
  return '';
}

async function handleChat(request, env) {
  const body = await request.json();
  const message = body.message;

  if (!message) {
    return json({ error: 'Message is required' }, 400);
  }

  const context = await getContext(message, env);

  const systemPrompt = `You are a friendly receptionist for Supreme Counselling, a professional counselling and personal development service in Barbados. Answer basic questions about our services (individual counselling, family mediation, youth mentorship, crisis intervention), hours (Monday to Friday, 9:00 AM to 6:00 PM), location (Bridgetown, Barbados), and booking process. Be warm and helpful. If asked something beyond your scope, suggest contacting us directly at info@supremecounselling.com or +1 (246) 555-0123.`
    + (context ? `\n\nRelevant context:\n${context}` : '');

  try {
    const aiStream = await env.AI.run('@cf/meta/llama-3.2-3b-instruct', {
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      stream: true,
    });

    return new Response(aiStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (err) {
    console.error('Chat error:', err);
    return json({ error: 'Service temporarily unavailable' }, 502);
  }
}

export default {
  async fetch(request, env, ctx) {
    if (!await isAuthorized(request, env)) {
      return new Response('Forbidden', { status: 403 });
    }

    const url = new URL(request.url);

    if (url.pathname === '/api/booking' && request.method === 'POST') {
      return handleBooking(request, env);
    }
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      return handleChat(request, env);
    }

    return json({ error: 'Not found' }, 404);
  },
};
