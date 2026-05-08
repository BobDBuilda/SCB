import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from './TemplateEngine.js';

class Product extends IComponent {
    constructor(name) {
        super();
        this.name = name || 'New Product';
        this.descriptions = {
            'Individual Counselling': 'Confidential one-on-one sessions focused on personal growth, mental health, and emotional well-being.',
            'Family Mediation': 'Facilitated communication and conflict resolution to help families navigate difficult transitions and build stronger bonds.',
            'Youth Mentorship': 'Empowering the next generation through guidance, skill-building, and positive role modeling in a safe environment.',
            'Crisis Intervention': 'Immediate, short-term support to help individuals navigate through acute emotional or situational distress.'
        };
    }

    render() {
        const description = this.descriptions[this.name] || 'Professional support tailored to your unique personal development journey.';
        
        const html = `
            <div class="product-item">
                <h3>${this.name}</h3>
                <p>${description}</p>
            </div>
        `;
        
        this.root = TemplateEngine.create(html);
        return this.root;
    }
}

export { Product };
