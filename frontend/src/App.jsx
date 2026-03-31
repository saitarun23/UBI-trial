import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import useScrollEffect from "./assets/hooks/useScrollEffect";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Home from "./pages/home/home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Infrastructure from "./pages/infrastructure/Infrastructure";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Contact from "./pages/contact/Contact";

import SplashScreen from "./assets/components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Trigger scroll observer only after content is visible
  const scrollEffectKey = splashDone ? location.pathname : "__splash__";
  useScrollEffect(scrollEffectKey);

  // ✅ Scroll to top on page change (after splash)
  useEffect(() => {
    if (splashDone) window.scrollTo(0, 0);
  }, [location.pathname, splashDone]);

  const handleSplashFinish = () => {
    setSplashDone(true);
    // If on root path, navigate to home
    if (location.pathname === "/") {
      navigate("/home", { replace: true });
    }

    // keep splash mounted for 2 frames, then remove it
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowSplash(false);
        window.scrollTo(0, 0);
      });
    });
  };

  // Get current page name from pathname for Navbar
  const getPageName = () => {
    const path = location.pathname.replace("/", "") || "home";
    return path;
  };

  const handleChangePage = (pageName) => {
    navigate(`/${pageName}`);
  };

  return (
    <div>
      {/* ✅ Render content as soon as splashDone, even if splash still mounted */}
      {splashDone && (
        <>
          <Navbar onChangePage={handleChangePage} activePage={getPageName()} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}

      {/* ✅ Splash stays above content until showSplash false */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
    </div>
  );
};

export default App;