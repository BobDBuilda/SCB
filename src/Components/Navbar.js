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
                    <div style="display: flex; align-items: center; cursor: pointer;" onclick="location.href='/'">
                        <img src="/scb.png" alt="Supreme Counselling" style="height: 90px; width: auto;">
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