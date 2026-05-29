import { MapPin, Navigation } from "lucide-react";

const LocationMap = () => {
  // Safe embedded iframe parameters targeted for the Triple A Catering location matrix
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.300628352225!2d-2.1158656!3d53.4809983!2m3!1f0!2f0!3f0!3m2!1i1020!2i786!4f13.1!3m3!1m2!1s0x487bb716f4066cc9%3A0x7d870425cc02cbe8!2sTriple%20A%20Catering%20%7C%20Authentic%20Nigerian%20Cuisine%20in%20Manchester!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk";

  return (
    <section
      id="location"
      className="py-20 bg-muted/30 border-t border-b border-border/50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-center">
          {/* Metadata Display Side Column */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/40 text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-montserrat">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Find Us In Greater Manchester
            </div>

            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Freshly Prepared & Ready for Collection
            </h2>

            <p className="font-montserrat text-muted-foreground text-sm md:text-base leading-relaxed">
              We operate straight out of Manchester. Perfect delivery loops and
              collection pathways across Ashton-under-Lyne, Tameside, and
              surrounding neighborhoods to ensure your food arrives hot, fresh,
              and on time.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-montserrat font-medium text-foreground">
                <Navigation className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Serving Manchester, Ashton-under-Lyne & Tameside</span>
              </div>
            </div>

            {/* <div className="pt-4">
              <a
                href="https://share.google/ip2a4T0afd0F48G1O"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-md font-montserrat font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Open Google Maps Location
                <ExternalLink className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Interactive Responsive Map Display Frame */}
          <div className="lg:col-span-3 w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl border border-border relative group bg-card">
            <iframe
              title="Triple A Catering Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale-[15%] contrast-[110%] transition-all duration-500 group-hover:grayscale-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
