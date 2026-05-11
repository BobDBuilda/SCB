import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/CardAnimation.css';

class CardAnimation extends IComponent {
    render() {
        const html = `
            <div class="animation-wrapper">
                <!-- Background Orbs -->
                <div class="glow-orb orb-1"></div>
                <div class="glow-orb orb-2"></div>
                <div class="glow-orb orb-3"></div>
                
                <!-- Container for the actual card -->
                <div data-ref="content" class="animation-content"></div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        return this.root;
    }
}

export { CardAnimation };