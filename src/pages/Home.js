import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Hero } from '../Components/Hero.js';
import { ProductContainer } from '../Components/ProductContainer.js';
import { PrivacyNotice } from '../Components/PrivacyNotice.js';
import { Map } from '../Components/Map.js';

class Home extends IComponent {
    render() {
        // 1. Create the structured page layout
        const layout = TemplateEngine.create(`
            <div class="page-home">
                <section data-ref="hero-section"></section>
                <section data-ref="products-section" id="services"></section>
                <section data-ref="map-section"></section>
                <footer data-ref="footer-section"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);

        // 2. Instantiate components
        const nav = new Navbar();
        const hero = new Hero();
        const products = new ProductContainer();
        const notice = new PrivacyNotice();
        const map = new Map();

        // 3. Render and nest components
        const heroElement = hero.render();
        const heroRefs = TemplateEngine.getRefs(heroElement);
        
        // If Hero has a specific navbar container, use it; otherwise, append to hero root
        if (heroRefs.navbarContainer) {
            heroRefs.navbarContainer.appendChild(nav.render());
        } else {
            heroElement.appendChild(nav.render());
        }

        // 4. Populate layout sections
        refs['hero-section'].appendChild(heroElement);
        refs['products-section'].appendChild(products.render());
        refs['map-section'].appendChild(map.render());
        refs['footer-section'].appendChild(notice.render());

        return layout;
    }
}

export { Home };