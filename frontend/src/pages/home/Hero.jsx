import React, { useState, useEffect, useRef } from "react";
import assets from "../../assets/images";
import "../../styles/hero.css";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

const slides = [
    // {
    //   type: "text",
    //   headline: ["Welcome to the World of", "Branding"],
    //   sub: "Serving industries across India and worldwide",
    //   showParticles: false,
    // },
  {
    type: "image",
    bg: assets.product1,
    headline: ["Rolls"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product8,
    headline: ["Wheat", "Spices", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product6,
    headline: ["Oil", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product4,
    headline: ["Sea Food", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product2,
    headline: ["Bakery &", "Confectionery"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product5,
    headline: ["Dairy", "Products"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product3,
    headline: ["Pharma", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product7,
    headline: ["W-Cut & D-Cut", "Bags"],
    showParticles: false,
  },
  
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  const total = slides.length;

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setTimeout(next, 2000);
    return () => clearTimeout(timer);
  }, [current]);

  /* GSAP TEXT ANIMATION */
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".hero-line",
      { 
        y: 100, 
        opacity: 0,
        rotationX: -90,
        transformOrigin: "center top"
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        stagger: 0.15, 
        duration: 1.2,
        ease: "power3.out"
      }
    );

    if (slides[current].sub) {
      tl.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, [current]);

  /* THREE JS PARTICLES - Only for first slide */
  // useEffect(() => {
  //   if (!canvasRef.current) return;

  //   const scene = new THREE.Scene();
  //   sceneRef.current = scene;

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     1000
  //   );
  //   camera.position.z = 300;

  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: canvasRef.current,
  //     alpha: true,
  //     antialias: true,
  //   });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  //   // Create 3D industrial gears and mechanical parts
  //   const gearsGroup = new THREE.Group();
  //   const gears = [];
    
  //   // Metallic material for gears
  //   const metalMaterial = new THREE.MeshStandardMaterial({
  //     color: 0x444444,
  //     metalness: 0.8,
  //     roughness: 0.2,
  //   });

  //   const accentMaterial = new THREE.MeshStandardMaterial({
  //     color: 0xd4af37,
  //     metalness: 0.9,
  //     roughness: 0.1,
  //   });

  //   // PRINTING MACHINE (Left)
  //   const createPrintingMachine = () => {
  //     const group = new THREE.Group();
      
  //     // Main frame - dark metal
  //     const frameGeometry = new THREE.BoxGeometry(100, 120, 25);
  //     const frame = new THREE.Mesh(frameGeometry, metalMaterial);
  //     frame.position.z = -15;
  //     group.add(frame);
      
  //     // Left support pillar
  //     const pillarGeometry = new THREE.BoxGeometry(12, 140, 12);
  //     const leftPillar = new THREE.Mesh(pillarGeometry, metalMaterial);
  //     leftPillar.position.x = -48;
  //     group.add(leftPillar);
      
  //     // Right support pillar
  //     const rightPillar = new THREE.Mesh(pillarGeometry, metalMaterial);
  //     rightPillar.position.x = 48;
  //     group.add(rightPillar);
      
  //     // Main printing cylinder - gold accent
  //     const printCylinderGeometry = new THREE.CylinderGeometry(40, 40, 90, 32);
  //     const printCylinder = new THREE.Mesh(printCylinderGeometry, accentMaterial);
  //     printCylinder.rotation.z = Math.PI / 2;
  //     printCylinder.position.y = 15;
  //     group.add(printCylinder);
      
  //     // Impression roller below
  //     const impressionGeometry = new THREE.CylinderGeometry(35, 35, 90, 32);
  //     const impressionRoller = new THREE.Mesh(impressionGeometry, metalMaterial);
  //     impressionRoller.rotation.z = Math.PI / 2;
  //     impressionRoller.position.y = -20;
  //     group.add(impressionRoller);
      
  //     // Feed roller
  //     const feedGeometry = new THREE.CylinderGeometry(32, 32, 85, 32);
  //     const feedRoller = new THREE.Mesh(feedGeometry, metalMaterial);
  //     feedRoller.rotation.z = Math.PI / 2;
  //     feedRoller.position.set(-40, 0, 18);
  //     group.add(feedRoller);
      
  //     // Top panel
  //     const panelGeometry = new THREE.BoxGeometry(90, 25, 18);
  //     const panel = new THREE.Mesh(panelGeometry, metalMaterial);
  //     panel.position.y = 65;
  //     group.add(panel);
      
  //     group.position.set(-120, 30, 0);
  //     gearsGroup.add(group);
  //     gears.push(group);
  //   };

  //   // LAMINATE MACHINE (Center)
  //   const createLaminateMachine = () => {
  //     const group = new THREE.Group();
      
  //     // Main body
  //     const bodyGeometry = new THREE.BoxGeometry(100, 130, 30);
  //     const body = new THREE.Mesh(bodyGeometry, metalMaterial);
  //     body.position.z = -12;
  //     group.add(body);
      
  //     // Left support
  //     const supportGeometry = new THREE.BoxGeometry(11, 150, 11);
  //     const leftSupport = new THREE.Mesh(supportGeometry, metalMaterial);
  //     leftSupport.position.x = -47;
  //     group.add(leftSupport);
      
  //     // Right support
  //     const rightSupport = new THREE.Mesh(supportGeometry, metalMaterial);
  //     rightSupport.position.x = 47;
  //     group.add(rightSupport);
      
  //     // Upper heated plate - gold
  //     const upperPlateGeometry = new THREE.BoxGeometry(95, 10, 45);
  //     const upperPlate = new THREE.Mesh(upperPlateGeometry, accentMaterial);
  //     upperPlate.position.y = 45;
  //     group.add(upperPlate);
      
  //     // Lower heated plate - gold
  //     const lowerPlateGeometry = new THREE.BoxGeometry(95, 10, 45);
  //     const lowerPlate = new THREE.Mesh(lowerPlateGeometry, accentMaterial);
  //     lowerPlate.position.y = -45;
  //     group.add(lowerPlate);
      
  //     // Left pressure roller
  //     const leftRollerGeometry = new THREE.CylinderGeometry(28, 28, 90, 32);
  //     const leftRoller = new THREE.Mesh(leftRollerGeometry, metalMaterial);
  //     leftRoller.rotation.z = Math.PI / 2;
  //     leftRoller.position.set(-42, 0, 32);
  //     group.add(leftRoller);
      
  //     // Right pressure roller
  //     const rightRollerGeometry = new THREE.CylinderGeometry(28, 28, 90, 32);
  //     const rightRoller = new THREE.Mesh(rightRollerGeometry, metalMaterial);
  //     rightRoller.rotation.z = Math.PI / 2;
  //     rightRoller.position.set(42, 0, 32);
  //     group.add(rightRoller);
      
  //     // Control unit
  //     const controlGeometry = new THREE.BoxGeometry(45, 35, 16);
  //     const control = new THREE.Mesh(controlGeometry, metalMaterial);
  //     control.position.set(-30, 70, 0);
  //     group.add(control);
      
  //     group.position.set(0, -60, 0);
  //     gearsGroup.add(group);
  //     gears.push(group);
  //   };

  //   // PACK MACHINE (Right)
  //   const createPackMachine = () => {
  //     const group = new THREE.Group();
      
  //     // Main chassis
  //     const chassisGeometry = new THREE.BoxGeometry(105, 135, 28);
  //     const chassis = new THREE.Mesh(chassisGeometry, metalMaterial);
  //     chassis.position.z = -14;
  //     group.add(chassis);
      
  //     // Left vertical support
  //     const leftVerticalGeometry = new THREE.BoxGeometry(13, 155, 13);
  //     const leftVertical = new THREE.Mesh(leftVerticalGeometry, metalMaterial);
  //     leftVertical.position.x = -50;
  //     group.add(leftVertical);
      
  //     // Right vertical support
  //     const rightVerticalGeometry = new THREE.BoxGeometry(13, 155, 13);
  //     const rightVertical = new THREE.Mesh(rightVerticalGeometry, metalMaterial);
  //     rightVertical.position.x = 50;
  //     group.add(rightVertical);
      
  //     // Upper compression roller - gold
  //     const upperCompressionGeometry = new THREE.CylinderGeometry(38, 38, 95, 32);
  //     const upperCompression = new THREE.Mesh(upperCompressionGeometry, accentMaterial);
  //     upperCompression.rotation.z = Math.PI / 2;
  //     upperCompression.position.y = 40;
  //     group.add(upperCompression);
      
  //     // Lower compression roller - gold
  //     const lowerCompressionGeometry = new THREE.CylinderGeometry(38, 38, 95, 32);
  //     const lowerCompression = new THREE.Mesh(lowerCompressionGeometry, accentMaterial);
  //     lowerCompression.rotation.z = Math.PI / 2;
  //     lowerCompression.position.y = -40;
  //     group.add(lowerCompression);
      
  //     // Input feed guide
  //     const feedGuideGeometry = new THREE.BoxGeometry(18, 75, 24);
  //     const feedGuide = new THREE.Mesh(feedGuideGeometry, metalMaterial);
  //     feedGuide.position.set(-45, 5, 0);
  //     group.add(feedGuide);
      
  //     // Output collection guide
  //     const outputGuideGeometry = new THREE.BoxGeometry(18, 75, 24);
  //     const outputGuide = new THREE.Mesh(outputGuideGeometry, metalMaterial);
  //     outputGuide.position.set(45, 5, 0);
  //     group.add(outputGuide);
      
  //     // Heat unit
  //     const heatUnitGeometry = new THREE.BoxGeometry(28, 22, 18);
  //     const heatUnit = new THREE.Mesh(heatUnitGeometry, metalMaterial);
  //     heatUnit.position.set(0, 75, 18);
  //     group.add(heatUnit);
      
  //     group.position.set(120, 30, 0);
  //     gearsGroup.add(group);
  //     gears.push(group);
  //   };

  //   // Create all three machines
  //   createPrintingMachine();
  //   createLaminateMachine();
  //   createPackMachine();

  //   scene.add(gearsGroup);

  //   // Enhanced lighting for metallic effect
  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  //   scene.add(ambientLight);

  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  //   directionalLight.position.set(300, 400, 300);
  //   directionalLight.castShadow = true;
  //   scene.add(directionalLight);

  //   const pointLight1 = new THREE.PointLight(0xd4af37, 0.8, 1200);
  //   pointLight1.position.set(-400, 0, 0);
  //   scene.add(pointLight1);

  //   const pointLight2 = new THREE.PointLight(0x87ceeb, 0.5, 1200);
  //   pointLight2.position.set(400, 0, 0);
  //   scene.add(pointLight2);

  //   let mouseX = 0;
  //   let mouseY = 0;
  //   let targetX = 0;
  //   let targetY = 0;

  //   const handleMouseMove = (event) => {
  //     mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  //     mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   const clock = new THREE.Clock();

  //   const animate = () => {
  //     animationRef.current = requestAnimationFrame(animate);

  //     const elapsedTime = clock.getElapsedTime();

  //     // Smooth mouse following
  //     targetX += (mouseX - targetX) * 0.05;
  //     targetY += (mouseY - targetY) * 0.05;

  //     // Animate machines group - rotate smoothly
  //     gearsGroup.rotation.y = elapsedTime * 0.02;
  //     gearsGroup.rotation.x = targetY * 0.15;
  //     gearsGroup.position.x = targetX * 40;

  //     // Update lights to follow interaction
  //     pointLight1.position.x = -400 + targetX * 200;
  //     pointLight2.position.x = 400 - targetX * 200;
  //     directionalLight.position.y = 400 + targetY * 100;

  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("resize", handleResize);
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
      
  //     // Cleanup machines and materials
  //     gears.forEach((machine) => {
  //       machine.traverse((child) => {
  //         if (child.geometry) child.geometry.dispose();
  //         if (child.material) child.material.dispose();
  //       });
  //     });
      
  //     // Cleanup materials
  //     metalMaterial.dispose();
  //     accentMaterial.dispose();
      
  //     renderer.dispose();
  //   };
  // }, []);

  const slide = slides[current];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="hero" ref={heroRef}>
      
      {/* THREE BACKGROUND - Only visible on first slide */}
      {/* <canvas 
        ref={canvasRef} 
        className={`hero-canvas ${slide.showParticles ? 'visible' : 'hidden'}`}
      /> */}

      {/* ANIMATED GRADIENT OVERLAY for first slide */}
      {slide.showParticles && <div className="hero-gradient-overlay" />}

      {/* IMAGE BACKGROUND with smooth transitions and hover effect */}
      <AnimatePresence mode="wait">
        {slide.bg && (
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="hero-bg-wrapper"
          >
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT with slide animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="hero-content"
        >
          <h1 className="hero-title">
            {slide.headline.map((line, i) => (
              <span key={i} className="hero-line">
                {line}
              </span>
            ))}
          </h1>

          {slide.sub && <p className="hero-sub">{slide.sub}</p>}
        </motion.div>
      </AnimatePresence>

      {/* ENHANCED NAV BUTTONS */}
      <motion.button
        className="hero-nav prev"
        onClick={prev}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      <motion.button
        className="hero-nav next"
        onClick={next}
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* ENHANCED DOTS with progress animation */}
      {/* <div className="hero-dots">
        {slides.map((_, i) => (
          <motion.span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {i === current && (
              <motion.span
                className="dot-progress"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </motion.span>
        ))}
      </div> */}

      {/* SLIDE COUNTER */}
      <div className="hero-counter">
        <span className="current-slide">0{current + 1}</span>
        <span className="slide-divider">/</span>
        <span className="total-slides">0{total}</span>
      </div>

    </section>
  );
}