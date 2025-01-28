import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink from react-router-dom
import { gsap } from "gsap";
import { Power3 } from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // GSAP animation for initial load
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: "-10%" },
      { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true); // Apply sticky class after scrolling 50px
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div className="logo-hamburger">
          <Link to="/" className="logo display-none-desktop">
            Blu
          </Link>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>

        <ul className={`flex-navBar ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/" className="logo display-none-mobile">
              Blu
            </Link>
          </li>

          <li>
            <a
              className="navbar-hover-effect"
              href="https://dexscreener.com/base/0xc4a0ca9bd929000333bf339c26a913c62f0e1439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="dexscreen">
                <b>DEX</b>SCREENER
              </p>
            </a>
          </li>

          <li>
            <a
              className="navbar-hover-effect"
              href="https://www.dextools.io/app/en/base/pair-explorer/0xc4a0ca9bd929000333bf339c26a913c62f0e1439?chart=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="dextool-icon"
                src="/img/Brand_DEXTools_Light.png"
                alt="DEXTools Logo"
              />
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
            <a
              className="navbar-hover-effect"
              href="https://t.me/+8UZkauZX57YwNzEy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8 2.2c-.5-.4-1.1-.4-1.6 0L2.5 10.7c-.6.2-.9.7-.9 1.3s.4 1.1.9 1.4l3.5 1.4 1.4 4c.2.7.9 1.2 1.7 1.2h.1c.5 0 1-.2 1.4-.5l2.9-2.2 3.7 3.7c.2.2.5.3.7.3.1 0 .2 0 .3-.1.3-.1.5-.4.6-.8l4.8-17.6c.1-.6 0-1.2-.4-1.6zm-9.8 10.8l-2.4 2.4-.8-2.2 7.2-5.9-4 5.7zm1 6.5l-2.5-2.5 1.7-1.7 2.5 2.5-1.7 1.7z"
                  fill="white"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              className="navbar-hover-effect"
              href="https://x.com/BasedBluAlien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="x-icon" src="/img/x.png" alt="X Icon" />
            </a>
          </li>

          <li>
            <NavLink
              to="/documentation" // React Router link
              className={({ isActive }) =>
                `navbar-hover-effect ${isActive ? "active" : ""}`
              }
            >
              Documentation
            </NavLink>
          </li>

          <li>
            <a
              className="btn-navBar navbar-hover-effect"
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x52e0d3c27cc9e3607c1ca7914b9049be3d5e9c41"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Blu
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
