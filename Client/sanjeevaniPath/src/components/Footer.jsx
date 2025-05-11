import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="qh-footer">
      <div className="qh-container">
        <div className="qh-footer-grid">
          <div className="qh-brand">
            <h3 className="qh-footer-title">SanjeevaniPath</h3>
            <p className="qh-footer-text">
              Access healthcare anytime, anywhere. Our telemedicine platform
              connects patients with qualified healthcare providers for virtual
              consultations.
            </p>
          </div>

          <div className="qh-links-group">
            <div>
              <h4 className="qh-footer-heading">Quick Links</h4>
              <ul className="qh-footer-list">
                <li>
                  <a href="/" className="qh-footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#AboutUs" className="qh-footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#features" className="qh-footer-link">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#ContactUs" className="qh-footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="qh-footer-heading">Legal</h4>
              <ul className="qh-footer-list">
                <li>
                  <a href="/privacy" className="qh-footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="qh-footer-link">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/accessibility" className="qh-footer-link">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="qh-footer-heading qh">Contact Us</h4>
              <address className="qh-footer-address">
                <p>1234 SanjeevaniPath Healthcare </p>
                <p>Medical District, MD 12345</p>
                <p className="qh-footer-contact">
                  Email: info@SanjeevaniPath.com
                </p>
                <p>Phone: 123456789</p>
              </address>
            </div>
          </div>
        </div>

        <div className="qh-footer-bottom">
          <p>
            © {new Date().getFullYear()} SanjeevaniPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
