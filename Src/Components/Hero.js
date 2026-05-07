import { IComponent } from '../Interfaces/IComponent.js';

class Hero extends IComponent {
    constructor() {
        super();
    }

    render() {
        this.root = document.createElement('div');
        this.root.className = 'hero';
        return this.root;
    }
}

export { Hero };
