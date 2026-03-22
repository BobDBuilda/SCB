import gsap from "gsap";
class Slideshow {
    constructor(images) {
        this.images = images;
        this.currentSlide = 0;
        this.speed = 3000;
        this.track;
    }   

    render(){
        this.root = document.createElement('div');
        this.root.style.display = 'flex';
        this.root.style.width = '80%';
        this.root.dataset.name = 'slideshow';
        this.track = document.createElement('div');
        this.track.dataset.name = 'track';
        this.root.appendChild(this.track);

        this.images.forEach(source => {
            const image = document.createElement('img');
            image.src = source;
            //image.style.width = '0';
            image.style.objectFit = 'cover';
            image.style.objectPosition = 'center';

            this.track.appendChild(image);
        });
        this.play();

        return this.root;
    }

    play(){
        console.log(this.track);
        console.log(this.images.length);
        
        let index = 0;
      
        setInterval(() => {
            console.log("inside setInterval");
            if(index === this.images.length-1){
                index = -1;
            }
            index++;
            gsap.to(this.track, {
                x: `-${index * 500}`,
                duration: 0.5,
                ease: "power2.inOut"
            });
            //index++;
        }, this.speed);
    }
}

export { Slideshow };