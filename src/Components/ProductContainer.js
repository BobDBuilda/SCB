import { IComponent } from '../Interfaces/IComponent.js';
import { Product } from './Product.js';
import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/ProductContainer.css';

class ProductContainer extends IComponent {
    constructor(productNames) {
        super();
        const names = productNames || [
            'Individual Counselling', 
            'Family Mediation', 
            'Youth Mentorship', 
            'Crisis Intervention'
        ];
        this.products = names.map(name => new Product(name));
    }

    render() {
        this.root = TemplateEngine.create('<div class="product-container"></div>');
        
        this.products.forEach(product => {
            this.root.appendChild(product.render());
        });

        this.initObserver();
        return this.root;
    }

    initObserver() {
        // Function to toggle visibility based on scroll and intersection
        const toggleVisibility = () => {
            const isAtTop = window.scrollY < 50;
            const rect = this.root.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView && !isAtTop) {
                this.root.classList.add('visible');
            } else if (isAtTop || !isInView) {
                this.root.classList.remove('visible');
            }
        };

        // Use the observer for major transitions (entering/leaving screen)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(() => toggleVisibility());
        }, { threshold: 0.1 });

        observer.observe(this.root);

        // Use a scroll listener to handle the "Top of Page" edge case
        window.addEventListener('scroll', toggleVisibility);
        
        // Run once on load
        toggleVisibility();
    }
}

export { ProductContainer };
