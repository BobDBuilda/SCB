import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { EmailForm } from '../Components/EmailForm.js';
import { PrivacyNotice } from '../Components/PrivacyNotice.js';
import '../Styles/Pages.css';

class Booking extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-booking">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <div class="booking-header">
                        <h1>Book a Session</h1>
                        <p>Take the first step towards a better you. Fill out the form below to request an appointment.</p>
                    </div>
                    
                    <div class="form-card">
                        <div data-ref="form-container"></div>
                    </div>

                    <div class="booking-info">
                        <p>Available Monday - Friday, 9:00 AM - 6:00 PM</p>
                        <p>Emergency sessions available upon request.</p>
                    </div>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        
        const bookingForm = new EmailForm({
            fullName: 'text',
            preferredDate: 'date',
            serviceType: 'text',
            additionalNotes: 'textarea'
        });

        refs.header.appendChild(new Navbar().render());
        refs['form-container'].appendChild(bookingForm.render());
        refs.footer.appendChild(new PrivacyNotice().render());

        return layout;
    }
}

export { Booking };