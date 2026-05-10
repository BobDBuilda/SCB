import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { PrivacyNotice } from '../Components/PrivacyNotice.js';
import '../Styles/Pages.css';

class About extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-about">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <section class="mission">
                        <h1>Our Mission</h1>
                        <p>
                            At Supreme Counselling, our mission is to provide accessible, high-quality professional counselling and personal development services. 
                            We believe in the power of healing and the strength of the human spirit to overcome adversity.
                        </p>
                    </section>
                    
                    <section class="values-grid">
                        <div class="value-card">
                            <h3>Integrity</h3>
                            <p>We uphold the highest ethical standards in all our therapeutic relationships.</p>
                        </div>
                        <div class="value-card">
                            <h3>Empowerment</h3>
                            <p>We provide tools and strategies to help you take control of your personal growth.</p>
                        </div>
                        <div class="value-card">
                            <h3>Compassion</h3>
                            <p>A safe, non-judgmental space for every individual we serve.</p>
                        </div>
                    </section>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        refs.header.appendChild(new Navbar().render());
        refs.footer.appendChild(new PrivacyNotice().render());

        return layout;
    }
}

export { About };