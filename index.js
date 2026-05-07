import { Slideshow } from './Src/Components/slideshow.js'; 
import { emailForm } from './Src/Components/emailForm.js';  
import { Map } from './Src/Components/map.js';
import { Router } from './Src/Components/Router.js';
import { Navbar } from './Src/Components/navbar.js';
import { App } from './Src/Components/App.js';
import { PrivacyNotice } from './Src/Components/PrivacyNotice.js';
import { Hero } from './Src/Components/Hero.js';
import { ProductContainer } from './Src/Components/ProductContainer.js';

const nav = new Navbar();
const emailform = new emailForm({
    name: 'input',
    email: 'email',
    message: 'textarea',
});
const map = new Map();
const notice = new PrivacyNotice();
const hero = new Hero();
const products = new ProductContainer();

const main = document.querySelector('[name="Main"]');

const heroElement = hero.render();
heroElement.appendChild(nav.render());
// main.appendChild(products.render());

main.appendChild(heroElement);
main.appendChild(products.render());
main.appendChild(notice.render());
main.appendChild(map.render());


// const email = new emailForm({
//     "name":"text", 
//     "email":"email", 
//     "message":"textarea"
// }, document.querySelector('section[name="contact"]'));

// const map = new Map(document.querySelector('section[name="map"]'));

// const submitButton = document.querySelector('button[type="submit"]');

