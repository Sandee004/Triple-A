import { MessageCircle } from "lucide-react";
import heroImage from "../assets/bg-image.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-primary/60 to-accent/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center animate-fade-in">
        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
          The Authentic Taste of Home <br />
          <span className="text-accent">This Christmas</span>
        </h1>

        <p className="font-montserrat text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Delicious Nigerian cuisine from Triple A Catering. <br />
          Limited Christmas slots – reserve yours today!
        </p>

        {/* Plain <a> behaving like button */}
        <a
          href="https://wa.me/447476166415"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all animate-pulse-glow rounded-md"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Reserve Your Package
        </a>
      </div>
    </section>
  );
};

export default Hero;
