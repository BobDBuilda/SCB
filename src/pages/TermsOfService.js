import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class TermsOfService extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-legal">
                <header data-ref="header"></header>
                <main class="page-main-content legal-content">
                    <h1>Terms of Service</h1>
                    <p class="legal-effective">Last updated: July 2026</p>

                    <section>
                        <h2>Acceptance of Terms</h2>
                        <p>By accessing or using the Supreme Counselling website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.</p>
                    </section>

                    <section>
                        <h2>Services Description</h2>
                        <p>Supreme Counselling provides professional counselling and personal development services, including individual counselling, family mediation, youth mentorship, and crisis intervention. Our services are provided by licensed and qualified professionals in accordance with applicable standards and ethical guidelines.</p>
                    </section>

                    <section>
                        <h2>Appointments and Cancellations</h2>
                        <ul>
                            <li>Appointments can be booked through our website booking form or by contacting us directly.</li>
                            <li>We require at least 24 hours notice for cancellations or rescheduling.</li>
                            <li>Late cancellations (less than 24 hours notice) may be subject to a cancellation fee.</li>
                            <li>Missed appointments without prior notice may be charged in full.</li>
                            <li>We understand that emergencies arise and will handle such situations on a case-by-case basis.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Confidentiality</h2>
                        <p>All sessions and communications are strictly confidential in accordance with professional ethical standards and applicable laws. Confidentiality may only be breached in the following exceptional circumstances:</p>
                        <ul>
                            <li>Where there is a serious risk of harm to yourself or others</li>
                            <li>Where required by law or court order</li>
                            <li>Where there is suspected abuse of a child or vulnerable adult</li>
                            <li>With your explicit written consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Client Responsibilities</h2>
                        <p>As a client of Supreme Counselling, you agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information relevant to your care</li>
                            <li>Attend scheduled appointments punctually</li>
                            <li>Provide at least 24 hours notice for cancellations</li>
                            <li>Treat our staff and other clients with respect and dignity</li>
                            <li>Notify us of any changes to your contact information</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Fees and Payment</h2>
                        <ul>
                            <li>Service fees are communicated prior to the commencement of services.</li>
                            <li>Payment is due at the time of service unless otherwise agreed.</li>
                            <li>We accept payment by cash, credit card, and bank transfer.</li>
                            <li>Fees are subject to change with prior notice.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Website Use</h2>
                        <p>By using our website, you agree to:</p>
                        <ul>
                            <li>Use the website for lawful purposes only</li>
                            <li>Not attempt to disrupt or compromise the website's security</li>
                            <li>Not submit false or misleading information through our forms</li>
                            <li>Not use the website to transmit harmful code or content</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Intellectual Property</h2>
                        <p>All content on this website, including text, graphics, logos, and images, is the property of Supreme Counselling and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
                    </section>

                    <section>
                        <h2>Limitation of Liability</h2>
                        <p>Supreme Counselling shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim arising from these terms shall not exceed the fees paid by you for the specific service giving rise to the claim.</p>
                    </section>

                    <section>
                        <h2>Termination</h2>
                        <p>We reserve the right to terminate or suspend services to clients who violate these terms, fail to pay fees, or whose behaviour is deemed inappropriate or disruptive. Clients may terminate services at any time by providing written notice.</p>
                    </section>

                    <section>
                        <h2>Governing Law</h2>
                        <p>These Terms of Service shall be governed by and construed in accordance with the laws of Barbados. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Barbados.</p>
                    </section>

                    <section>
                        <h2>Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.</p>
                    </section>

                    <section>
                        <h2>Contact</h2>
                        <p>For questions about these Terms of Service, please contact us:</p>
                        <p>
                            Supreme Counselling<br>
                            #5 1st Avenue, Belleville, St. Michael, Barbados<br>
                            Email: secretary@supremecounsellingbb.com<br>
                            Phone: (246) 538-9769 / (246) 836-5601
                        </p>
                    </section>
                </main>
                <footer data-ref="footer"></footer>
            </div>
        `);

        const refs = TemplateEngine.getRefs(layout);
        refs.header.appendChild(new Navbar().render());
        refs.footer.appendChild(new Footer().render());

        return layout;
    }
}

export { TermsOfService };
