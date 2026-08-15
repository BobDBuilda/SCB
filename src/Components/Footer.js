import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from './TemplateEngine.js';

class Footer extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <footer class="site-footer">
                <div class="footer-inner">
                    <div class="footer-col footer-brand">
                        <img src="/scb.png" alt="Supreme Counselling" class="footer-logo">
                        <p class="footer-tagline">Professional counselling and personal development services in Barbados.</p>
                    </div>
                    <div class="footer-col footer-links">
                        <h4>Quick Links</h4>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/services">Services</a>
                            <a href="/stories">Success Stories</a>
                            <a href="/faq">FAQ</a>
                            <a href="/contact">Contact</a>
                        </nav>
                    </div>
                    <div class="footer-col footer-contact">
                        <h4>Contact</h4>
                        <p>#5 1st Avenue, Belleville<br>St. Michael, Bridgetown, Barbados</p>
                        <p>(246) 538-9769 / (246) 836-5601</p>
                        <p>secretary@supremecounsellingbb.com</p>
                    </div>
                    <div class="footer-col footer-legal">
                        <h4>Legal</h4>
                        <nav>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </nav>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Supreme Counselling. All rights reserved.</p>
                </div>
            </footer>
        `);

        return layout;
    }
}

export { Footer };
