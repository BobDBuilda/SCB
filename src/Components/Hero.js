import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from './TemplateEngine.js';
import { RecommendationCard } from './RecommendationCard.js';
import { CardAnimation } from './CardAnimation.js';
import '../Styles/Hero.css';

class Hero extends IComponent {
    render() {
        this.root = TemplateEngine.create(`
            <div class="hero">
                <div data-ref="navbarContainer"></div>
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Empowering Your Future</h1>
                        <p>Professional Counselling & Personal Development</p>
                        <div class="hero-btns">
                            <a href="/booking" class="btn btn-primary">Book Appointment</a>
                            <a href="#services" class="btn btn-secondary">Learn More</a>
                        </div>
                    </div>
                    <div data-ref="cardContainer" class="hero-card-wrapper"></div>

                    <div class="scroll-indicator">
                        SCROLL DOWN
                        <span>↓</span>
                    </div>
                </div>
                <svg class="svg-separator" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        `);

        const refs = TemplateEngine.getRefs(this.root);

        // 1. Create the animation backdrop
        const animation = new CardAnimation();
        const animationElement = animation.render();
        const animationRefs = TemplateEngine.getRefs(animationElement);

        // 2. Create the card
        const card = new RecommendationCard({
            text: "The guidance I received here helped me navigate the most challenging chapter of my life with grace and strength.",
            author: "Nikolai Holder",
            role: "System Analyst"
        });

        // 3. Nest card inside animation, then animation inside hero
        animationRefs.content.appendChild(card.render());
        refs.cardContainer.appendChild(animationElement);

        return this.root;
    }
}

export { Hero };

