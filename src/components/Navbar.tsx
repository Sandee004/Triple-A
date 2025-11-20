import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

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
          <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-playfair font-bold text-xl">
              AAA
            </span>
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <rect width="100%" height="100%" fill="#f5f5f5" />
              <g transform="translate(200, 100)">
                {" "}
                <path
                  d="M-60,0 A60,60 0 0,1 60,0 L35,0 A35,35 0 0,0 -35,0 Z"
                  fill="#d85c1a"
                />{" "}
                <path
                  d="M-35,0 A35,35 0 0,1 35,0 L20,0 A20,20 0 0,0 -20,0 Z"
                  fill="#fbc02d"
                />{" "}
                <path
                  d="M-20,0 A20,20 0 0,1 20,0 L20,0 L-20,0 Z"
                  fill="#08632e"
                />{" "}
              </g>
              <text
                x="200"
                y="155"
                font-family="Georgia, serif"
                font-weight="bold"
                font-size="48"
                text-anchor="middle"
                fill="#0e1e40"
              >
                Triple A
              </text>
              <text
                x="200"
                y="185"
                font-family="Arial, sans-serif"
                font-size="24"
                letter-spacing="3"
                text-anchor="middle"
                fill="#d85c1a"
              >
                CATERING
              </text>{" "}
            </svg>
          </div>
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
