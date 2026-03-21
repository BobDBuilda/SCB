// import express from 'express';

import { call } from "function-bind";

// const router = express.Router();

// // Define your routes here
// router.get('/', (req, res) => {
//     //res.cookie
//     res.sendFile("C:\\Users\\nikol\\Desktop\\SCB\\Templates\\index.html");
// });

// router.get('/about', (req, res) => {
//     res.coo
//     res.send('This is the about page');
// }); 

// router.get('/contact', (req, res) => {
//     res.send('This is the contact page');
// }); 

// export { router };

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