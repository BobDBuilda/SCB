import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class About extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-about">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <section class="mission">
                        <h1>Who We Are</h1>
                        <p>
                            Supreme Counselling for Personal Development (SCPD) is a beacon of hope for young individuals and families across Barbados. 
                            As a registered charitable organization (Charity No. 788 under the Barbados Charities Act CAP 243), 
                            SCPD was founded by visionary leader Shawn Clarke in October 2009. 
                            Since then, we have positively transformed the lives of over <strong>5,000 young individuals</strong> and their families, 
                            empowering them to overcome adversity and thrive.
                        </p>
                    </section>

                    <section class="mission" style="margin-top: 3em;">
                        <h1>Our Mission</h1>
                        <p>
                            Our mission is to uplift and empower the region's youth through innovative behavioural modification techniques. 
                            We do more than counsel — we transform lives.
                        </p>
                        <blockquote style="font-style: italic; color: #C7953A; font-size: 1.3rem; border-left: 4px solid #C7953A; padding-left: 1.5em; margin: 1.5em 0;">
                            "What if we catch them before they fall? And if they do, how can we lift them up?"
                        </blockquote>
                    </section>

                    <section class="values-grid">
                        <div class="value-card">
                            <h3>Integrity</h3>
                            <p>We uphold the highest ethical standards in all our therapeutic relationships and programmes.</p>
                        </div>
                        <div class="value-card">
                            <h3>Empowerment</h3>
                            <p>We provide tools and strategies to help young people take control of their personal growth and future.</p>
                        </div>
                        <div class="value-card">
                            <h3>Compassion</h3>
                            <p>A safe, non-judgmental space for every individual and family we serve.</p>
                        </div>
                        <div class="value-card">
                            <h3>Innovation</h3>
                            <p>Evidence-based behavioural modification techniques tailored to the unique needs of our community.</p>
                        </div>
                    </section>

                    <section style="margin-top: 4em;">
                        <h2 style="color: #B22222; font-size: 2rem; margin-bottom: 1em;">Our Reach & Impact</h2>
                        <p style="color: #555; line-height: 1.7;">
                            We work with schools and communities across Barbados, offering crucial counselling services. 
                            Our active programmes run in St. George Secondary, Princess Margaret Secondary, 
                            Grantley Adams Memorial, and other schools throughout the island.
                        </p>
                    </section>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        refs.header.appendChild(new Navbar().render());
        refs.footer.appendChild(new Footer().render());

        return layout;
    }
}

export { About };
