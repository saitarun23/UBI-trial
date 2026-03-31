import React, { useState } from "react";
import assets from "../../assets/images";
import "../../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "India",
    message: "",
  });



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((p) => ({ ...p, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission disabled - backend connection removed
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      country: "India",
      message: "",
    });
  };

  return (
    <main className="contact-page" id="contact">
      {/* HERO */}
      <header className="contact-hero">
        <div className="contact-hero-bg">
          <img src={assets.contacthero} alt="Customer support" />
        </div>
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title scroll-effect">Contact Us</h1>
          <p className="contact-hero-subtitle scroll-effect">
            We&apos;re here to help with your next print or packaging project.
            Reach out to us for quotes, queries, or collaboration.
          </p>
        </div>
      </header>

      {/* MAIN – CENTERED FORM */}
      <section className="contact-main">
        <section className="contact-form-card">
          <div className="contact-form-header scroll-effect">
            <button
              type="button"
              className="contact-tab contact-tab--active contact-header-button"
            >
              <span className="contact-tab-icon">✉</span>
              <span className="contact-tab-label">Contact Us</span>
            </button>

            <p className="contact-form-text scroll-effect">
              If you&apos;re looking to start a project or just have a question
              for the team, let us know by filling out the form below.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="firstName">First name *</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="lastName">Last name *</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Europe</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="contact-field contact-field--full">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your requirement"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="contact-actions">
              <button
                type="submit"
                className="contact-submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="contact-map-inner">
          <h3 className="contact-map-title">Visit us</h3>
          <p className="contact-map-text">
            You&apos;ll find our plant and office located in Visakhapatnam. Use the
            map below to get directions.
          </p>

          <div className="contact-map-card">
            <iframe
              title="Company location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d792.7094235418319!2d83.37844970854543!3d17.884984074607424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDUzJzA2LjEiTiA4M8KwMjInNDIuNCJF!5e0!3m2!1sen!2sin!4v1770617613500!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
