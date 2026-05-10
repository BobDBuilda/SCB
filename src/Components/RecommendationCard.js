import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/RecommendationCard.css';

class RecommendationCard extends IComponent {
    /**
     * @param {Object} props
     * @param {string} props.text - The testimonial text
     * @param {string} props.author - The name of the person
     * @param {string} props.role - Their role or title
     */
    constructor(props = {}) {
        super();
        this.props = {
            text: props.text || "This service has been life-changing. I highly recommend it to anyone seeking professional support.",
            author: props.author || "Anonymous",
            role: props.role || "Client",
            ...props
        };
    }

    render() {
        const html = `
            <div class="recommendation-card">
                <span class="quote-icon">"</span>
                <p class="recommendation-text">${this.props.text}</p>
                <div class="recommendation-author">
                    <span class="author-name">${this.props.author}</span>
                    <span class="author-role">${this.props.role}</span>
                </div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        return this.root;
    }
}

export { RecommendationCard };