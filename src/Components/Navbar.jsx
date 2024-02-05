import React, { useState, useEffect } from "react";
import "../index.css";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const currentPath = location.pathname;
  return (
    <nav
      className={`nav ${isScrolled ? "window-scroll" : ""} ${
        currentPath === "/Signup" ? "no-animation" : ""
      }`}
    >
      <div className="container nav__container">
        <a href="index.html">
          <h4>AlgoSage</h4>
        </a>
        <ul className="nav__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/signup">SignUp /Login</a>
          </li>
        </ul>
        <button id="open-menu-btn">
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn">
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
}



export default Navbar;
