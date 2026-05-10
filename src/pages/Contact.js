import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { EmailForm } from '../Components/EmailForm.js';
import { PrivacyNotice } from '../Components/PrivacyNotice.js';
import { Map } from '../Components/Map.js';
import '../Styles/Pages.css';

class Contact extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-contact">
                <header data-ref="header"></header>
                <main>
                    <section class="page-main-content contact-grid">
                        <div class="contact-info">
                            <h1>Get in Touch</h1>
                            <p style="margin-bottom: 2em; color: #555;">Have questions about our services or want to learn more about how we can help? Send us a message.</p>
                            
                            <div class="contact-method">
                                <strong>Address</strong>
                                <span>123 Healing Way, Bridgetown, Barbados</span>
                            </div>
                            <div class="contact-method">
                                <strong>Phone</strong>
                                <span>+1 (246) 555-0123</span>
                            </div>
                            <div class="contact-method">
                                <strong>Email</strong>
                                <span>info@supremecounselling.com</span>
                            </div>
                        </div>

                        <div style="background: #f9f9f9; padding: 2.5em; border-radius: 12px;">
                            <div data-ref="form-container"></div>
                        </div>
                    </section>

                    <section data-ref="map-container" class="map-section"></section>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        
        const contactForm = new EmailForm({
            name: 'text',
            email: 'email',
            subject: 'text',
            message: 'textarea'
        });

        refs.header.appendChild(new Navbar().render());
        refs['form-container'].appendChild(contactForm.render());
        refs['map-container'].appendChild(new Map().render());
        refs.footer.appendChild(new PrivacyNotice().render());

        return layout;
    }
}

export { Contact };