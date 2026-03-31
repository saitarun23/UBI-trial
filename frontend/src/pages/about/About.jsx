import React, { useState, useEffect, useRef } from "react";
import { FaBox, FaCheck, FaBolt, FaBullseye } from "react-icons/fa6";
import {FiStar, FiTrendingUp, FiFileText, FiUserCheck} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../../assets/images";
import "../../styles/about.css";

// text configurations with varied animation styles
const textConfigurations = [
  {
    type: "two-line-caps",
    line1: "ABOUT",
    line2: "US",
    line1Color: "#ffffff",
    line2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Our",
    word2: "Story",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "three-word-mixed",
    word1: "Quality",
    word2: "&",
    word3: "Excellence",
    word1Color: "#d1d5db",
    word2Color: "#14b8a6",
    word3Color: "#d1d5db",
  },
  {
    type: "two-word-mixed",
    word1: "Trust",
    word2: "& Partnership",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "single-word",
    text: "Innovation",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Excellence",
    color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Customer",
    word2: "Focused",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
];

const JOURNEY = [
  {
    id: "01",
    label: "01",
    title: "The Vision Begins",
    desc: "Founded in 2025, Urmila BhupathiRaju Industries was born from a passion to bring quality packaging solutions to businesses of all sizes across the region.",
  },
  {
    id: "02",
    label: "02",
    title: "Building the Foundation",
    desc: "We invested in the best machinery, sourced high-grade materials, and assembled a skilled team dedicated to excellence.",
  },
  {
    id: "03",
    label: "03",
    title: "Earning Customer Trust",
    desc: "Within our first months, we built strong relationships with clients by consistently delivering quality work on time.",
  },
  {
    id: "04",
    label: "04",
    title: "Expanding Our Reach",
    desc: "Our client base grew steadily—serving businesses from small startups to large-scale enterprises across the region.",
  },
  {
    id: "05",
    label: "05",
    title: "The Road Ahead",
    desc: "Today, we look ahead with confidence. Our goal is to keep innovating and being the most reliable packaging partner.",
  },
];

const items = [
  {
    title: "Our Values",
    desc: "Driven by integrity, quality, and long-term partnerships.",
    icon: <FiStar />,
  },
  {
    title: "Our Vision",
    desc:
      "UB Industry expands its horizon to international markets and serves customers across India.",
    icon: <FiTrendingUp />,
   
  },
  {
    title: "Our History",
    desc: "A legacy built on precision printing and continuous innovation.",
    icon: <FiFileText />,
  },
  {
    title: "Our Capabilities",
    desc: "Advanced infrastructure supporting scalable packaging solutions.",
    icon: <FiUserCheck />,
  },
];

const featureItems = [
  {
    icon: <FaBox />,
    title: "Advanced Infrastructure",
  },
  {
    icon: <FaCheck />,
    title: "Quality Assurance",
  },
  {
    icon: <FaBolt />,
    title: "On-Time Delivery",
  },
  {
    icon: <FaBullseye />,
    title: "Technical Excellence",
  },
];

const SVG_C = 600;
const ORBIT_R = 420;
const IMG_R = 185;
const CARD_R = 120;

const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);
const CARDS = angles.map((a) => ({
  cx: Math.round(SVG_C + ORBIT_R * Math.cos(a)),
  cy: Math.round(SVG_C + ORBIT_R * Math.sin(a)),
}));

function linePoints(card) {
  const dx = card.cx - SVG_C;
  const dy = card.cy - SVG_C;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / dist;
  const uy = dy / dist;
  return {
    x1: SVG_C + ux * IMG_R,
    y1: SVG_C + uy * IMG_R,
    x2: card.cx - ux * CARD_R,
    y2: card.cy - uy * CARD_R,
  };
}

