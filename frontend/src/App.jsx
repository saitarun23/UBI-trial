import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import useScrollEffect from "./assets/hooks/useScrollEffect";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Infrastructure from "./pages/infrastructure/Infrastructure";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Contact from "./pages/contact/Contact";

import SplashScreen from "./assets/components/SplashScreen";

const App = () => {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "") || "home";
    const pageName = hash.split("?")[0];
    const validPages = [
      "home",
      "about",
      "services",
      "infrastructure",
      "products",
      "product-detail",
      "contact",
    ];
    return validPages.includes(pageName) ? pageName : "home";
  };

  const initialPageRef = useRef(getPageFromHash());

  const [activePage, setActivePage] = useState(initialPageRef.current);

  // 🔥 Two states:
  // showSplash = splash component mounted
  // splashDone  = splash finished timeline, content can render
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);

  // ✅ Trigger scroll observer only after content is visible
  const scrollEffectKey = splashDone ? activePage : "__splash__";
  useScrollEffect(scrollEffectKey);

  // ✅ Scroll to top on page change (after splash)
  useEffect(() => {
    if (splashDone) window.scrollTo(0, 0);
  }, [activePage, splashDone]);

  // hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (!splashDone) return;
      setActivePage(getPageFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [splashDone]);

  const pages = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    infrastructure: <Infrastructure />,
    products: <Products />,
    "product-detail": <ProductDetail />,
    contact: <Contact />,
  };

  // Render ProductDetail
  const renderDetailPage = () => {
    return <ProductDetail />;
  };

  const handleSplashFinish = () => {
    // 1) allow content to mount behind splash immediately
    setSplashDone(true);

    const page = initialPageRef.current;
    setActivePage(page);
    if (!window.location.hash) window.location.hash = `#${page}`;

    // 2) keep splash mounted for 2 frames, then remove it
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowSplash(false);
        window.scrollTo(0, 0);
      });
    });
  };

  return (
    <div>
      {/* ✅ Render content as soon as splashDone, even if splash still mounted */}
      {splashDone && (
        <>
          <Navbar onChangePage={setActivePage} activePage={activePage} />
          {activePage === "product-detail" ? renderDetailPage() : pages[activePage]}
          <Footer />
        </>
      )}

      {/* ✅ Splash stays above content until showSplash false */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
    </div>
  );
};

export default App;