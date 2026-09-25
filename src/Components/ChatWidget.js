import '../Styles/ChatWidget.css';

class ChatWidget {
  constructor() {
    this.open = false;
    this.streaming = false;
    this.root = null;
    this.refs = {};
  }

  render() {
    const html = `
      <div class="chat-widget" data-ref="widget">
        <button class="chat-toggle" data-ref="toggle" aria-label="Chat with us">
          <span class="chat-toggle-icon">💬</span>
        </button>
        <div class="chat-panel" data-ref="panel">
          <div class="chat-header">
            <span class="chat-header-title">Chat with us</span>
            <button class="chat-close" data-ref="close">&times;</button>
          </div>
          <div class="chat-messages" data-ref="messages"></div>
          <div class="chat-input-area">
            <input type="text" class="chat-input" data-ref="input" placeholder="Type your message..." />
            <button class="chat-send" data-ref="send">Send</button>
          </div>
        </div>
      </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html.trim();
    this.root = template.content.firstElementChild;
    this.refs = {};
    this.root.querySelectorAll('[data-ref]').forEach(el => {
      this.refs[el.dataset.ref] = el;
    });

    this.refs.toggle.addEventListener('click', () => this.toggle());
    this.refs.close.addEventListener('click', () => this.close());
    this.refs.send.addEventListener('click', () => this.sendMessage());
    this.refs.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    return this.root;
  }

  toggle() {
    if (this.open) {
      this.close();
    } else {
      this.openChat();
    }
  }

  openChat() {
    this.open = true;
    this.refs.panel.classList.add('open');
    this.refs.toggle.style.display = 'none';

    if (!this._greeted) {
      this._greeted = true;
      this.addMessage('bot', 'Hello! How can I help you today?');
    }
  }

  close() {
    this.open = false;
    this.refs.panel.classList.remove('open');
    this.refs.toggle.style.display = 'flex';
  }

  async sendMessage() {
    const input = this.refs.input;
    const text = input.value.trim();
    if (!text || this.streaming) return;

    input.value = '';
    this.addMessage('user', text);
    this.streaming = true;
    this.setInputEnabled(false);

    const botMsgEl = this.addMessage('bot', '');
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        botMsgEl.textContent = 'Sorry, something went wrong. Please try again later.';
        this.streaming = false;
        this.setInputEnabled(true);
        return;
      }

      const reader = res.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;
          const data = trimmed.slice(6);
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.response) {
              botMsgEl.textContent += parsed.response;
            }
          } catch { }
        }
      }
    } catch (err) {
      console.error('[ChatWidget] Fetch error:', err);
      botMsgEl.textContent = 'Connection issue. Please try again later.';
    }

    this.streaming = false;
    this.setInputEnabled(true);
  }

  setInputEnabled(enabled) {
    this.refs.input.disabled = !enabled;
    this.refs.send.disabled = !enabled;
  }

  addMessage(userId, content) {
    const container = this.refs.messages;
    const div = document.createElement('div');
    div.className = `chat-msg ${userId === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}`;
    div.textContent = content;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }
}

export { ChatWidget };
