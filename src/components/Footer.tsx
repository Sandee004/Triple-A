import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Top CTA Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            Don't Miss Out! Secure Your Christmas Catering Today
          </h2>
          <p className="font-montserrat text-lg opacity-90 mb-8">
            Limited slots available for the festive season
          </p>

          {/* Replaced Button with <a> styled as button */}
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all rounded-md"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Order on WhatsApp
          </a>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Phone */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold mb-2">Call Us</h3>
            <a
              href="tel:07476166415"
              className="font-montserrat text-lg hover:text-accent transition-colors"
            >
              07476 166 415
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold mb-2">Email Us</h3>
            <a
              href="mailto:tripleacatering.tac@gmail.com"
              className="font-montserrat hover:text-accent transition-colors break-all"
            >
              tripleacatering.tac@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-semibold mb-2">Location</h3>
            <p className="font-montserrat">Tameside, Manchester</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} className="w-10 m-0 p-0 h-5" />
              <span className="font-playfair font-bold text-lg">
                Triple A Catering
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-montserrat text-sm opacity-75">
              © 2025 Triple A Catering. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
