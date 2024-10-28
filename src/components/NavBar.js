import React, { useState } from "react";
 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="line">
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
