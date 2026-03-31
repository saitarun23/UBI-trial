import React, { useState } from "react";
import "../../styles/contactnewsletter.css";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    // Form submission disabled - backend connection removed
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-bg-pattern"></div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Badge */}
          <div className="newsletter-badge">
            <HiSparkles className="badge-icon" />
            <span>Stay Connected</span>
          </div>

          <h2 className="newsletter-title">Join Our Packaging Community</h2>

          <p className="newsletter-description">
            Get exclusive insights into flexible packaging innovations, industry
            trends, technical guides, and special offers delivered straight to
            your inbox.
          </p>

          <div className="newsletter-features">
            <div className="feature-item">
              <span>Industry News & Updates</span>
            </div>
            <div className="feature-item">
              <span>Technical Resources</span>
            </div>
            <div className="feature-item">
              <span>Exclusive Promotions</span>
            </div>
          </div>

          {/* FORM */}
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="subscribe-btn"
            >
              Subscribe Now
              <FiArrowRight className="btn-icon" />
            </button>
          </form>

          {/* STATUS MESSAGE UI */}
          {message && (
            <div className="newsletter-status newsletter-status--error">
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
