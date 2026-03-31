export default function FoodPacketIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main packet body - simplified rectangular pouch */}
      <path d="M7 4h10v16H7z" />
      
      {/* Top seal/fold */}
      <path d="M7 4v-2h10v2" />
      <line x1="7" y1="6" x2="17" y2="6" />
      
      {/* Simple wheat grain icon in center */}
      <line x1="12" y1="10" x2="12" y2="16" strokeWidth="2.5" />
      <path d="M10 12c.7-.5 1.3-.5 2 0s1.3-.5 2 0" strokeWidth="1.8" />
      <path d="M10 14c.7-.5 1.3-.5 2 0s1.3-.5 2 0" strokeWidth="1.8" />
    </svg>
  );
}