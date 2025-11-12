import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Images/LogoTriotree.svg";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Products",
    "Services",
    "About Us",
    "Clients",
    "Career",
    "Contact Us",
  ];

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
      <nav className="flex items-center justify-between px-6 lg:pr-19 lg:pl-20 py-3">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Triotree Logo" className="h-10 2xl:h-11 w-auto" />
        </div>

        {/* Center - Links (Desktop) */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                onClick={() => setActive(item)}
                className={`relative py-[23px] 2xl:text-lg font-medium text-sm transition-all duration-300 ease-out
                ${active === item
                    ? "text-black after:scale-x-100"
                    : "text-gray-600 hover:text-black after:scale-x-0"
                  }
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 2xl:after:h-0.75 after:w-full after:bg-[#8DC04A] 
                after:origin-left after:transition-transform after:duration-300 after:ease-out`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Button */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:block border border-blue-400 text-blue-500 text-xs 2xl:text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-200">
            BOOK A DEMO
          </button>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1.5 w-9 h-9 border border-gray-300 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`h-0.5 w-5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <div
              className={`h-0.5 w-5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <div
              className={`h-0.5 w-5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className={`relative py-1 font-medium text-sm xxl:text:xl transition-all duration-300 ease-out
                ${active === item
                    ? "text-black after:scale-x-100"
                    : "text-gray-600 hover:text-black after:scale-x-0"
                  }
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#8DC04A]
                after:origin-left after:transition-transform after:duration-300 after:ease-out`}
              >
                {item}
              </Link>
            </li>
          ))}

          <button className="mt-3 border border-blue-400 text-blue-500 text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-200">
            BOOK A DEMO
          </button>
        </ul>
      </div>
    </div>
  );
}
