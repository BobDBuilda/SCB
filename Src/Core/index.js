class Character{
    //need a way for this to move within a scene
    //but have its own internal movements
    constructor(){
        //this should necessarily call a appendchild etc
        //it should create an object, but separate module
        //should be repsonsible for adding it to the flow

    }

    position = {
        x: 0,
        y: 0
    }

    move(x, y){
        this.position.x += x;
        this.position.y += y;

        //should this call an easing function?
    }

    //should a character comprise appendages?

    animate(){
        //play a predefined loop of images.
        //realistically it could switch between
        //5 stills in sequence
        //how to interact with the browser to diply the images
        //and at what intervals?
    }
}

class background{

}

class Scene{
    listOfObjects = [];

    addObject(object){
        this.listOfObjects.push(object);
    }

    removeObject(object){
        this.listOfObjects = this.listOfObjects.filter(obj => obj !== object);
    }


}