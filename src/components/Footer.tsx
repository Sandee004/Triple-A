import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111f11] text-white">
      {/* Main footer body */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} className="h-6 w-auto" alt="Triple A Catering logo" />
              <span className="font-playfair font-bold text-lg">Triple A Catering</span>
            </div>
            <p className="font-montserrat text-sm text-white/50 leading-relaxed max-w-xs">
              Authentic Nigerian cuisine, prepared with care and delivered across Greater Manchester.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@triple.a.catering1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
              Get in Touch
            </h4>
            <a
              href="tel:07476166415"
              className="flex items-center gap-3 font-montserrat text-sm text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#d4a017] flex items-center justify-center transition-colors flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              07476 166 415
            </a>
            <a
              href="mailto:tripleacatering.tac@gmail.com"
              className="flex items-center gap-3 font-montserrat text-sm text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#d4a017] flex items-center justify-center transition-colors flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              tripleacatering.tac@gmail.com
            </a>
            <div className="flex items-center gap-3 font-montserrat text-sm text-white/70">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              Tameside, Manchester
            </div>
          </div>

          {/* Order CTA column */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <h4 className="font-playfair font-bold text-xl text-white mb-1">
                Ready to order?
              </h4>
              <p className="font-montserrat text-sm text-white/50">
                Message us directly on WhatsApp and we'll sort everything out.
              </p>
            </div>
            <a
              href="https://wa.me/447476166415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a017] hover:bg-[#c49010] text-[#111f11] font-montserrat font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
            <p className="font-montserrat text-xs text-white/30 text-center">
              Delivery from £10 · Manchester & Tameside
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-xs text-white/30">
            © {new Date().getFullYear()} Triple A Catering. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-montserrat text-xs text-white/30">Tameside, Manchester</span>
            <span className="text-white/20 mx-2">·</span>
            <span className="font-montserrat text-xs text-white/30">Delicious Nigerian Cuisine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
