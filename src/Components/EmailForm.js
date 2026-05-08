import { TemplateEngine } from './TemplateEngine.js';

class EmailForm {
    constructor(scaffold) {
        this.scaffold = scaffold;
    }

    render() {
        const fieldsHtml = Object.entries(this.scaffold).map(([key, value]) => {
            if (value === "textarea") {
                return `
                    <label>${key}</label>
                    <textarea name="${key}" style="height: 200px;"></textarea>
                `;
            } else {
                return `
                    <label>${key}</label>
                    <input type="${value}" name="${key}">
                `;
            }
        }).join('');

        const html = `
            <form name="email-form">
                ${fieldsHtml}
                <button type="submit">Submit</button>
            </form>
        `;

        this.root = TemplateEngine.create(html);
        this.init();
        return this.root;
    }

    init() {
        this.root.addEventListener('submit', (e) => {
            console.log("SUBMIT FIRED");
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.root);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
        this.sendEmail(data);
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
            return response;
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    }
}

export { EmailForm };

