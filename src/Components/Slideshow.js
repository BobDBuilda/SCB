import gsap from "gsap";
import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/Slideshow.css';

class Slideshow { 
    constructor(images) {
        this.images = images;
        this.currentSlide = 0;
        this.speed = 7000;
        this.isPaused = false;
    }   

    render() {
        const imagesHtml = this.images.map(source => `
            <div class="slideshow-slide">
                <img src="${source}" alt="">
            </div>
        `).join('');

        const dotsHtml = this.images.map((_, i) => `
            <button class="slideshow-dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>
        `).join('');

        const html = `
            <div class="home-slideshow home-section" data-name="slideshow">
                <div class="slideshow-inner">
                    <h2>Our Work in Action</h2>
                    <p>A glimpse into the lives we touch and the communities we serve.</p>
                    <div class="slideshow-track-wrapper">
                        <div data-ref="track" class="slideshow-track">
                            ${imagesHtml}
                        </div>
                        <button data-ref="prevBtn" class="slideshow-btn slideshow-prev">❮</button>
                        <button data-ref="nextBtn" class="slideshow-btn slideshow-next">❯</button>
                    </div>
                    <div class="slideshow-dots" data-ref="dots">
                        ${dotsHtml}
                    </div>
                </div>
            </div>
        `;

        this.root = TemplateEngine.create(html);
        const refs = TemplateEngine.getRefs(this.root);
        this.track = refs.track;
        this.prevBtn = refs.prevBtn;
        this.nextBtn = refs.nextBtn;
        this.dots = refs.dots;

        this.initControls();
        this.initObserver();
        this.play();
        return this.root;
    }

    initControls() {
        this.prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.goToSlide(this.currentSlide - 1);
        });
        this.nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.goToSlide(this.currentSlide + 1);
        });
        this.dots.addEventListener('click', (e) => {
            const dot = e.target.closest('.slideshow-dot');
            if (dot) {
                this.goToSlide(parseInt(dot.dataset.index));
            }
        });
    }

    goToSlide(index) {
        if (index < 0) index = this.images.length - 1;
        if (index >= this.images.length) index = 0;
        this.currentSlide = index;
        gsap.to(this.track, {
            x: `-${this.currentSlide * 100}%`,
            duration: 0.5,
            ease: "power2.inOut"
        });
        this.updateDots();
    }

    updateDots() {
        const allDots = this.dots.querySelectorAll('.slideshow-dot');
        allDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
    }

    play() {
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.goToSlide(this.currentSlide + 1);
            }
        }, this.speed);
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });
        observer.observe(this.root);
    }

    destroy() {
        if (this.interval) clearInterval(this.interval);
    }
}

export { Slideshow };
