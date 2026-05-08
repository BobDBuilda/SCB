import gsap from "gsap";
import { TemplateEngine } from './TemplateEngine.js';

class Slideshow { 
    constructor(images) {
        this.images = images;
        this.currentSlide = 0;
        this.speed = 7000;
    }   

    render() {
        const imagesHtml = this.images.map(source => `
            <div style="flex: 0 0 100%;">
                <img src="${source}" style="width: 100%; object-fit: cover;">
            </div>
        `).join('');

        const html = `
            <div data-name="slideshow" style="display: flex; width: 85%; overflow: hidden;">
                <div data-ref="track" data-name="track" style="display: flex; width: 100%;">
                    ${imagesHtml}
                </div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        const refs = TemplateEngine.getRefs(this.root);
        this.track = refs.track;

        this.play();
        return this.root;
    }

    play() {
        let index = 0;
        setInterval(() => {
            if (index === this.images.length - 1) {
                index = -1;
            }
            index++;
            gsap.to(this.track, {
                x: `-${index * 100}%`,
                duration: 0.5,
                ease: "power2.inOut"
            });
        }, this.speed);
    }
}

export { Slideshow };