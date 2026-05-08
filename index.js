import { Slideshow } from './src/Components/Slideshow.js'; 
import { EmailForm } from './src/Components/EmailForm.js';  
import { Map } from './src/Components/Map.js';
import { Router } from './src/Components/Router.js';
import { Navbar } from './src/Components/Navbar.js';
import { App } from './src/Components/App.js';
import { PrivacyNotice } from './src/Components/PrivacyNotice.js';
import { Hero } from './src/Components/Hero.js';
import { ProductContainer } from './src/Components/ProductContainer.js';

const nav = new Navbar();
const emailform = new EmailForm({
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
