import { IComponent } from '../Interfaces/IComponent.js';
import { TemplateEngine } from '../Components/TemplateEngine.js';
import { Navbar } from '../Components/Navbar.js';
import { Footer } from '../Components/Footer.js';
import '../Styles/Pages.css';

class Services extends IComponent {
    render() {
        const services = [
            {
                title: "Self Development & Awareness Programme",
                description: "A comprehensive life skills programme designed to empower young people with the social, survival, personal management, and development skills necessary to thrive. Students from first to third form engage in sessions on self-esteem, self-image, self-awareness, anger management, and conflict resolution. In fourth form, the curriculum advances to 'Unlocking Your Future,' covering diversity appreciation, relationship skills, leadership, career readiness, and business etiquette.",
                benefits: [
                    "Builds confidence and self-esteem",
                    "Develops coping and social skills",
                    "Teaches anger management and conflict resolution",
                    "Career mentoring and business etiquette training"
                ],
                icon: "🌱"
            },
            {
                title: "Supreme Enhancing Lives Forever Mentoring Programme",
                description: "A proven mentoring programme active since 2011 that pairs young people with dedicated mentors aged 18-25. Mentors assist with homework, exam preparation, social skills development, and serve as a constructive influence. Over 290 Supreme Beings have been connected with 237+ mentors. The programme includes social activities such as movie nights and dining outings to develop good manners, etiquette, and punctuality.",
                benefits: [
                    "One-on-one mentoring support",
                    "Homework and study assistance",
                    "Social skills and etiquette development",
                    "Positive role modelling and guidance"
                ],
                icon: "🤝"
            },
            {
                title: "Olweus Bullying Prevention Programme",
                description: "The most researched bullying prevention programme in the world, implemented in Barbadian schools since 2014. Our CEO Shawn Clarke is one of the first Certified Olweus Bullying Prevention trainers and consultants in the Caribbean. This school-wide programme engages teachers, administrators, counsellors, parents, and students to create a safer environment through awareness, intervention, and annual surveys to track progress.",
                benefits: [
                    "School-wide bullying prevention",
                    "Annual surveys to measure impact",
                    "Reduction in bully/victim problems",
                    "Engages entire school community"
                ],
                icon: "🛡️"
            },
            {
                title: "Supreme Alternative to School Suspension (SASS)",
                description: "A positive behavioural intervention programme designed to offer rehabilitative support to suspended students rather than punitive measures. Rooted in behavioural psychology, SASS focuses on teaching appropriate behaviours, conflict resolution, and problem-solving skills. Students are assigned for the duration of their suspension, working on academic assignments while being graded on attendance, behaviour, willingness to change, and work habits.",
                benefits: [
                    "Instructional rather than punitive approach",
                    "Teaches conflict resolution and life skills",
                    "Academic continuity during suspension",
                    "Parental involvement and transparency"
                ],
                icon: "📚"
            },
            {
                title: "Families in Therapy (FIT) Programme",
                description: "A comprehensive family therapy programme designed to help families heal, rebuild, and grow stronger together. Through structured therapeutic sessions, we address communication breakdowns, behavioural issues, and relational challenges, providing a path toward healthier family dynamics and lasting reconciliation.",
                benefits: [
                    "Professional family therapy sessions",
                    "Improved communication and understanding",
                    "Conflict resolution strategies",
                    "Strengthened family bonds"
                ],
                icon: "👨‍👩‍👧‍👦"
            }
        ];

        const layout = TemplateEngine.create(`
            <div class="page-services">
                <header data-ref="header"></header>
                <main class="page-main-content">
                    <section class="services-header">
                        <h1>Our Programmes</h1>
                        <p>Evidence-based programmes designed to transform lives, strengthen families, and build a brighter future for Barbados.</p>
                    </section>

                    <section class="services-list">
                        ${services.map(service => `
                            <div class="service-card">
                                <div class="service-card-header">
                                    <span class="service-icon">${service.icon}</span>
                                    <h2>${service.title}</h2>
                                </div>
                                <p class="service-description">${service.description}</p>
                                <ul class="service-benefits">
                                    ${service.benefits.map(benefit => `
                                        <li>${benefit}</li>
                                    `).join('')}
                                </ul>
                                <a href="/booking" class="btn btn-primary service-cta">Enquire About This Programme</a>
                            </div>
                        `).join('')}
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

export { Services };
