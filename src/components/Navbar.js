"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Process", "Skills", "Portfolio", "Services", "Contact"];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(navLinks[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Navbar height offset
        behavior: "smooth"
      });
      setActive(id);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-[#1a1a2e]/90 backdrop-blur-md font-sans sticky top-0 z-50 px-6 lg:px-0">
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center text-white font-bold text-lg">
            RA
          </div>
          <span className="text-white text-xl font-semibold tracking-wide">
            Rayyan Ansari
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`px-4 py-2 rounded-full border-none cursor-pointer text-[14px] font-medium transition-all duration-300 
                ${active === link 
                  ? "bg-[#7c3aed] text-white" 
                  : "bg-transparent text-[#c0c0c0] hover:text-white"
                }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <button 
          onClick={() => scrollToSection("Contact")}
          className="hidden lg:block px-7 py-2.5 rounded-full border-none bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
        >
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1a2e] border-t border-white/10 p-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`text-left px-4 py-3 rounded-xl transition-all duration-300
                ${active === link 
                  ? "bg-[#7c3aed] text-white" 
                  : "text-[#c0c0c0]"
                }`}
            >
              {link}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection("Contact")}
            className="mt-2 w-full px-7 py-3 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-white font-semibold"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

