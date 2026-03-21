class Slideshow {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.speed = 3000; //default speed of 3 seconds
        this.root = document.createElement('div');
        this.root.style.display = 'flex';
        this.root.style.width = '80%';
        this.render();
        this.mount();
    }   

    render(){
        this.images.forEach(src => {
            const img = document.createElement('img');
            img.className = 'slide';
            img.src = src;
            this.root.appendChild(img);
        });
        setInterval(() => {
            //this.currentIndex = (this.currentIndex + 1) % this.images.length;
            //this.root.style.transform = `translateX(-${this.currentIndex * 10}%)`;
        }, this.speed);
    }

    mount(){
        this.mountPoint.appendChild(this.root);
    }

    play(){
        
        //i want that the intital image laods up,
        //then that image is changed after a duration

        //should i have a slideshow where i load up all 
        //the images before hand, or should i have one
        //where they are loaded as needed?
        //loading before hand is better performance-wise and they arent enough images to be an issue.

        //but if i have them laid out beforehand, how 
        //can i move that image into the slot wehn necessary?
        //css transitions? or should there be an images list
        //and an image slot and then after a timeout, i set the image slot
        //source to the next image in the list, i feel like in that case
        //i would even need to laod them efore hand and hide them with
        //oveflow hidden, id just change the img src dynamically to point 
        //to the next
        //and css transitions should still be able to work
        //as they are loaded when the elements they apply to 
        //experience chnages/creation, no?
    }
}

export { Slideshow };

//also how should i design this slideshow in terms of elements?
//technically I could have multiple divs and initialize the backgrounds on them
//or i could have mulple img elements.
//my goal is to have a slideshow where each image has a popup with some context
//to the image, as opposed to only being the images