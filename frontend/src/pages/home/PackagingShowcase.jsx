import React, { useState, useEffect } from 'react';
import { Package, Sprout, Droplet, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../styles/packagingshowcase.css";

export default function PackagingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const materials = [
    {
      icon: Package,
      name: "Food Packaging",
      color: "#7DAACB",
      description: "Food-safe with superior barrier maintaining freshness",
      details: ["Food Grade", "Oxygen Barrier", "Aroma Lock", "Printable"],
    },    
    {
      icon: Sprout,
      name: "Agricultural",
      color: "#79AE6F",
      description: "Robust materials for field protection with durability",
      details: ["UV Protected", "Moisture Control", "Puncture Resistant", "Breathable"],
    },
    {
      icon: Droplet,
      name: "Liquid Packaging",
      color: "#4C8CE4",
      description: "Leak-proof solutions for complete protection",
      details: ["Leak Proof", "Lightweight", "Flexible", "Durable"],
    },
    {
      icon: HeartPulse,
      name: "Pharmaceutical",
      color: "#187980",
      description: "Sterile, protective barriers for sensitive healthcare products",
      details: ["Biocompatible", "Sterile", "Tamper Proof", "Safety Compliant"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % materials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="materials-showcase-new">
      {/* Header */}
      <motion.div
        className="showcase-header-new"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="showcase-main-title">Flexible Packaging Materials</h2>
        <p className="showcase-subtitle">Premium flexible packaging solutions for diverse industries</p>
      </motion.div>

      {/* Cards Grid */}
      <div className="materials-grid">
        {materials.map((material, index) => {
          const Icon = material.icon;
          const isActive = index === activeIndex;
          const isExpanded = index === expandedIndex;

          return (
            <motion.div
              key={index}
              className={`material-card ${isActive ? "active" : ""} ${isExpanded ? "expanded" : ""}`}
              style={{ '--card-color': material.color }}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleCardClick(index)}
            >
              <div className="material-card-inner">
                <div className="card-icon" style={{ color: material.color }}>
                  {<Icon size={48} strokeWidth={1.5} />}
                </div>
                <h3>{material.name}</h3>
                <p>{material.description}</p>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="card-content-expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="content-divider"></div>
                    
                    <div className="details-section">
                      <h4>Key Specifications</h4>
                      <div className="details-grid">
                        {material.details.map((detail, i) => (
                          <motion.span
                            key={i}
                            className="detail-badge"
                            style={{ backgroundColor: material.color }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {detail}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <p className="full-description">
                      Engineered for excellence with superior performance characteristics, offering industry-leading protection and customization capabilities for your specific requirements.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Description Section */}
      {/* <motion.div
        className="materials-description-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="description-content">
          <h3>Why Our Materials Excel</h3>
          <p>
            Their excellent strength, durability, resistance to moisture, and impeccable finish make these flexible packaging materials highly demanded. We provide complete customization based on sizes, thicknesses, and designs with latest manufacturing technology for printing, laminating, cutting, and slitting.
          </p>
        </div>
      </motion.div> */}
    </section>
  );
}