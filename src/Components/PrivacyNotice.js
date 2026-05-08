import { TemplateEngine } from './TemplateEngine.js';

class PrivacyNotice {
    constructor(text) {
        this.textcontent = text || 'We value your privacy. This website uses cookies and other tracking technologies to improve your browsing experience, display personalized content and targeted ads, analyze our website traffic, and understand where our visitors are coming from. By clicking "Accept", you consent to our use of cookies and other tracking technologies in accordance with our Privacy Policy.';
    }

    render() {
        const html = `
            <div style="position: fixed; bottom: 20px; left: 0; right: 0; margin: auto; width: 80%; max-width: 800px; background: rgba(255, 255, 255, 0.95); padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); z-index: 1000; display: flex; flex-direction: column; align-items: center; transition: opacity 1s ease-out, transform 1s ease-out; opacity: 1;">
                <p style="width: 100%; margin: 0 0 15px 0; font-size: 14px; color: #333; line-height: 1.5; textAlign: center; font-family: sans-serif;">
                    ${this.textcontent}
                </p>
                <button data-ref="acceptBtn" style="padding: 10px 25px; background: #2b4c63; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                    Accept All Cookies
                </button>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        const refs = TemplateEngine.getRefs(this.root);
        
        refs.acceptBtn.onclick = () => {
            this.root.style.opacity = '0';
            this.root.style.transform = 'translateY(20px)';
            setTimeout(() => {
                this.root.style.display = 'none';
            }, 1000);
        };

        return this.root;
    }
}

export { PrivacyNotice };