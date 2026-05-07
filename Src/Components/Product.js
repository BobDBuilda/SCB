import { IComponent } from '../Interfaces/IComponent.js';

class Product extends IComponent {
    constructor(name) {
        super();
        this.name = name || 'New Product';
    }

    render() {
        this.root = document.createElement('div');
        this.root.className = 'product-item';
        
        const title = document.createElement('h3');
        title.textContent = this.name;
        
        const description = document.createElement('p');
        description.textContent = 'High-quality personal development resource.';
        
        this.root.appendChild(title);
        this.root.appendChild(description);
        
        return this.root;
    }
}

export { Product };
