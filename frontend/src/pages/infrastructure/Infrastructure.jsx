import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaLink, FaFilm, FaBox, FaCut } from "react-icons/fa";
import assets from "../../assets/images";
import "../../styles/infrastructure.css";

const sections = [
  {
    id: 1,
    title: "Rotogravure Printing",
    icon: FaCog,
    specs: [
      { label: "Color Capability", value: "Up to 7 colours" },
      { label: "Control System", value: "Auto registration control" },
      { label: "Quality", value: "On-line video & defect detection" },
      { label: "Max Width", value: "1000 mm" },
    ],
    description: "Advanced rotogravure technology for premium packaging solutions",
    img: assets.infra1,
  },

  {
    id: 2,
    title: "Lamination",
    icon: FaLink,
    specs: [
      { label: "Technology", value: "Solvent & solvent-free lamination" },
      { label: "Coating System", value: "High-precision gravure coating" },
      { label: "Bond Strength", value: "Excellent interlayer adhesion" },
      { label: "Max Width", value: "Up to 1000 mm" },
    ],
    description: "Multi-layer lamination for enhanced strength and barrier performance",
    img: assets.infra2,
  },

  {
    id: 3,
    title: "Slitting",
    icon: FaCut,
    specs: [
      { label: "Slitting Type", value: "Razor & shear slitting" },
      { label: "Tension Control", value: "Automatic web tension control" },
      { label: "Edge Quality", value: "Clean, burr-free edges" },
      { label: "Max Width", value: "Up to 1000 mm" },
    ],
    description: "Precision slitting for consistent roll quality and smooth conversion",
    img: assets.infra3,
  },

  {
    id: 4,
    title: "Pouching",
    icon: FaBox,
    specs: [
      { label: "Pouch Types", value: "Stand-up, flat & zipper pouches" },
      { label: "Sealing System", value: "Precision temperature-controlled sealing" },
      { label: "Automation", value: "PLC & servo-driven control" },
      { label: "Output", value: "High-speed, consistent production" },
    ],
    description: "Advanced pouch making solutions for flexible packaging applications",
    img: assets.infra4,
  },
];

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = sections[activeTab];

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-cycle spec cards - changes every 2 seconds when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveSpecIndex((prev) => (prev + 1) % activeSection.specs.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isVisible, activeSection.specs.length]);

  // Reset spec index when tab changes
  useEffect(() => {
    setActiveSpecIndex(0);
  }, [activeTab]);

  return (
    <main className="infra-page">
      {/* HERO */}
      <header className="infra-hero">
        <div className="infra-hero-bg">
          <img
            src={assets.infraHero}
            alt="Infrastructure overview"
          />
        </div>
        <div className="infra-hero-overlay" />
        <div className="infra-hero-content">
          <h1 className="infra-hero-title scroll-effect">Infrastructure</h1>
          <p className="infra-hero-subtitle scroll-effect">
            A future-ready plant with high-speed presses, laminators and film
            lines to support demanding packaging projects.
          </p>
        </div>
      </header>

      {/* ADVANCED TAB-BASED SECTION */}
      <section className="infra-main" ref={sectionRef}>
        {/* NAVIGATION TABS */}
        <div className="infra-tabs-container">
          <div className="infra-tabs-header">
            <h2 className="infra-tabs-title">Equipment & Capabilities</h2>
            <div className="infra-tabs-count">
              {activeTab + 1} / {sections.length}
            </div>
          </div>

          <div className="infra-tabs-nav">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  className={`infra-tab-btn ${index === activeTab ? "infra-tab-btn--active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="infra-tab-icon">
                    <IconComponent />
                  </span>
                  <span className="infra-tab-label">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT DISPLAY */}
        <div className="infra-content-wrapper">
          <div className="infra-content-left">
            <div className="infra-image-card">
              <img
                src={activeSection.img}
                alt={activeSection.title}
                className="infra-image"
              />
            </div>
          </div>

          <div className="infra-content-right">
            <div className="infra-spec-header">
              <h3 className="infra-spec-title">{activeSection.title}</h3>
              <p className="infra-spec-description">{activeSection.description}</p>
            </div>

            <div className="infra-specs-grid">
              {activeSection.specs.map((spec, index) => (
                <div 
                  key={index} 
                  className={`infra-spec-item ${index === activeSpecIndex ? "infra-spec-item--active" : ""}`}
                >
                  <div className="infra-spec-label">{spec.label}</div>
                  <div className="infra-spec-value">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}