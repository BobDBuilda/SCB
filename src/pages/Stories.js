import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class Stories extends IComponent {
    render() {
        const stories = [
            {
                author: "Sarah M.",
                role: "Client",
                quote: "After years of struggling with anxiety, Supreme Counselling gave me the tools and confidence to take back control of my life. The compassionate support I received was truly life-changing."
            },
            {
                author: "David L.",
                role: "Client",
                quote: "Family mediation helped us bridge gaps we thought were permanent. We learned to communicate again. I'm forever grateful for the patience and expertise shown to our family."
            },
            {
                author: "Michelle T.",
                role: "Young Professional",
                quote: "The youth mentorship program set me on a path I never knew was possible. My mentor believed in me when I didn't believe in myself. Now I'm pursuing my dream career."
            },
            {
                author: "Robert K.",
                role: "Client",
                quote: "Crisis intervention came at the darkest time of my life. The immediate, non-judgmental support I received made all the difference. I don't know where I'd be without them."
            },
            {
                author: "Angela W.",
                role: "Client",
                quote: "The personal development sessions helped me break free from patterns that held me back for decades. At 45, I finally feel like I'm living authentically."
            },
            {
                author: "Marcus J.",
                role: "Parent",
                quote: "Seeing my teenager open up and thrive through counselling has been incredible. The youth counsellors created a safe space where my child felt truly heard."
            }
        ];

        const layout = TemplateEngine.create(`
            <div class="page-stories">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <section class="stories-header">
                        <h1>Success Stories</h1>
                        <p>Real stories from real people who have transformed their lives through our services.</p>
                    </section>

                    <section class="stories-grid">
                        ${stories.map(story => `
                            <div class="story-card">
                                <div class="story-quote">"</div>
                                <p class="story-text">${story.quote}</p>
                                <div class="story-author">
                                    <span class="story-author-name">${story.author}</span>
                                    <span class="story-author-role">${story.role}</span>
                                </div>
                            </div>
                        `).join('')}
                    </section>

                    <section class="stories-cta">
                        <h2>Ready to Write Your Own Story?</h2>
                        <p>Take the first step towards positive change.</p>
                        <a href="/booking" class="btn btn-primary">Book an Appointment</a>
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

export { Stories };