function wrapText(text, maxLen) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (test.length <= maxLen) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef(null);
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for feature cards visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFeatureVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (featureSectionRef.current) {
      observer.observe(featureSectionRef.current);
    }

    return () => {
      if (featureSectionRef.current) {
        observer.unobserve(featureSectionRef.current);
      }
    };
  }, []);

  // Auto-cycle feature cards - changes every 2 seconds when visible
  useEffect(() => {
    if (!isFeatureVisible) return;

    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % featureItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isFeatureVisible]);

  // Hero text rotation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Rotate text every 1.4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textConfigurations.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const currentConfig = textConfigurations[currentTextIndex];

  return (
    <main className="about-page" id="about">
      {/* HERO WITH NEW TEXT CONFIGURATIONS */}
      <header className="industry-hero">
        <div className="industry-bg-pattern"></div>

        <div className="industry-hero-content">
          <AnimatePresence mode="wait">
            {/* Two Line Caps Layout */}
            {currentConfig.type === "two-line-caps" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {/* Two Line Mixed Layout */}
            {currentConfig.type === "two-line-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {/* Two Word Mixed Layout */}
            {currentConfig.type === "two-word-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-inline"
              >
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.word1Color }}
                  className="text-word"
                >
                  {currentConfig.word1}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.word2Color }}
                  className="text-word"
                >
                  {currentConfig.word2}
                </motion.span>
              </motion.div>
            )}

            {/* Three Word Mixed Layout */}
            {currentConfig.type === "three-word-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-inline"
              >
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.word1Color }}
                  className="text-word"
                >
                  {currentConfig.word1}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.word2Color }}
                  className="text-word"
                >
                  {currentConfig.word2}
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ color: currentConfig.word3Color }}
                  className="text-word"
                >
                  {currentConfig.word3}
                </motion.span>
              </motion.div>
            )}

            {/* Single Word Layout */}
            {currentConfig.type === "single-word" && (
              <motion.h1
                key={currentTextIndex}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ color: currentConfig.color }}
                className="text-single"
              >
                {currentConfig.text}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* WELCOME */}
      <section className="about-welcome">
        <div className="aboutfirst-grid scroll-effect">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`aboutfirst-card 
                  ${item.featured ? "featured" : ""} 
                  ${isActive ? "active" : ""}
                `}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="aboutfirst-card-inner">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-main">
        {/* WHO WE ARE */}
        <section className="about-company-section">
          <div className="about-company-content">
            <div className="about-company-header">
              <h2 className="about-section-title">Who We Are</h2>
              <div className="about-title-underline"></div>
            </div>
            <p className="about-intro-text">
              <strong>Urmila Bhupathiraju Industries</strong> is a flexible printing and packaging company
              based in Visakhapatnam, India. With a strong foundation in high-quality flexible materials,
              we are committed to delivering reliable, high-performance printing solutions.
            </p>
            <div className="about-company-grid">
              <div className="about-company-image-container">
                <div className="about-company-image-wrap">
                  <img src={assets.aboutwe} alt="Manufacturing facility" className="about-company-image" />
                </div>
              </div>
              <div className="about-company-text" ref={featureSectionRef}>
                <div className="about-features-grid">
                  {featureItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`about-feature-item ${index === activeFeatureIndex ? "about-feature-item--active" : ""}`}
                    >
                      <div className="feature-icon">{item.icon}</div>
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR */}
        <section className="about-director-section">
          <div className="about-director-container">
            <div className="about-director-header">
              <h2 className="about-section-title">Leadership</h2>
              <div className="about-title-underline"></div>
            </div>
            <div className="about-director-content">
              <div className="about-director-left">
                <div className="about-director-avatar-wrap">
                  <img src={assets.aboutDirector} alt="Managing Director" className="about-director-avatar" />
                  <div className="avatar-ring"></div>
                </div>
                <h3 className="about-director-name">Urmila Bhupathiraju</h3>
                <p className="about-director-role">Managing Director</p>
              </div>
              <div className="about-director-right">
                <div className="director-quote">
                  <span className="quote-mark">"</span>
                  <p>Excellence is not just a goal—it's our standard. Every print, every package, every delivery reflects our commitment to perfection.</p>
                </div>
                <div className="director-bio">
                  <p>Under the leadership of Urmila Bhupathiraju, the company has emerged as a powerhouse of innovation in the flexible printing industry. Her experience has been marked by a transition toward smarter manufacturing and a relentless pursuit of perfection.</p>
                  <p>Urmila's approach is deeply rooted in hands-on experience. She is known for her involvement in the technical aspects of the production floor, ensuring that the precision of every print run aligns with the client's brand identity.</p>
                  <p>Customer satisfaction is the primary compass by which Urmila steers the organization. Her consultative service model focuses on understanding shelf-life and durability needs, resulting in industry-leading client retention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="about-history-section">
          <div className="about-history-container">
            <div className="about-history-header">
              <h2 className="about-section-title">Our Journey</h2>
              <div className="about-title-underline"></div>
              <p className="about-history-intro">
                 From the beginning, our focus has been simple understand what
                 each customer truly needs, and build packaging that supports
                 their business for the long term.
              </p>
            </div>

            {/* SVG ORBITAL */}
            <div className="journey-svg-wrapper">
              <svg
                className="journey-svg"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="cardGrad" cx="38%" cy="28%" r="68%">
                    <stop offset="0%" stopColor="#303030" />
                    <stop offset="100%" stopColor="#151515" />
                  </radialGradient>

                  <clipPath id="imgClip">
                    <circle cx={SVG_C} cy={SVG_C} r={IMG_R} />
                  </clipPath>

                  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <style>{`
                  .orbit-spin { animation: orbitSpin 80s linear infinite; transform-origin: 600px 600px; }
                  .glow-ring   { }
                  .card-float { animation: floatCard 2.5s ease-in-out infinite; }
                  @keyframes orbitSpin  { to { transform: rotate(360deg); } }
                  @keyframes floatCard {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                  }
                `}</style>

                {/* Center image */}
                <image
                  href={assets.aboutjourney}
                  x={SVG_C - IMG_R} y={SVG_C - IMG_R}
                  width={IMG_R * 2} height={IMG_R * 2}
                  clipPath="url(#imgClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
                <circle
                  cx={SVG_C} cy={SVG_C} r={IMG_R}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2.5"
                />

                {/* Journey cards */}
                {CARDS.map((card, i) => {
                  const item = JOURNEY[i];
                  const titleLines = wrapText(item.title, 18);
                  const descLines  = wrapText(item.desc, 27);

                  const stepY      = card.cy - CARD_R + 38;
                  const sepY       = stepY + 18;
                  const titleStartY = sepY + 24;
                  const descStartY  = titleStartY + titleLines.length * 22 + 10;

                  return (
                    <g key={`card-${i}`} className="card-float" style={{ animationDelay: `${i * 0.2}s` }}>
                      <circle
                        cx={card.cx + 4} cy={card.cy + 6}
                        r={CARD_R}
                        fill="rgba(0,0,0,0.6)"
                      />
                      <circle
                        cx={card.cx} cy={card.cy}
                        r={CARD_R}
                        fill="url(#cardGrad)"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="2.5"
                      />
                      <path
                        d={`M ${card.cx - CARD_R * 0.62} ${card.cy - CARD_R * 0.72}
                            A ${CARD_R} ${CARD_R} 0 0 1
                            ${card.cx + CARD_R * 0.62} ${card.cy - CARD_R * 0.72}`}
                        fill="none"
                        stroke="rgba(255,255,255,0.09)"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />

                      <text
                        x={card.cx} y={stepY}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.38)"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                        letterSpacing="3"
                      >
                        {`STEP ${item.label}`}
                      </text>

                      <line
                        x1={card.cx - 32} y1={sepY}
                        x2={card.cx + 32} y2={sepY}
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="1"
                      />

                      {titleLines.map((line, li) => (
                        <text
                          key={`t-${li}`}
                          x={card.cx}
                          y={titleStartY + li * 22}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="16"
                          fontWeight="700"
                          fontFamily="system-ui, sans-serif"
                        >
                          {line}
                        </text>
                      ))}

                      {descLines.map((line, li) => (
                        <text
                          key={`d-${li}`}
                          x={card.cx}
                          y={descStartY + li * 17}
                          textAnchor="middle"
                          fill="#bbbbbb"
                          fontSize="12"
                          fontFamily="system-ui, sans-serif"
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}