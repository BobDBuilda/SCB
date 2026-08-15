import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Hero } from '../Components/Hero.js';
import { Footer } from '../Components/Footer.js';
import { Map } from '../Components/Map.js';
import { Slideshow } from '../Components/Slideshow.js';
import '../Styles/Home.css';

class Home extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-home">
                <section data-ref="hero-section"></section>

                <section class="home-section home-foundation" data-ref="foundation-section">
                    <div class="foundation-inner">
                        <div class="foundation-blocks" data-ref="foundation-blocks-container">
                            <div class="foundation-block block-1"></div>
                            <div class="foundation-block block-2"></div>
                            <div class="foundation-block block-3"></div>
                            <div class="foundation-block block-4"></div>
                            <div class="foundation-block block-5"></div>
                        </div>
                        <div class="foundation-text">
                            <h2>Build a Strong Foundation</h2>
                            <p>True, lasting growth starts from within. At Supreme Counselling, we help you develop the inner strength, clarity, and resilience to build the life you deserve — one block at a time.</p>
                            <span class="foundation-tagline">Your future starts with a single step.</span>
                        </div>
                    </div>
                </section>

                <section data-ref="slideshow-section"></section>

                <section class="home-section home-about-preview" data-ref="about-section">
                    <div class="home-about-preview-inner">
                        <h2>Why Supreme Counselling</h2>
                        <p>We are committed to providing the highest standard of care in a supportive, professional environment.</p>
                        <div class="home-values-grid">
                            <div class="home-value-card">
                                <div class="home-value-icon">🤝</div>
                                <h3>Experienced Professionals</h3>
                                <p>Our team of licensed counsellors brings years of clinical experience and a deep commitment to helping you thrive.</p>
                            </div>
                            <div class="home-value-card">
                                <div class="home-value-icon">🎯</div>
                                <h3>Personalized Approach</h3>
                                <p>Every journey is unique. We tailor our therapeutic approach to match your specific needs, goals, and circumstances.</p>
                            </div>
                            <div class="home-value-card">
                                <div class="home-value-icon">🛡️</div>
                                <h3>Confidential &amp; Safe</h3>
                                <p>Your privacy is paramount. All sessions are conducted in a secure, judgment-free space where you can speak freely.</p>
                            </div>
                        </div>
                        <a href="/about" class="home-about-link">Learn More About Us</a>
                    </div>
                </section>

                <section class="home-section home-testimonials" data-ref="testimonials-section">
                    <div class="home-testimonials-inner">
                        <h2>What Our Clients Say</h2>
                        <p>Real experiences from people who have transformed their lives through our services.</p>
                        <div class="home-testimonials-grid">
                            <div class="home-testimonial-card">
                                <div class="home-testimonial-quote">"</div>
                                <p class="home-testimonial-text">The guidance I received helped me navigate the most challenging chapter of my life with grace and strength. I am forever changed.</p>
                                <span class="home-testimonial-author">— Sarah M.</span>
                            </div>
                            <div class="home-testimonial-card">
                                <div class="home-testimonial-quote">"</div>
                                <p class="home-testimonial-text">Family mediation transformed how we communicate. We learned to listen, understand, and heal together as a family.</p>
                                <span class="home-testimonial-author">— David L.</span>
                            </div>
                            <div class="home-testimonial-card">
                                <div class="home-testimonial-quote">"</div>
                                <p class="home-testimonial-text">The youth mentorship program gave my daughter confidence and direction. She is thriving in ways I never thought possible.</p>
                                <span class="home-testimonial-author">— Angela W.</span>
                            </div>
                        </div>
                        <a href="/stories" class="home-stories-link">Read More Stories</a>
                    </div>
                </section>

                <section class="home-section home-cta-banner" data-ref="cta-section">
                    <h2>Start Your Journey</h2>
                    <p>Take the first step toward positive change. We're here to support you every step of the way.</p>
                    <a href="/booking" class="btn btn-primary">Book an Appointment</a>
                </section>

                <section data-ref="map-section"></section>
                <footer data-ref="footer-section"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);

        const nav = new Navbar();
        const hero = new Hero();
        const footer = new Footer();
        const map = new Map();
        const slideshow = new Slideshow([
            '/slideshow/image1.jpg',
            '/slideshow/image2.jpg',
            '/slideshow/image3.jpg',
            '/slideshow/image4.jpg',
            '/slideshow/image5.jpg',
            '/slideshow/image6.jpg',
            '/slideshow/image7.jpg'
        ]);

        const heroElement = hero.render();
        const heroRefs = TemplateEngine.getRefs(heroElement);

        if (heroRefs.navbarContainer) {
            heroRefs.navbarContainer.appendChild(nav.render());
        } else {
            heroElement.appendChild(nav.render());
        }

        refs['hero-section'].appendChild(heroElement);
        refs['slideshow-section'].appendChild(slideshow.render());
        refs['map-section'].appendChild(map.render());
        refs['footer-section'].appendChild(footer.render());

        this.initObservers(layout);

        return layout;
    }

    initObservers(root) {
        const sections = root.querySelectorAll('.home-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        sections.forEach(section => observer.observe(section));
    }
}

export { Home };
