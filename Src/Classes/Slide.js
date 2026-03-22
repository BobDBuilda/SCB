class Slide{
    constructor(image, content) {
        this.image = image.src;
        this.content = content;
    }

    render(){
        this.root = document.createElement('div');
        this.imageContainer = document.createElement('img');
        this.contentContainer = document.createElement('div');

        this.root.appendChild(this.imageContainer);
        this.root.appendChild(this.contentContainer);

        return this.root;
    }
}

export {Slide};