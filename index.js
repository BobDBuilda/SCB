import { Slideshow } from './Src/Classes/slideshow.js'; 
import { emailForm } from './Src/Classes/emailForm.js';  
import { Map } from './Src/Classes/map.js';
import { Router } from './Src/Classes/Router.js';
import { Navbar } from './Src/Classes/navbar.js';

//const router = new Router();
// router.get("/", () => {
//     //i assume when express implements this res, req
//     //are populated by destructuring an object that resides 
//     //lower down/more abstracted
//     console.log("amway");
// });



//so essentially, i need something to mount to 'main'
//and then i mount to all the rest of the components
//to that
//what i can have is a class called 'app'
//


// const navbar = new Navbar(document.querySelector('nav'));
// const slideshow = new Slideshow([
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80",
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80",
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80"
// ], document.querySelector('section[name="hero"]'));

// const email = new emailForm({
//     "name":"text", 
//     "email":"email", 
//     "message":"textarea"
// }, document.querySelector('section[name="contact"]'));

// const map = new Map(document.querySelector('section[name="map"]'));

// const submitButton = document.querySelector('button[type="submit"]');

