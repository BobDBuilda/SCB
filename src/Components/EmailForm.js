import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/EmailForm.css';

class EmailForm {
    constructor(scaffold) {
        this.scaffold = scaffold;
        this.endpoint = scaffold.endpoint || '/api/contact';
        this.submitText = scaffold.submitText || 'Send Message';
        this.successText = scaffold.successText || 'Thank you! Your message has been sent.';
    }

    render() {
        const fieldsHtml = Object.entries(this.scaffold)
            .filter(([key]) => !['endpoint', 'submitText', 'successText'].includes(key))
            .map(([key, value]) => {
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
                <button type="submit" data-ref="submitBtn">${this.submitText}</button>
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
                msg.textContent = this.successText;
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
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
