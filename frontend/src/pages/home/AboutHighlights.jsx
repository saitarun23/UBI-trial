import infraVideo from "../../assets/images/vid1.mp4";
import "../../styles/abouthighlights.css";

import {
  FiStar,
  FiTrendingUp,
  FiFileText,
  FiUserCheck,
} from "react-icons/fi";



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

export default function AboutHighlights() {
  return (
    <section className="about-highlights">
        {/* HEADING */}
      <div className="about-heading scroll-effect">
        <span>Our Infrastructure</span>
            <h2>Our facility features a high-speed, five-drive, seven-color rotogravure printer, 
                handling prints up to 1050mm wide and 1000mm in circumference,
                complemented by advanced lamination and slitting machines for superior packaging quality.
            </h2>
      </div>

      {/* Video Section */}
      <div className="video-wrapper scroll-effect">
        <video
          src={infraVideo}
          controls
          muted
          playsInline
        />
      </div>

      {/* Cards Section */}
      {/* <div className="highlights-grid scroll-effect">
        {items.map((item, index) => (
          <div
            key={index}
            className={`highlight-card ${
              item.featured ? "featured" : ""
            }`}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
