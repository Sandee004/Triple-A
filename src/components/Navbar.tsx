import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-lg border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              className="w-16 h-10 object-contain m-0 p-0"
              alt="Triple A Catering Logo"
            />
          </div>
          <div>
            <h1 className="font-playfair font-bold text-lg md:text-xl text-foreground tracking-tight leading-none mb-1">
              Triple A Catering
            </h1>
            <p className="text-[10px] tracking-widest font-montserrat uppercase font-semibold text-accent">
              Authentic Nigerian Cuisine
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Menu Packages", id: "packages" },
            { label: "Why Us", id: "about" },
            { label: "Find Us", id: "location" },
            { label: "Reviews", id: "reviews" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground/80 hover:text-primary relative py-1 font-montserrat font-medium text-sm transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}

          {/* Desktop WhatsApp Call-to-Action */}
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-sm px-5 py-2.5 rounded-md shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 animate-pulse-glow"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order Now
          </a>
        </div>

        {/* Mobile Interface Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-md animate-pulse-glow transition-all"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed inset-x-0 top-[65px] bg-card/98 backdrop-blur-lg border-b border-border shadow-xl transition-all duration-300 md:hidden overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-6"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-5">
          {[
            { label: "Menu Packages", id: "packages" },
            { label: "Why Us", id: "about" },
            { label: "Find Us", id: "location" },
            { label: "Reviews", id: "reviews" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left font-montserrat font-semibold text-base text-foreground/90 hover:text-primary py-2 border-b border-border/40"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
