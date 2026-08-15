// import { Slideshow } from './src/Components/Slideshow.js'; 
// import { EmailForm } from './src/Components/EmailForm.js';  
// import { Map } from './src/Components/Map.js';
import { Router } from './src/Components/Router.js';
import { Home } from './src/pages/Home.js';
import { Contact } from './src/pages/Contact.js';
import { About } from './src/pages/About.js';
import { Booking } from './src/pages/Booking.js';
import { Stories } from './src/pages/Stories.js';
import { FAQ } from './src/pages/FAQ.js';
import { Services } from './src/pages/Services.js';
import { PrivacyPolicy } from './src/pages/PrivacyPolicy.js';
import { TermsOfService } from './src/pages/TermsOfService.js';
import { PrivacyNotice } from './src/Components/PrivacyNotice.js';
import { ChatWidget } from './src/Components/ChatWidget.js';

const router = new Router();

router.register('/home', () => new Home().render());
router.register('/', () => new Home().render());
router.register('/contact', () => new Contact().render());
router.register('/about', () => new About().render());
router.register('/booking', () => new Booking().render());
router.register('/stories', () => new Stories().render());
router.register('/faq', () => new FAQ().render());
router.register('/services', () => new Services().render());
router.register('/privacy', () => new PrivacyPolicy().render());
router.register('/terms', () => new TermsOfService().render());

router.start();

const chat = new ChatWidget();
document.body.appendChild(chat.render());

const privacyNotice = new PrivacyNotice();
document.body.appendChild(privacyNotice.render());
