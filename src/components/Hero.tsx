// import { MessageCircle, ArrowRight } from "lucide-react";
// import heroImage from "../assets/bg-image.jpeg";

// interface HeroProps {
//   onExploreMenu: () => void;
// }

// const Hero = ({ onExploreMenu }: HeroProps) => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Media Container */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-secondary/70 to-primary/40" />
//       </div>

//       {/* Hero Body Presentation */}
//       <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
//         <span className="inline-block bg-accent/20 text-accent border border-accent/30 font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in">
//           Premium Nigerian Catering • Manchester & Tameside
//         </span>

//         <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight tracking-tight">
//           The Authentic Taste <br />
//           <span className="text-accent bg-clip-text">of Home Cooking</span>
//         </h1>

//         <p className="font-montserrat text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
//           Savour rich, deep-flavoured Nigerian dishes expertly crafted by Triple
//           A Catering. From daily individual meals to extensive party coolers.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
//           <button
//             onClick={onExploreMenu}
//             className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-bold text-base px-8 py-4 shadow-xl transition-all rounded-md group"
//           >
//             Explore Menu
//             <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
//           </button>

//           <a
//             href="https://wa.me/447476166415?text=Hi%20Triple%20A%20Catering,%20I'd%20like%20to%20inquire%20about%20your%20catering%20services."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-montserrat font-semibold text-base px-8 py-4 backdrop-blur-sm transition-all rounded-md"
//           >
//             <MessageCircle className="w-5 h-5 mr-2 text-accent" />
//             Custom Orders
//           </a>
//         </div>
//       </div>

//       {/* Decorative Bottom Wave Divider */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
//     </section>
//   );
// };

// export default Hero;

import { MessageCircle, MapPin, ArrowDown } from "lucide-react";
import heroImage from "../assets/bg-image.jpeg";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("packages");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Graphic Architecture */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Authentic Nigerian Catering"
          className="w-full h-full object-cover scale-105 animate-[scale-up_20s_ease-out_infinite]"
        />
        {/* Layered Gradient Matrix to lock typographic legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/90 via-primary/70 to-accent/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Location Target Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-inner animate-fade-in">
          <MapPin className="w-3.5 h-3.5 text-accent animate-bounce" />
          Based in Greater Manchester
        </div>

        {/* Hero Typographic Matrix */}
        <h1 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white mb-6 leading-[1.1] tracking-tight max-w-5xl drop-shadow-md">
          The Authentic Taste of Home <br />
          <span className="text-accent drop-shadow-none relative inline-block mt-2">
            Made With Heart
          </span>
        </h1>

        <p className="font-montserrat font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow">
          Rich, smoky, traditional Nigerian cuisine proudly prepared and
          delivered across Greater Manchester by{" "}
          <span className="text-accent font-bold">Triple A Catering</span>.
          Premium ingredients, unmatched standards.
        </p>

        {/* Action Controls Frame */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-4">
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-bold text-base px-8 py-5 shadow-xl hover:shadow-accent/20 rounded-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            Place an Order
          </a>

          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 font-montserrat font-semibold text-base px-8 py-5 backdrop-blur-sm rounded-md transition-all duration-300"
          >
            View the Menu
          </button>
        </div>

        {/* Scroll Indicator Icon anchor */}
        <button
          onClick={scrollToMenu}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll down to view menus"
        >
          <span className="font-montserrat text-xs tracking-widest uppercase font-semibold">
            View Menu
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
