import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/Navbar.css';

class Navbar {
    constructor() {
        this.links = ['Home', 'About', 'Stories', 'FAQ', 'Services', 'Contact'];
    }

    render() {
        const linksHtml = this.links.map(link => `
            <a class="nav-item" href="${link.toLowerCase()}">${link}</a>
        `).join('');

        const html = `
            <div class="navbar">
                <div data-name="logo-container">
                    <div style="font-family: 'Lucida Sans', sans-serif; display: flex; align-items: center; line-height: 1; color: #B22222; cursor: pointer;" onclick="location.href='/'">
                        <span style="font-size: 80px; font-weight: bold; letter-spacing: -5px;">S</span>
                        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 2px; height: 70px; text-transform: uppercase; font-family: inherit; font-weight: bold;">
                            <span style="font-size: 48px; line-height: 0.7; display: flex; align-items: flex-end;">upreme</span>
                            <span style="font-size: 18px; line-height: 1.3; letter-spacing: 1px;">Counselling</span>
                        </div>
                    </div>
                </div>
                <div data-name="func-container">
                    ${linksHtml}
                </div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        return this.root;
    }
}

export { Navbar };