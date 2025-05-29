import React from "react";
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        Feel free to reach out to me for any digital marketing services or collaborations.
      </p>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Phone</h3>
          <p><a href="tel:+919492919173">+91 9492919173</a></p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:rafimohammad055@gmail.com">rafimohammad055@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;