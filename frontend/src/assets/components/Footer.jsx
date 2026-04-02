import React, { useState, useEffect } from "react";
import "../../styles/footer.css";
import assets from "../images";

// Custom SVG Icons
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);


const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const GmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [activeLink, setActiveLink] = useState(null);

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Infrastructure", path: "#infrastructure" },
    // { name: "Products", path: "#products" },
    { name: "Contact Us", path: "#contact" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="footer-modern">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-grid">
          
          {/* Column 1: Company Info */}
          <div className="footer-column footer-about">
             <div className="footer-logo">
              <img src={assets.logo} alt="UB Industry Logo" className="footer-logo-img" />
              <div className="logo-text">
                <h2>UB Industries</h2>
                <span className="logo-tagline">Flexible Roto Print & Pack</span>
              </div>
            </div>
            
            <p className="footer-description">
              Leading provider of innovative flexible packaging solutions since 2025. 
              We specialize in multi-layer, multi-color printing and laminations for 
              all your packaging needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Quick Links
            </h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li 
                  key={index}
                  className={activeLink === index ? 'active' : ''}
                  onMouseEnter={() => setActiveLink(index)}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  <a href={link.path}>
                    <ChevronIcon />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Our Services
            </h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Flexible Packaging</span></a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Multi-Color Printing</span></a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Lamination Services</span></a></li>
              {/* <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Custom Pouches</span></a></li> */}
              <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Roll Form Solutions</span></a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}><ChevronIcon /><span>Quality Assurance</span></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column footer-contact">
            <h3 className="footer-heading">
              <span className="heading-line"></span>
              Get In Touch
            </h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <button 
                  className="contact-icon-btn"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/@17.8849841,83.3784497,15z?q=R.Sy.No:146/3B,+Vemulavalasa,+Anandapuram+Mandal,+Visakhapatnam+District,+531163",
                      "_blank"
                    );
                  }}
                  title="Open location on map"
                >
                  <MapPinIcon />
                </button>
                <div className="contact-details">
                  <h5>Visit Us</h5>
                  <p>R.Sy.No:146/3B, Vemulavalasa, Anandapuram Mandal, Visakhapatnam District, pincode - 531163</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-details">
                  <h5>Call Us</h5>
                  <p>+91 9618323745</p>
                  {/* <p>+91 955 382 9879</p> */}
                </div>
              </div>

              {/* <div className="contact-item">
                <div className="contact-icon">
                  <EmailIcon />
                </div>
                <div className="contact-details">
                  <h5>Email Us</h5>
                  <p>Ubindustry@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <ClockIcon />
                </div>
                <div className="contact-details">
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 09:00 AM - 07:00 PM</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>© 2026 <strong>Urmila Bhupathiraju Industries</strong>. All Rights Reserved.</p>
          </div>

          <div className="footer-social">
            <a href="Urmilabhupathirajuindustries@gmail.com" className="social-link" aria-label="Gmail">
              <GmailIcon />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <div className="footer-credit">
            <p>Designed by <strong>Urmistek</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
}