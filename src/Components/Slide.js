import { TemplateEngine } from './TemplateEngine.js';

class Slide {
    constructor(imageSource, content) {
        this.image = imageSource;
        this.content = content;
    }

    render() {
        const html = `
            <div class="slide">
                <img src="${this.image}" style="width: 100%; object-fit: cover;">
                <div class="slide-content">${this.content}</div>
            </div>
        `;
        this.root = TemplateEngine.create(html);
        return this.root;
    }
}

export { Slide };