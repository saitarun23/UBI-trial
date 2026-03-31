import { useEffect } from "react";

export default function useScrollEffect(trigger) {
  useEffect(() => {
    // ✅ Do nothing while splash is visible
    if (trigger === "__splash__") return;

    const sections = document.querySelectorAll(".scroll-effect");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Optional: unobserve once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [trigger]);
}