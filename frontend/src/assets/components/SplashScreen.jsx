import React, { useEffect, useState } from "react";
import assets from "../images";
import "../../styles/splashscreen.css";

const SplashScreen = ({ onFinish }) => {
  const [logoState, setLogoState]       = useState("hidden");
  const [showTitle, setShowTitle]       = useState(false);
  const [showTagline, setShowTagline]   = useState(false);
  const [showDecor, setShowDecor]       = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [introHide, setIntroHide]       = useState(false);
  const [activeIdx, setActiveIdx]       = useState(0);
  const [blurring, setBlurring]         = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const services = [
    {
      title:    "PRINT",
      subtitle: "Print. Precision. Packaging.",
      desc:     "High-speed rotogravure printing on flexible films with up to 7 vivid colours.",
      image:    assets.land1,
    },
    {
      title:    "LAMINATE",
      subtitle: "Layer. Bond. Protect.",
      desc:     "Multi-layer film bonding that creates strong, barrier-rich packaging material.",
      image:    assets.land2,
    },
    {
      title:    "PACK",
      subtitle: "Pouch. Pack. Deliver.",
      desc:     "Converting laminated rolls into finished pouches and bags, ready for brands.",
      image:    assets.land3,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // ── Phase 1: Logo pop ───────────────────────────────── 0s
    const t1 = setTimeout(() => setLogoState("burst"),  1900);
    const t2 = setTimeout(() => setLogoState("stable"), 1100);

    // ── Phase 2: Brand name slides up ──────────────────── 1.6s
    const t3 = setTimeout(() => setShowTitle(true),   1600);

    // ── Phase 3: Tagline + gold line ───────────────────── 2.8s
    const t4 = setTimeout(() => setShowTagline(true), 2800);
    const t5 = setTimeout(() => setShowDecor(true),   3200);

    // ── Hold ~3s so user reads intro comfortably ────────

    // ── Phase 4: PRINT slide ────────────────────────────── 6.5s
    const t6 = setTimeout(() => {
      setIntroHide(true);
      setShowServices(true);
      setActiveIdx(0);
      setShowSubtitle(false);
    }, 6500);
    // subtitle + desc appear 1.1s after slide image settles
    const t6b = setTimeout(() => setShowSubtitle(true), 7600);

    // ── LAMINATE slide ──────────────────────────────────── 9.5s  (~3s reading time per slide - FASTER)
    const t7 = setTimeout(() => {
      setActiveIdx(1);
      setShowSubtitle(false);
    }, 9500);
    const t7b = setTimeout(() => setShowSubtitle(true), 10600);

    // ── PACK slide ──────────────────────────────────────── 13.5s
    const t8 = setTimeout(() => {
      setActiveIdx(2);
      setShowSubtitle(false);
    }, 13500);
    const t8b = setTimeout(() => setShowSubtitle(true), 14600);

    // ── Phase 5: Blur-out exit ──────────────────────────── 17.5s
    const t9  = setTimeout(() => setBlurring(true), 17500);
    const t10 = setTimeout(() => {
      document.body.style.overflow = "auto";
      onFinish?.();
    }, 18700);

    return () => {
      [t1,t2,t3,t4,t5,t6,t6b,t7,t7b,t8,t8b,t9,t10].forEach(clearTimeout);
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${blurring ? "splash-exit" : ""}`}>

      {/* ── Phase 1–3: Company Introduction ── */}
      <div className={`splash-intro ${introHide ? "intro-hide" : ""}`}>

        <div className={`splash-logo-wrap logo-${logoState}`}>
          <img
            src={assets.logo}
            alt="Urmila Bhupathiraju Industries"
            className="splash-logo-img"
          />
          <div className="logo-ring" />
        </div>

        <div className={`splash-title ${showTitle ? "title-in" : ""}`}>
          <span className="title-word w1">Urmila </span>
          <span className="title-word w2">Bhupathiraju </span>
          <span className="title-word w3">Industries</span>
        </div>

        <div className={`splash-tagline ${showTagline ? "tagline-in" : ""}`}>
          Flexible Roto Print &amp; Pack
        </div>

        <div className={`splash-decor ${showDecor ? "decor-expand" : ""}`} />
      </div>

      {/* ── Phase 4: Full-Screen Services ── */}
      {showServices && (
        <div className="splash-services">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`svc-slide ${i === activeIdx ? "svc-active" : ""} ${i < activeIdx ? "svc-done" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.72) 100%), url(${svc.image})`,
              }}
            >
              <div className="svc-inner">
                {/* <span className="svc-index">0{i + 1}</span> */}

                <h2 className="svc-title">{svc.title}</h2>

                <div className="svc-bar" />

                <p className={`svc-subtitle ${i === activeIdx && showSubtitle ? "subtitle-in" : ""}`}>
                  {svc.subtitle}
                </p>

                <p className={`svc-desc ${i === activeIdx && showSubtitle ? "desc-in" : ""}`}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplashScreen;