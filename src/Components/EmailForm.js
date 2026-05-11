import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/EmailForm.css';

class EmailForm {
    constructor(scaffold) {
        this.scaffold = scaffold;
    }

    render() {
        const fieldsHtml = Object.entries(this.scaffold).map(([key, value]) => {
            const labelText = key.replace(/([A-Z])/g, ' $1').trim();
            if (value === "textarea") {
                return `
                    <div class="form-group">
                        <label>${labelText}</label>
                        <textarea name="${key}" rows="5" required></textarea>
                    </div>
                `;
            } else {
                return `
                    <div class="form-group">
                        <label>${labelText}</label>
                        <input type="${value}" name="${key}" required>
                    </div>
                `;
            }
        }).join('');

        const html = `
            <form class="email-form">
                ${fieldsHtml}
                <div data-ref="message" class="form-message"></div>
                <button type="submit" data-ref="submitBtn">Send Message</button>
            </form>
        `;

        this.root = TemplateEngine.create(html);
        this.refs = TemplateEngine.getRefs(this.root);
        this.init();
        return this.root;
    }

    init() {
        this.root.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const btn = this.refs.submitBtn;
        const msg = this.refs.message;
        
        btn.disabled = true;
        btn.textContent = "Sending...";
        msg.className = "form-message"; // Reset

        const formData = new FormData(this.root);
        const data = Object.fromEntries(formData.entries());

        try {
            const success = await this.sendEmail(data);
            if (success) {
                msg.textContent = "Thank you! Your message has been sent.";
                msg.classList.add('success');
                this.root.reset();
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            msg.textContent = "Oops! Something went wrong. Please try again later.";
            msg.classList.add('error');
        } finally {
            btn.disabled = false;
            btn.textContent = "Send Message";
        }
    }

    async sendEmail(data) {
        try {
            const response = await fetch('http://localhost:8080/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            });
            return response.ok;
        } catch (error) {
            console.error("Failed to send email:", error);
            return false;
        }
    }
}

export { EmailForm };