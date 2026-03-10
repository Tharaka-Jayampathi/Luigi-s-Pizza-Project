import seafoodPizza from '../seafood_pizza.png';

export default function Contact() {
    return (
        <div className="contact-page" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${seafoodPizza})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <p><strong>Address:</strong> No.12, Galle Fort, Galle</p>
                    <p><strong>Phone:</strong> 091 225 6987</p>
                    <p><strong>Email:</strong> galleluigispizza@gmail.com</p>

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
