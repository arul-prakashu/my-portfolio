import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Black & White Icons
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: <a href="mailto:arulprakashu@gmail.com">arulprakashu@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>Phone: <a href="tel:+9597470788">+9988776655</a></p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
