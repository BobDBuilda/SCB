class App{
    constructor(){
        if(!App.instance){
            App.instance = this;
        }
        return App.instance;
    }
}

export { App };