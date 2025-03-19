import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Preloader from "./components/Preloader";
import Documentation from "./components/Documentation";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

function App() {
  const [loading, setLoading] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.fromTo(
        navRef.current,
        { opacity: 0, y: "-10%" },
        { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
      );
    }
  }, [loading]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
      <div className="App">
        <div className="bg-img">
          <NavBar ref={navRef} />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
