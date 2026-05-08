import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/Navbar.css';

class Navbar {
    constructor() {
        this.links = ['Home', 'About', 'Stories', 'Services', 'Contact'];
    }

    render() {
        const linksHtml = this.links.map(link => `
            <a class="nav-item" href="#${link.toLowerCase()}">${link}</a>
        `).join('');

        const html = `
            <div class="navbar">
                <div data-name="logo-container">
                    <div style="font-family: 'Lucida Sans', sans-serif; display: flex; align-items: center; line-height: 1; color: #B22222;">
                        <span style="font-size: 80px; font-weight: bold;">S</span>
                        <div style="display: flex; flexDirection: column; font-size: 40px; text-transform: uppercase; font-weight: bold; margin-left: 5px; font-family: inherit;">
                            <span>upreme</span>
                            <span style="font-size: 25px;">Counselling</span>
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