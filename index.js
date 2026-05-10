// import { Slideshow } from './src/Components/Slideshow.js'; 
// import { EmailForm } from './src/Components/EmailForm.js';  
// import { Map } from './src/Components/Map.js';
import { Router } from './src/Components/Router.js';
import { Home } from './src/pages/Home.js';
import { Contact } from './src/pages/Contact.js';
import { About } from './src/pages/About.js';
import { Booking } from './src/pages/Booking.js';

const router = new Router();

router.register('/home', () => new Home().render());
router.register('/', () => new Home().render());
router.register('/contact', () => new Contact().render());
router.register('/about', () => new About().render());
router.register('/booking', () => new Booking().render());

router.start();
