import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 footer-about">
            <h3>About Us</h3>
            <p>
              J-aura is a design studio creating everlasting, minimalist
              jewelry inspired by timelessness. Explore our luxurious
              collection of timeless designs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/our-story">About Us</a></li>
              <li><a href="/jewelry">Our Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4 footer-contact">
            <h3>Contact</h3>
            <p>Email: info@j-aura.com</p>
            <p>Phone: +212 123 456 789</p>
            <p>Address: Avenue des Fleurs, Agadir, Morocco</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} J-aura. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;