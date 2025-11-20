import { Check, MessageCircle, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  serves: string;
  items: string[];
  featured?: boolean;
}

const PackageCard = ({
  title,
  price,
  serves,
  items,
  featured = false,
}: PackageCardProps) => {
  return (
    <div
      className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-2xl animate-fade-in rounded-lg bg-card p-6 ${
        featured
          ? "border-4 border-accent shadow-[0_0_30px_rgba(255,193,7,0.3)] md:scale-105"
          : "border-2 border-border"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-montserrat font-bold text-sm flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-current" />
          Best Value
        </div>
      )}

      {/* Header */}
      <div className="pb-4">
        <h3 className="font-playfair text-2xl md:text-3xl text-foreground">
          {title}
        </h3>
        <p className="font-montserrat text-lg font-semibold text-primary">
          Serves {serves}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Price Box */}
        <div className="text-center py-4 bg-muted rounded-lg">
          <span className="font-playfair text-4xl md:text-5xl font-bold text-primary">
            {price}
          </span>
        </div>

        {/* Items List */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="font-montserrat text-sm text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <a
          href="https://wa.me/447476166415"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex justify-center items-center py-3 rounded-md font-montserrat font-semibold transition-all ${
            featured
              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          }`}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Select Package
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
