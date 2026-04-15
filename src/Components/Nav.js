// src/components/Nav.js
import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logos and Favicons/LogoNoBG.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("#182b38");
  const [isScreenMinimized, setIsScreenMinimized] = useState(false);

  const TEXT_FONT = "text-xl"; // fixed menu text size
  const LOGO_HEIGHT = "h-48";  // fixed logo height

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const changeNavbarBg = () => {
    if (window.scrollY >= 50) {
      setNavbarBg("rgba(24, 43, 56, 1)");
    } else {
      setNavbarBg("#182b38");
    }
  };

  const handleResize = () => setIsScreenMinimized(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar h-20 px-4 ${"text-white"} fixed top-0 w-full z-30 transition-colors duration-500 ease-in-out`}
      style={{ backgroundColor: navbarBg }}
    >
      <div
        className="container mx-auto flex h-full items-center relative"
        style={{ fontFamily: "Bookman Old Style, serif", fontWeight: 100 }}
      >
        {/* Left: Logo (clickable) */}
        <button
          onClick={() => scrollToSection("home")}
          className="shrink-0 focus:outline-none"
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="Tech Bridge Group"
            className={`${LOGO_HEIGHT} transition duration-300 ease-in-out select-none`}
            draggable="false"
            decoding="async"
          />
        </button>

        {/* Right-aligned desktop menu (fixed size) */}
        <ul
          className={`hidden lg:flex ml-auto justify-end items-center gap-8 ${TEXT_FONT} nav-text`}
        >
          <li className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("mission")}>
            About us
          </li>

          <li className="relative group px-2 py-2 cursor-pointer whitespace-nowrap">
            <div className="hover:text-cyan-500" onClick={() => scrollToSection("mission")}>
              Our Mission
            </div>
            <div className="absolute right-0 hidden group-hover:block mt-2 bg-[#6F6D39] text-white shadow-md rounded-md whitespace-nowrap">
              {/* submenu reserved */}
            </div>
          </li>

          <li className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("vision")}>
            Our Vision
          </li>
          <li className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("solutions")}>
            Our Solutions
          </li>
          <li className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("footer")}>
            Contact Us
          </li>
        </ul>

        {/* Mobile: hamburger on the right */}
        <button
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden ml-auto text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        {/* Mobile dropdown: right aligned */}
        {isMenuOpen && (
          <div className="lg:hidden absolute right-4 top-full mt-3 w-56 rounded-lg shadow-lg bg-[#182b38] border border-white/10">
            <ul className={`flex flex-col ${TEXT_FONT} nav-text`}>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("home")}>
                Home
              </li>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("story")}>
                About us
              </li>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("mission")}>
                Our Mission
              </li>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("vision")}>
                Our Vision
              </li>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("solutions")}>
                Our Solutions
              </li>
              <li className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection("footer")}>
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
