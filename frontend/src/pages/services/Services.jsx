import {
  Layers,
  Target,
  Sprout,
  Milk,
  Droplet,
  HeartPulse,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodPacketIcon from "../../assets/components/icons/FoodPacketIcon";

import assets from "../../assets/images";
import "../../styles/services.css";

const textConfigurations = [
  {
    type: "two-line-caps",
    line1: "We Brand",
    line2: "4",
    showLogo: true,
    line1Color: "#ffffff",
    line2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Tea &",
    word2: "Coffee",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Bakery &",
    word2: "Confectionery",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Chips &",
    word2: "Snacks",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "single-word",
    text: "Spices & Pulses",
    color: "#14b8a6",
  },
  {
    type: "three-word-mixed",
    word1: "Grains, ",
    word2: "Seeds",
    word3: "& Flour",
    word1Color: "#d1d5db",
    word2Color: "#14b8a6",
    word3Color: "#d1d5db",
  },
  {
    type: "two-word-mixed",
    word1: "Noodles &",
    word2: "Pasta",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "single-word",
    text: "Choclates & Protien Mix",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Oil & Liquid",
    color: "#ffffff",
  },
  {
    type: "single-word",
    text: "Pharma & Fertilizers",
    color: "#ffffff",
  },
  {
    type: "two-word-mixed",
    word1: "Next-Gen",
    word2: "EcoPackaging",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Frozen Shrimp & ",
    word2: "Sea Food",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Dairy",
    word2: "Products",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
  {
    type: "two-word-mixed",
    word1: "Pet",
    word2: "Feed",
    word1Color: "#ffffff",
    word2Color: "#14b8a6",
  },
];

const products = [
  {
    id: 1,
    name: "Coffee & Tea",
    subcategories: ["Instant Coffee", "Ground Coffee", "Tea Bags", "Loose Leaf Tea", "Green Tea"],
    description: "Suitable for nitrogen flushing, good moisture & oxygen barrier with matt, gloss and metallic finishes.",
    materials: ["PET/ALU/PE", "BOPP/CPP", "Metallized PET"],
    image1: assets.coffees,
    image2: assets.coffeess,
  },
  {
    id: 2,
    name: "Chips",
    subcategories: ["Chips", "Wafers", "Crackers", "Popcorn", "Extruded Snacks", "Namkeen"],
    description: "Suitable for nitrogen flushing, good moisture & oxygen barrier. Matt, gloss & metallic finishes available.",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP"],
    image1: assets.chip,
    image2: assets.chips,
  },
  {
    id: 3,
    name: "Dairy",
    subcategories: ["Milk Pouches", "Buttermilk", "Curd", "Paneer", "Cream"],
    description: "Laminates and pouches maintaining hygiene, freshness and reliable distribution for dairy products.",
    materials: ["LDPE", "LLDPE", "Co-extruded PE", "Laminated Films"],
    image1: assets.dairys,
    image2: assets.dairyss,
  },
  {
    id: 4,
    name: "Oil",
    subcategories: ["Edible Oil", "Sunflower Oil", "Palm Oil", "Canola Oil", "Coconut Oil"],
    description: "Leak-proof laminates and pouches for edible oils with good oxygen & moisture barrier properties.",
    materials: ["LDPE", "LLDPE", "PET/PE Laminates", "Metallized PET"],
    image1: assets.oils,
    image2: assets.oilss,
  },
  {
    id: 5,
    name: "Biscuit",
    subcategories: ["Biscuits", "Cookies", "Chocolate Bars", "Candy", "Candy Sticks"],
    description: "Good moisture barrier properties. Matt, gloss, metallic & see-through combinations available.",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP", "BOPP/PE"],
    image1: assets.biscuit,
    image2: assets.biscuitss,
  },
  {
    id: 6,
    name: "Wheat & Spices",
    subcategories: ["Wheat Flour", "Atta", "Maida", "Semolina", "Mixed Grain Flour"],
    description: "High-strength laminates with good moisture barrier for grain and flour products.",
    materials: ["BOPP", "BOPP/PE", "PP Woven Laminates", "Metallized Films"],
    image1: assets.powdereds,
    image2: assets.powderedss,
  },
  {
    id: 7,
    name: "Pasta & Noodles",
    subcategories: ["Sauces", " Pasta", "Instant Noodles", "Vermicelli"],
    description: "High-strength barrier films for pasta and noodles with excellent moisture resistance and shelf stability.",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP"],
    image1: assets.pastas,
    image2: assets.pastass,
  },
  {
    id: 8,
    name: "Seafood",
    subcategories: ["Frozen Shrimp", "Fish Fillets", "Prawns", "Squid", "Crab"],
    description: "High barrier laminates for frozen seafood with excellent moisture & puncture resistance.",
    materials: ["PET/PE", "Nylon/PE", "High Barrier Laminates"],
    image1: assets.seafoods,
    image2: assets.seafoodss,
  },
  {
    id: 9,
    name: "Pharma",
    subcategories: ["Pharmaceuticals", "Surgical Supplies", "Diagnostic Kits"],
    description: "Safe and sterile packaging solutions designed for healthcare products, ensuring hygiene, protection, and extended shelf life.",
    materials: ["Medical Grade Paper", "Tyvek®", "PET/PE", "Aluminum Foil Laminates", "PVC Films"],
    image1: assets.healthcares,
    image2: assets.healthcaress,
  },
  {
    id: 10,
    name: "Ice Cream",
    subcategories: ["Vanilla", "Chocolate", "Strawberry", "Mint", "Cookies & Cream"],
    description: "Specialized packaging for ice cream with excellent temperature control and moisture barrier.",
    materials: ["Polyethylene", "Polystyrene", "Aluminum Foil"],
    image1: assets.icecreams,
    image2: assets.icecreamss,
  },
  {
    id: 11,
    name: "Choclates",
    subcategories: ["Chocolate Bars", "Dark Chocolate", "Milk Chocolate","Truffles"],
    description: "High barrier laminates for chocolates and protein mixes with excellent moisture resistance and shelf stability.",
    materials: ["BOPP", "BOPP/CPP", "Metallized BOPP"],
    image1: assets.choclates,
    image2: assets.choclatess,
  },
  {
    id: 12,
    name: "Agriculture",
    subcategories: ["Seeds", "Fertilizers", "Pesticides", "Grains", "Animal Feed"],
    description: "Durable and moisture-resistant packaging solutions designed to protect agricultural products from environmental damage and ensure safe storage and transport.",
    materials: ["HDPE", "LDPE", "PP Woven Sacks", "Laminated Films"],
    image1: assets.agricultures,
    image2: assets.agriculturess,
  },
];

const packagingSolutions = [
  {
    title: "Food Packaging",
    desc: "Solutions suitable for nitrogen flushing, good moisture and oxygen barrier with matt, gloss and metallic finishes.",
    Icon: FoodPacketIcon,
    variant: "food",
  },
  {
    title: "Agriculture Packaging",
    desc: "Structures tailored for agricultural products with reliable barrier and mechanical strength for rural distribution.",
    Icon: Sprout,
    variant: "agri",
  },
  {
    title: "Milk Products Packaging",
    desc: "Laminates and pouches for milk and dairy products, maintaining hygiene, freshness and reliable distribution.",
    Icon: Milk,
    variant: "beverage",
  },
  {
    title: "Industrial Packaging",
    desc: "High-performance industrial laminates engineered for demanding environments and heavy products.",
    Icon: Layers,
    variant: "industrial",
  },
  {
    title: "Liquid Packaging",
    desc: "Leak-proof laminates and pouches for edible oils, cleaners and other liquid products.",
    Icon: Droplet,
    variant: "liquid",
  },
  {
    title: "Healthcare Packaging",
    desc: "Packaging suitable for pharma and healthcare products with high hygiene and protection needs.",
    Icon: HeartPulse,
    variant: "health",
  },
];

export default function Services() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [productStates, setProductStates] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textConfigurations.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  // Sequence loop for each product: image1 → image2 → overlay
  useEffect(() => {
    const intervals = products.map((product) => {
      let step = 0; // 0: image1, 1: image2, 2: overlay
      
      // Initialize state for this product
      setProductStates((prev) => ({
        ...prev,
        [product.id]: { currentImage: 'image1', showOverlay: false }
      }));

      return setInterval(() => {
        if (step === 0) {
          // Show image1
          setProductStates((prev) => ({
            ...prev,
            [product.id]: { currentImage: 'image1', showOverlay: false }
          }));
          step = 1;
        } else if (step === 1) {
          // Show image2
          setProductStates((prev) => ({
            ...prev,
            [product.id]: { currentImage: 'image2', showOverlay: false }
          }));
          step = 2;
        } else {
          // Show overlay
          setProductStates((prev) => ({
            ...prev,
            [product.id]: { ...prev[product.id], showOverlay: true }
          }));
          step = 0;
        }
      }, 2500); // Each step lasts 2.5 seconds
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const currentConfig = textConfigurations[currentTextIndex];

  return (
    <main className="services-page" id="services">

      {/* ANIMATED HERO */}
      <header className="services-hero-new">
        <div className="services-hero-bg">
          <img
            src={assets.servicesHero}
            alt="Services overview"
          />
        </div>
        <div className="services-hero-overlay" />
        <div className="services-hero-content-new">
          <AnimatePresence mode="wait">

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
                {currentConfig.showLogo ? (
                  <div className="text-line-with-logo">
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
                    <motion.img
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      src={assets.logo}
                      alt="UB Industries Logo"
                      className="text-line-logo"
                    />
                  </div>
                ) : (
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
                )}
              </motion.div>
            )}

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

      {/* MAIN BODY */}
      <section className="services-main">

       
        {/* PRODUCTS SHOWCASE */}
        <section className="products-showcase-section">
          <div className="products-showcase-header">
            <h2 className="products-showcase-title">Flexible Packaging Materials</h2>
            <p className="products-showcase-subtitle">
              Premium flexible packaging solutions for diverse industries
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => {
              const state = productStates[product.id] || { currentImage: 'image1', showOverlay: false };
              
              return (
                <motion.div
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: product.id * 0.1 }}
                >
                  {/* IMAGE + OVERLAY */}
                  <div className="product-image-container">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={state.currentImage}
                        src={state.currentImage === 'image2' ? product.image2 : product.image1}
                        alt={product.name}
                        className="product-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    </AnimatePresence>

                    {/* AUTO-SHOWING OVERLAY */}
                    <div className="product-overlay" style={{ 
                      opacity: state.showOverlay ? 1 : 0,
                      transform: state.showOverlay ? 'translateY(0)' : 'translateY(20px)'
                    }}>

                      <div className="overlay-section-label">Products</div>
                      <div className="overlay-chips-row">
                        {product.subcategories.map((item, i) => (
                          <span key={i} className="overlay-chip">{item}</span>
                        ))}
                      </div>

                      <div className="overlay-divider"></div>

                      <div className="overlay-section-label">Description</div>
                      <p className="overlay-desc-text">{product.description}</p>

                      <div className="overlay-divider"></div>

                      <div className="overlay-section-label">Type of Materials</div>
                      <div className="overlay-material-row">
                        {product.materials.map((mat, i) => (
                          <span key={i} className="overlay-mat-tag">{mat}</span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* PRODUCT NAME ONLY */}
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>

         {/* PACKAGING SOLUTIONS */}
        <section className="packaging-section">
          <div className="packaging-header">
            <h2 className="packaging-title scroll-effect">Packaging Solutions</h2>
            <p className="packaging-subtitle scroll-effect">
              Application-focused flexible packaging for different product categories.
            </p>
          </div>
          <div className="packaging-grid">
            {packagingSolutions.map(({ title, desc, Icon, variant }) => (
              <div className="pack-card scroll-effect" key={title}>
                <div className={`pack-icon-circle pack-${variant}`}>
                  <Icon className="pack-icon" />
                </div>
                <h3 className="pack-card-title scroll-effect">{title}</h3>
                <p className="pack-card-text scroll-effect">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE BANNER */}
        <section className="services-quote-banner">
          <div className="quote-icon-wrap scroll-effect">
            <Target className="quote-icon" />
          </div>
          <p className="scroll-effect">
            We support brands of every size — from pilot runs to full-scale
            production — with the same focus on quality, speed and reliability.
          </p>
        </section>

      </section>
    </main>
  );
}