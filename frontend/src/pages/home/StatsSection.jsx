import "../../styles/statssection.css";
import {
  FaUserTie,
  FaChartBar,
  FaSyncAlt,
  FaGlobe,
  FaUsers
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserTie />,
    value: "6",
    label: "Years of Experience",
  },
  {
    icon: <FaChartBar />,
    value: "40,000",
    label: "Metric Tons of Production",
    sub: "(Per Annum)",
  },
  {
    icon: <FaSyncAlt />,
    value: "10 cr",
    label: "Company Turnover",
    sub: "(USD 10 Million)",
  },
  {
    icon: <FaGlobe />,
    value: "5+",
    label: "Exporting Countries",
  },
  {
    icon: <FaUsers />,
    value: "599+",
    label: "People Counted",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section scroll-effect">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h2 className="stat-value">{item.value}</h2>
            <p className="stat-label">{item.label}</p>
            {item.sub && <span className="stat-sub">{item.sub}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
