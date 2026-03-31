import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../images";
import "../../styles/navbar.css";

const Navbar = ({ onChangePage, activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = (page) => (e) => {
    e.preventDefault();
    onChangePage(page);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo + Text */}
        <div className="navbar-brand">
          <img src={assets.logo} alt="Urmistek Logo" />

          <div className="brand-text">
            <span className="brand-name">rmila Bhupathiraju Industries</span>
            <span className="brand-industry">Flexible Roto Print & Pack</span>
          </div>
        </div>

        {/* Desktop / Tablet Navigation */}
        <nav className="navbar-menu">
          <a
            href="/home"
            className={activePage === "home" ? "active" : ""}
            onClick={handleLinkClick("home")}
          >
            HOME
          </a>

          <a
            href="/services"
            className={activePage === "services" ? "active" : ""}
            onClick={handleLinkClick("services")}
          >
            SERVICES
          </a>

          {/* <a
            href="/products"
            className={activePage === "products" ? "active" : ""}
            onClick={handleLinkClick("products")}
          >
            PRODUCTS
          </a> */}

        
          <a
            href="/about"
            className={activePage === "about" ? "active" : ""}
            onClick={handleLinkClick("about")}
          >
            ABOUT US
          </a>

          <a
            href="/infrastructure"
            className={activePage === "infrastructure" ? "active" : ""}
            onClick={handleLinkClick("infrastructure")}
          >
            INFRASTRUCTURE
          </a>

          <a
            href="/contact"
            className={activePage === "contact" ? "active" : ""}
            onClick={handleLinkClick("contact")}
          >
            CONTACT US
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <nav className={`navbar-menu-mobile ${menuOpen ? "is-open" : ""}`}>
        <a
          href="/home"
          className={activePage === "home" ? "active" : ""}
          onClick={handleLinkClick("home")}
        >
          HOME
        </a>

        <a
          href="/services"
          className={activePage === "services" ? "active" : ""}
          onClick={handleLinkClick("services")}
        >
          SERVICES
        </a>

        {/* <a
          href="/products"
          className={activePage === "products" ? "active" : ""}
          onClick={handleLinkClick("products")}
        >
          PRODUCTS
        </a> */}

        <a
          href="/about"
          className={activePage === "about" ? "active" : ""}
          onClick={handleLinkClick("about")}
        >
          ABOUT US
        </a>

        <a
          href="/infrastructure"
          className={activePage === "infrastructure" ? "active" : ""}
          onClick={handleLinkClick("infrastructure")}
        >
          INFRASTRUCTURE
        </a>

        <a
          href="/contact"
          className={activePage === "contact" ? "active" : ""}
          onClick={handleLinkClick("contact")}
        >
          CONTACT US
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

//We Brand 4U(logo)