import { useEffect, useRef, useState } from "react";
import "../../styles/whychooseus.css";
import assets from "../../assets/images";

import {
  FiShield,
  FiAward,
  FiUsers,
  FiCheckCircle,
  FiPackage,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  { icon: <FiPackage />, title: "Quality Material" },
  { icon: <FiShield />, title: "Fully Insured" },
  { icon: <FiAward />, title: "Certified Excellence" },
  { icon: <FiThumbsUp />, title: "Trusted Process" },
  { icon: <FiUsers />, title: "Trained Workers" },
  { icon: <FiCheckCircle />, title: "Guaranteed Output" },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 1000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="why-section"
      style={{ backgroundImage: `url(${assets.hero1})` }}
    >
      <div className="why-overlay"></div>

      <div className="why-container scroll-effect">
        {/* LEFT CONTENT */}
        <div className="why-left scroll-effect">
          <span className="why-tag">Reasons to Choose</span>

          <h2>
            UB Industries
            <br />
            Built on <strong>Quality</strong>. Driven by <strong>Precision</strong>.
          </h2>
        </div>

        {/* RIGHT GRID */}
        <div className="why-grid scroll-effect">
          {features.map((item, i) => (
            <div
              className={`why-card ${activeIndex === i ? "active" : ""}`}
              key={i}
            >
              <div className="why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}