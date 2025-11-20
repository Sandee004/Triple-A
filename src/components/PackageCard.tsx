import { Check, MessageCircle, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  serves: string;
  items: string[];
  featured?: boolean;
  discount?: boolean;
}

const PackageCard = ({
  title,
  price,
  oldPrice,
  serves,
  items,
  featured = false,
  discount = false,
}: PackageCardProps) => {
  return (
    <div
      className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-2xl animate-fade-in rounded-lg bg-card p-6 ${
        featured
          ? "border-4 border-accent shadow-[0_0_30px_rgba(255,193,7,0.3)] md:scale-105"
          : "border-2 border-border"
      }`}
    >
      {/* Discount Banner */}
      {discount && (
        <div className="absolute top-0 left-0 w-full bg-red-500 text-white py-1 text-center font-bold text-sm tracking-wide shadow-md z-20">
          🎄 Christmas Discount – Limited Time!
        </div>
      )}

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-montserrat font-bold text-sm flex items-center gap-1 shadow-lg z-10">
          <Star className="w-4 h-4 fill-current" />
          Best Value
        </div>
      )}

      {/* Header */}
      <div className="pt-6 pb-4">
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
        <div className="text-center py-4 bg-muted rounded-lg space-y-1">
          {oldPrice && (
            <span className="font-montserrat text-lg text-red-500 line-through opacity-70 block">
              {oldPrice}
            </span>
          )}

          <span className="font-playfair text-4xl md:text-5xl font-bold text-primary">
            {price}
          </span>
        </div>

        {/* Items */}
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

      {/* CTA */}
      <div className="mt-6">
        <a
          href={`https://wa.me/447476166415?text=${encodeURIComponent(
            `Hi, I'd like to order your ${title} package I saw on your website.`
          )}`}
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
