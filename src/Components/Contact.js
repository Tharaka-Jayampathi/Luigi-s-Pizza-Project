import seafoodPizza from '../seafood_pizza.png';

export default function Contact() {
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <img src={seafoodPizza} alt="Seafood Pizza" className="contact-image" />
                <div className="contact-info">
                    <p><strong>Address:</strong> 123 Pizza Street, Foodville</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Email:</strong> hello@luigispizza.com</p>

                    <h3>Hours</h3>
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>

                <div className="contact-form">
                    <h3>Send us a message</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
