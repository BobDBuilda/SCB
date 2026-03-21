//client side router

class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    get(path, callback) {
        const route = this.routes.find(r => r.path === path);
        if (!route) {
            console.error(`Route not found: ${path}`);
        }
        //actually would it be better to say that if no callback is defined
        //then return an error?
        //if im not actually routing to another page, then wouldnt it be just an anchor within a page
        //or if i was, should i just use fetch to get from the server
        callback();
    }

    post(path, callback){
        try {
            const route = this.routes.find(r => r.path === path);
            if (!route) {
                throw new Error(`Route not found: ${path}`);
            }
        } catch (error) {
            console.error(error.message);
        }
        callback();
    }
}

export { Router };