import { TemplateEngine } from './TemplateEngine.js';

class PrivacyNotice {
    constructor(text) {
        this.textcontent = text || 'We value your privacy. This website uses cookies and other tracking technologies to improve your browsing experience. By clicking "Accept", you consent to our use of cookies in accordance with our Privacy Policy.';
    }

    render() {
        // If choice already made, don't render
        if (localStorage.getItem('cookie-consent')) {
            return document.createElement('div');
        }

        const html = `
            <div class="privacy-notice" style="position: fixed; bottom: 20px; left: 0; right: 0; margin: auto; width: 80%; max-width: 800px; background: rgba(255, 255, 255, 0.98); padding: 25px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); z-index: 9999; display: flex; flex-direction: column; align-items: center; transition: all 0.5s ease-in-out; border: 1px solid #eee;">
                <p style="margin: 0 0 20px 0; font-size: 14px; color: #444; line-height: 1.6; text-align: center; font-family: 'Lucida Sans', sans-serif;">
                    ${this.textcontent}
                </p>
                <div style="display: flex; gap: 15px;">
                    <button data-ref="rejectBtn" style="padding: 10px 25px; background: #f0f0f0; color: #555; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        Reject
                    </button>
                    <button data-ref="acceptBtn" style="padding: 10px 25px; background: #B22222; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        Accept All
                    </button>
                </div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        const refs = TemplateEngine.getRefs(this.root);
        
        const closeNotice = (choice) => {
            localStorage.setItem('cookie-consent', choice);
            this.root.style.opacity = '0';
            this.root.style.transform = 'translateY(20px)';
            setTimeout(() => this.root.remove(), 500);
        };

        refs.acceptBtn.onclick = () => closeNotice('accepted');
        refs.rejectBtn.onclick = () => closeNotice('rejected');

        // Simple hover effects since we are using inline styles
        refs.acceptBtn.onmouseover = () => refs.acceptBtn.style.background = '#8B0000';
        refs.acceptBtn.onmouseout = () => refs.acceptBtn.style.background = '#B22222';
        refs.rejectBtn.onmouseover = () => refs.rejectBtn.style.background = '#e0e0e0';
        refs.rejectBtn.onmouseout = () => refs.rejectBtn.style.background = '#f0f0f0';

        return this.root;
    }
}

export { PrivacyNotice };