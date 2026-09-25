import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class FAQ extends IComponent {
    render() {
        const faqs = [
            {
                question: "What types of counselling services do you offer?",
                answer: "We offer individual counselling, family mediation, youth mentorship, and crisis intervention services. Each service is tailored to meet the unique needs of our clients."
            },
            {
                question: "How do I book an appointment?",
                answer: "You can book an appointment through our online booking form on the Booking page. Simply fill in your details, preferred date, and the type of service you're looking for, and we'll get back to you to confirm."
            },
            {
                question: "What is your cancellation policy?",
                answer: "We require at least 24 hours notice for cancellations. Late cancellations or missed appointments may be subject to a fee. We understand emergencies happen and handle them on a case-by-case basis."
            },
            {
                question: "Are my sessions confidential?",
                answer: "Absolutely. We adhere to strict confidentiality policies in accordance with professional ethical standards. Your privacy and trust are paramount to everything we do."
            },
            {
                question: "How long is each session?",
                answer: "Standard sessions are 50 minutes. Family mediation and intensive crisis intervention sessions may be longer. We'll discuss the appropriate duration during your initial consultation."
            },
            {
                question: "Do you offer online counselling?",
                answer: "Yes, we offer virtual counselling sessions for clients who prefer or require remote support. Our online platform is secure and easy to use."
            },
            {
                question: "What are your hours of operation?",
                answer: "We are available Monday through Friday, 9:00 AM to 6:00 PM. Emergency sessions can be arranged outside of regular hours upon request."
            },
            {
                question: "How much do sessions cost?",
                answer: "Our rates vary depending on the type of service and session duration. Please contact us directly for detailed pricing information. We strive to make our services accessible to all."
            }
        ];

        const layout = TemplateEngine.create(`
            <div class="page-faq">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <section class="faq-header">
                        <h1>Frequently Asked Questions</h1>
                        <p>Find answers to common questions about our services and policies.</p>
                    </section>

                    <section class="faq-list" data-ref="faqList">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item" data-ref="faq-${index}">
                                <button class="faq-question" data-ref="faq-btn-${index}">
                                    <span>${faq.question}</span>
                                    <span class="faq-icon">+</span>
                                </button>
                                <div class="faq-answer" data-ref="faq-answer-${index}">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </section>

                    <section class="faq-cta">
                        <p>Still have questions? We're here to help.</p>
                        <a href="/contact" class="btn btn-primary">Contact Us</a>
                    </section>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        refs.header.appendChild(new Navbar().render());
        refs.footer.appendChild(new Footer().render());

        faqs.forEach((_, index) => {
            const btn = refs[`faq-btn-${index}`];
            const answer = refs[`faq-answer-${index}`];
            const item = refs[`faq-${index}`];
            if (btn && answer) {
                btn.addEventListener('click', () => {
                    const isOpen = item.classList.contains('faq-open');
                    item.classList.toggle('faq-open');
                    const icon = btn.querySelector('.faq-icon');
                    if (icon) icon.textContent = isOpen ? '+' : '−';
                });
            }
        });

        return layout;
    }
}

export { FAQ };
