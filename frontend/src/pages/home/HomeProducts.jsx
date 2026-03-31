import React, { useRef, useState, useEffect } from "react";
import "../../styles/homeproducts.css";
import assets from "../../assets/images";

const homeproducts = [
  { title: "Dairy Products Packaging", image: assets.dairy },
  { title: "Ice Cream Packaging", image: assets.icecream },
  { title: "General Purpose Products Packaging", image: assets.powdered },
  { title: "Seafood Packaging", image: assets.seafood },
  { title: "Beverages Packaging", image: assets.beverages },
  { title: "Biscuits Packaging", image: assets.biscuits },
  { title: "Chips Packaging", image: assets.chip },
  { title: "Coffee Packaging", image: assets.coffee },
  { title: "Oil Packaging", image: assets.oil },
  { title: "Pharma & Healthcare Packaging", image: assets.healthcare },
  { title: "Chocolates Packaging", image: assets.choclate },
  { title: "Lidding Films", image: assets.lid },
  { title: "Chemical Packaging", image: assets.chemical },
  { title: "Agriculture Packaging", image: assets.agriculture },
  { title: "Shrink Films", image: assets.shrink },
  { title: "Noodles & Pasta", image: assets.pasta },
];

// duplicated for seamless infinite loop
const extendedProducts = [...homeproducts, ...homeproducts];

export default function HomeProducts() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // auto-scroll in a circular loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    const speed = 2.5; // px per frame

    const step = () => {
      if (!isHovered) {
        const maxLoopPoint =
          (container.scrollWidth - container.clientWidth) / 2;

        if (container.scrollLeft >= maxLoopPoint) {
          container.scrollLeft = 0;
        }

        container.scrollLeft += speed;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  // when mouse wheel is over the strip, scroll horizontally instead of page
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault(); // stop page vertical scroll
      const delta = e.deltaY || e.deltaX;
      container.scrollLeft += delta;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="homeproducts-section">
      {/* HEADING */}
      <div className="homeproducts-heading scroll-effect">
        <span>Services</span>
        <h2>
          We specialize in the production of high-quality flexible packaging
          solutions across industries.
        </h2>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="homeproducts-scroll-wrapper scroll-effect">
        <div
          ref={scrollContainerRef}
          className="homeproducts-scroll-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedProducts.map((item, index) => (
            <div className="homeproduct-card" key={`${item.title}-${index}`}>
              <img src={item.image} alt={item.title} />

              <div className="homeproduct-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
