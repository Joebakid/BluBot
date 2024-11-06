import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // New state for sticky effect
  const navRef = useRef(null);

  useEffect(() => {
    // GSAP animation for initial load
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: "-10%" },
      { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
    );

    // Scroll event listener for sticky effect
    const handleScroll = () => {
      const headerHeight = document.querySelector(".header").offsetHeight;
      if (window.scrollY > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`line ${isSticky ? "sticky" : ""}`} // Apply sticky class conditionally
    >
      <div className="container">
        {/* Flex container for logo and hamburger */}
        <div className="logo-hamburger">
          <a href="logo" className="logo display-none-desktop">
            Alien
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Navigation menu */}
        <ul className={`flex-navBar ${isOpen ? "show" : ""}`}>
          <li>
            <a className="logo display-none-mobile" href="#header" rel="noopener noreferrer">
              Blu
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="#about" rel="noopener noreferrer">
              About Us
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="#HowToBuy" rel="noopener noreferrer">
              How To Buy
            </a>
          </li>
          <li>
            <a className="navbar-hover-effect" href="#roadmap" rel="noopener noreferrer">
              RoadMap
            </a>
          </li>
          <li>
            <a
              className="navbar-hover-effect"
              href="https://t.me/BaseBlueAlienPortal"
              rel="noopener noreferrer"
              target="_blank"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              className="navbar-hover-effect"
              href="https://x.com/BasedBlueAlien"
              rel="noopener noreferrer"
              target="_blank"
            >
              X
            </a>
          </li>
          <li>
            <a
              className="navbar-hover-effect"
              href="https://docs.google.com/document/d/14W-7-f1hYLuRaM-I6m4xAGfEtnHbx-Rw/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </li>
          <li>
            <a className="btn-navBar navbar-hover-effect" href="#btn" rel="noopener noreferrer">
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
