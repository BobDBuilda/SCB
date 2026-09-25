import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class PrivacyPolicy extends IComponent {
    render() {
        const layout = TemplateEngine.create(`
            <div class="page-legal">
                <header data-ref="header"></header>
                <main class="page-main-content legal-content">
                    <h1>Privacy Policy</h1>
                    <p class="legal-effective">Last updated: July 2026</p>

                    <section>
                        <h2>Introduction</h2>
                        <p>Supreme Counselling ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. We comply with the Barbados Data Protection Act and applicable privacy laws.</p>
                    </section>

                    <section>
                        <h2>Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details you provide through our booking or contact forms.</li>
                            <li><strong>Health Information:</strong> Information about your mental health and well-being that you choose to share with us during counselling sessions.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and analytics tools.</li>
                            <li><strong>Communication Records:</strong> Records of correspondence when you contact us via email, phone, or our website forms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>How We Use Your Information</h2>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To provide, maintain, and improve our counselling services</li>
                            <li>To process and respond to appointment bookings and inquiries</li>
                            <li>To communicate with you about your sessions and our services</li>
                            <li>To comply with legal and regulatory obligations</li>
                            <li>To improve our website and user experience</li>
                            <li>To send administrative information, such as changes to our terms or policies</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Legal Basis for Processing</h2>
                        <p>We process your personal information based on the following legal grounds:</p>
                        <ul>
                            <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose.</li>
                            <li><strong>Contractual Necessity:</strong> Where processing is necessary to fulfill a contract with you, such as providing counselling services.</li>
                            <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation.</li>
                            <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests, provided your rights do not override those interests.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Data Storage and Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                        <ul>
                            <li>Encryption of data in transit and at rest</li>
                            <li>Secure server infrastructure</li>
                            <li>Access controls and authentication procedures</li>
                            <li>Regular security assessments and monitoring</li>
                        </ul>
                        <p>Your data is stored securely and retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
                    </section>

                    <section>
                        <h2>Data Sharing and Disclosure</h2>
                        <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                        <ul>
                            <li>With service providers who assist us in operating our website and business (e.g., hosting, analytics)</li>
                            <li>Where required by law or to protect our legal rights</li>
                            <li>With your explicit consent or at your direction</li>
                            <li>In an emergency where there is a serious risk to you or others</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Your Rights</h2>
                        <p>Under the Barbados Data Protection Act, you have the following rights:</p>
                        <ul>
                            <li><strong>Right of Access:</strong> Request a copy of the personal information we hold about you.</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                            <li><strong>Right to Restrict Processing:</strong> Request restriction of processing in certain circumstances.</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.</li>
                            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Cookies</h2>
                        <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Please see our cookie consent banner for more information about the cookies we use.</p>
                    </section>

                    <section>
                        <h2>Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
                    </section>

                    <section>
                        <h2>Children's Privacy</h2>
                        <p>We do not knowingly collect personal information from children under 18 without parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
                    </section>

                    <section>
                        <h2>Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:</p>
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

export { PrivacyPolicy };
