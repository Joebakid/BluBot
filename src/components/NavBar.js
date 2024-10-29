import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Use useRef to reference the nav element

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: "-10%" },
      { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
    );
  }, []);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className="line">
      <div className="container">
        {/* Hamburger button for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation menu */}
        <ul className={`flex-navBar ${isOpen ? "show" : ""}`}>
          <li>
            <a href="logo">Alien</a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              About Us
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              Utility
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              How To Buy
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              RoadMap
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              Telegram
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="logo">
              Whitepaper
            </a>
          </li>
          <li>
            <a className="btn-navBar navbar-hover-effect" href="#btn">
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
