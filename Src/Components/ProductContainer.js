import { IComponent } from '../Interfaces/IComponent.js';
import { Product } from './Product.js';

class ProductContainer extends IComponent {
    constructor(productNames){
        super();
        const names = productNames || ['Counselling Session', 'Mental Health Workshop', 'Growth Planner'];
        this.products = names.map(name => new Product(name));
    }

    render(){
        this.root = document.createElement('div');
        this.root.className = 'product-container';
        
        this.products.forEach(product => {
            this.root.appendChild(product.render());
        });
        
        return this.root;
    }
}

export { ProductContainer };
