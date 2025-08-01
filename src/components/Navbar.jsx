import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = "text-white hover:text-[#0070ff] transition duration-300 block py-2";

   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);                      

  return (
    <nav   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`} >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="md:text-3xl text-2xl font-bold text-white text-shadow-blue-800"><span className="text-transparent bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text">Techno</span>Kloud</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/services" className={linkStyle}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

 {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-blue-500/20 mx-5 mb-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 transition-all duration-300 group ${
                    isActive
                      ? "text-white bg-blue-600/20"
                      : "text-gray-300 hover:text-white hover:bg-blue-600/20"
                  }`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              > 
                  <span>{link.name}</span> 
              </NavLink>
            ))}
          </div>
        </div>                      

      
    </nav>
  );
};

export default Navbar;