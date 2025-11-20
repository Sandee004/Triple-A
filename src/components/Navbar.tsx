import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-20 m-0 p-0 h-10" alt="logo" />
          <div>
            <h1 className="font-playfair font-bold text-xl text-foreground">
              Triple A Catering
            </h1>
            <p className="text-xs text-muted-foreground">Christmas Menu</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("packages")}
            className="text-foreground hover:text-primary transition-colors font-montserrat font-medium"
          >
            Menu
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-montserrat font-medium"
          >
            About Us
          </button>

          {/* Desktop CTA Button */}
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-4 py-2 rounded-md animate-pulse-glow transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order Now
          </a>
        </div>

        {/* Mobile CTA Button */}
        <a
          href="https://wa.me/447476166415"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md animate-pulse-glow transition-all"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
