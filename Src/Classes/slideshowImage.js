class slide{
    constructor(imageSrc, caption) {
        this.imageSrc = imageSrc;
        this.caption = caption;
        this.root = document.createElement('div');
        this.mount();
    }


}

export {slide};