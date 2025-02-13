import React from "react";
import "./Contact.css";
import modelPic from "./assets/images/4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
    <div className="container Contacter">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Type your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
      <div className="infos">
        <p> Be the first to know about exciting new designs, special events and much more.</p>
              <div className="model" style={{backgroundImage: `url(${modelPic})`,}}></div>
              <h1>CLASSIC SHAPES</h1>
       
      </div>
      
    </div>
    
  </>
  );
}

export default Contact;
