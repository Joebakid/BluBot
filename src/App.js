import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
 
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const navRef = useRef(null); // Reference for NavBar animation

  useEffect(() => {
    // Simulate a loading delay (e.g., 5 seconds)
    const timer = setTimeout(() => setLoading(false), 5000);

    return () => clearTimeout(timer); // Cleanup the timer
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
    <div className="App">
      <div className="bg-img">
        <NavBar ref={navRef} /> {/* Pass ref to NavBar */}
        <Header />
      </div>
    </div>
  );
}

export default App;
