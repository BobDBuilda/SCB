class Slide{
    constructor(imageSource, content) {
        this.image = imageSource;
        this.content = content;
    }

    render(){
        this.root = document.createElement('div');
        this.imageContainer = document.createElement('img');
        this.contentContainer = document.createElement('div');

        this.
        return this.root;
    }
}

export {Slide};

//should i pass these slides at runtime into slideshow
//or should slideshow create them dynamically
//its highly unlikely that nay other component will use this besides
//slideshow
//as such, its best to have slideshow control ownership