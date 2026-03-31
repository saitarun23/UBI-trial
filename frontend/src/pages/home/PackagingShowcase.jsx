import React, { useState } from 'react';
import { Package, Sprout, Droplet, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../styles/packagingshowcase.css";

export default function PackagingShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const materials = [
    {
      icon: Package,
      name: "Food Packaging",
      color: "#f97316",
      description: "Food-safe with superior barrier maintaining freshness",
      details: ["Food Grade", "Oxygen Barrier", "Aroma Lock", "Printable"],
    },    
        
    {
      icon: Droplet,
      name: "Liquid Packaging",
      color: "#3b82f6",
      description: "Leak-proof solutions for complete protection",
      details: ["Leak Proof", "Lightweight", "Flexible", "Durable"],
    },
    {
      icon: Sprout,
      name: "Agricultural",
      color: "#08a722",
      description: "Robust materials for field protection with durability",
      details: ["UV Protected", "Moisture Control", "Puncture Resistant", "Breathable"],
    },
    {
      icon: HeartPulse,
      name: "Pharmaceutical",
      color: "#187980",
      description: "Sterile, protective barriers for sensitive healthcare products",
      details: ["Biocompatible", "Sterile", "Tamper Proof", "Safety Compliant"],
    },
  ];

  const Particle = ({ delay, x, y, color }) => (
    <motion.div
      className="particle"
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ 
        x: x, 
        y: y, 
        opacity: 0, 
        scale: 0 
      }}
      transition={{ 
        duration: 1, 
        delay: delay, 
        ease: "easeOut" 
      }}
      style={{
        position: 'absolute',
        width: '8px',
        height: '8px',
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none'
      }}
    />
  );

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
        <p className="showcase-subtitle">Discover flexible packaging materials through immersive exploration</p>
      </motion.div>

      {/* 3D Stacked Cards Container */}
      <div className="materials-stack-container">
        {materials.map((material, idx) => {
          const Icon = material.icon;
          const isSelected = selectedIndex === idx;
          const isAboveSelected = selectedIndex !== null && idx < selectedIndex;
          const isBelowSelected = selectedIndex !== null && idx > selectedIndex;

          return (
            <motion.div
              key={idx}
              className="material-card-3d"
              layout
              onClick={() => setSelectedIndex(isSelected ? null : idx)}
              style={{
                zIndex: isSelected ? 100 : 50 - idx,
              }}
              animate={{
                y: isSelected 
                  ? 0 
                  : isBelowSelected 
                    ? 80 
                    : isAboveSelected 
                      ? -80 
                      : idx * 12,
                rotateX: isSelected ? 0 : -5,
                scale: isSelected ? 1 : 0.98 - idx * 0.01,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              {/* Card Header - Always Visible */}
              <motion.div 
                className="card-header-3d"
                animate={{
                  background: material.color,
                  borderColor: material.color,
                }}
              >
                <div className="card-icon-wrapper-3d">
                  <Icon color="#ffffff" size={32} strokeWidth={1.5} />
                </div>
                
                <div className="card-header-text">
                  <h3 className="card-name-3d">{material.name}</h3>
                  <p className="card-brief-3d">{material.description}</p>
                </div>

                <motion.div 
                  className="expand-indicator"
                  animate={{ rotate: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ⟩
                </motion.div>
              </motion.div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className="card-content-3d"
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

              {/* Particle bursts on expand */}
              {isSelected && (
                <div className="particles-container">
                  {[...Array(6)].map((_, i) => (
                    <Particle
                      key={i}
                      delay={i * 0.05}
                      x={(Math.random() - 0.5) * 200}
                      y={(Math.random() - 0.5) * 200}
                      color={material.color}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Description Section */}
      <motion.div
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
      </motion.div>
    </section>
  );
}