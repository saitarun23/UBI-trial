import React, { useState, useEffect, useRef } from 'react';
import "../../styles/valuessection.css";
// Custom SVG Icons
const EyeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const AwardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const values = [
  {
    icon: EyeIcon,
    title: "Vision",
    desc: "To deliver innovative and creative packaging solutions that elevate brand identity and customer trust.",
    number: "01"
  },
  {
    icon: TargetIcon,
    title: "Mission",
    desc: "To consistently produce high-quality printed and laminated packaging through technology, teamwork, and precision.",
    number: "02"
  },
  {
    icon: AwardIcon,
    title: "Quality",
    desc: "Customer satisfaction through uncompromised quality standards, continuous improvement, and excellence.",
    number: "03"
  },
];

function ValueCard({ item, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const Icon = item.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`value-card-modern ${isVisible ? 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--index': index
      }}
    >
      <div className="card-border"></div>
      <div className="card-glow"></div>
      
      <div className="card-number">{item.number}</div>
      
      <div className="card-icon-wrapper">
        <div className="icon-bg"></div>
        <Icon />
      </div>

      <div className="card-content-wrapper">
        <h3 className="card-title-modern">{item.title}</h3>
        <div className="title-line"></div>
        <p className="card-description">{item.desc}</p>
      </div>

      <div className="card-corner tl"></div>
      <div className="card-corner tr"></div>
      <div className="card-corner bl"></div>
      <div className="card-corner br"></div>

      <div className="card-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="values-section-modern">
      <div className="grid-background">
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
      </div>

      <div className="values-container-modern">
        <div className="section-header-modern">
          <div className="header-line"></div>
          {/* <span className="header-label">CORE VALUES</span> */}
          <h2 className="section-title-modern">
            <span className="title-word" data-word="What">What</span>
            <span className="title-word" data-word="Drives">Drives</span>
            <span className="title-word" data-word="Us">Us</span>
            <span className="title-word highlight" data-word="Forward">Forward</span>
          </h2>
          <p className="section-subtitle-modern">
            Excellence through precision, innovation, and unwavering commitment
          </p>
        </div>

        <div className="values-grid-modern">
          {values.map((item, index) => (
            <ValueCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* <div className="section-footer">
          <div className="footer-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}