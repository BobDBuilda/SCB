//pretty sure i know why exactly the images are wonky and need
//so much calculation to get right,
//given the structure of the slideshow and the fact that
//the images sit on a 'track' side by side
//they are essentially not self contained
//and as such you cant scale them to fit the whole container
//what needs to happen is that each image needs to be encapsulated by a div
//the div then added to the track and that'd allow greater control over image
//sizing and timing

import gsap from "gsap";
class Slideshow { 
    constructor(images) {
        this.images = images;
        this.currentSlide = 0;
        this.speed = 7000;
        this.track;
    }   

    render(){
        this.root = document.createElement('div');
        this.root.style.display = 'flex';
        this.root.style.width = '85%';
        this.root.dataset.name = 'slideshow';
        this.track = document.createElement('div');
        this.track.dataset.name = 'track';
        this.root.appendChild(this.track);
        this.controls = document.createElement('div');

        this.images.forEach(source => {
            const image = document.createElement('img');
            const imageContainer = document.createElement('div');
            image.src = source;
            image.style.width = '100%';
            //image.style.height = '100%';
            image.style.objectFit = 'cover';
            //image.style.objectPosition = 'right';
            imageContainer.style.width = this.track.style.width;
            
            imageContainer.appendChild(image);
            this.track.appendChild(imageContainer);
            
        });
        this.play();

        return this.root;
    }

    play(){
        console.log(this.track);
        
        let index = 0;
      
        setInterval(() => {
            console.log("inside setInterval");
            if(index === this.images.length-1){
                index = -1;
            }
            index++;
            gsap.to(this.track, {
                x: `-${index * 1000}`,
                duration: 0.5,
                ease: "power2.inOut"
            });
            //index++;
        }, this.speed);
    }
}

export { Slideshow };