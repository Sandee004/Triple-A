import { MessageCircle, Users, Flame } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  description?: string;
  serves?: string;
  items: string[];
  featured?: boolean;
  discount?: boolean;
  category?: string;
}

const categoryColors: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  "single-meals": {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  soups: {
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  "party-coolers": {
    bg: "bg-orange-50 border-orange-200",
    text: "text-orange-700",
    dot: "bg-orange-400",
  },
  extras: {
    bg: "bg-stone-50 border-stone-200",
    text: "text-stone-600",
    dot: "bg-stone-400",
  },
  custom: {
    bg: "bg-stone-900 border-stone-800",
    text: "text-[#d4a017]",
    dot: "bg-[#d4a017]",
  },
};

const PackageCard = ({
  title,
  price,
  description,
  serves,
  items,
  featured = false,
  category = "single-meals",
}: PackageCardProps) => {
  const whatsappBaseUrl = "https://wa.me/447476166415";
  const orderMessage =
    price === "Bespoke"
      ? `Hi Triple A Catering, I'd like to make a inquiries about a custom order configuration.`
      : `Hi Triple A Catering, I'd like to order: ${title} (${price})`;

  const encodedMessage = encodeURIComponent(orderMessage);
  const colors = categoryColors[category] || categoryColors["single-meals"];

  return (
    <div
      className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        featured
          ? "bg-[#1a3a1a] text-white shadow-xl ring-2 ring-[#d4a017]"
          : "bg-white border border-stone-200 shadow-sm hover:border-stone-300"
      }`}
    >
      {/* Top accent strip */}
      <div className={`h-1 w-full ${featured ? "bg-[#d4a017]" : colors.dot}`} />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className={`font-playfair font-bold text-lg leading-snug ${
                featured ? "text-white" : "text-stone-800"
              }`}
            >
              {title}
            </h3>
            {serves && (
              <div className="inline-flex items-center gap-1 mt-1.5 text-xs font-montserrat font-semibold text-[#d4a017]">
                <Users className="w-3 h-3" />
                Feeds {serves}
              </div>
            )}
          </div>
          {featured && (
            <span className="flex-shrink-0 flex items-center gap-1 bg-[#d4a017] text-[#1a3a1a] text-[10px] font-montserrat font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
              <Flame className="w-3 h-3" />
              Special
            </span>
          )}
        </div>

        {/* Price */}
        <div
          className={`rounded-xl px-4 py-3 flex items-baseline gap-1 ${
            featured ? "bg-white/10" : "bg-stone-50 border border-stone-100"
          }`}
        >
          <span
            className={`font-playfair font-black text-3xl tracking-tight ${
              featured ? "text-[#d4a017]" : "text-[#b85c00]"
            }`}
          >
            {price}
          </span>
          {serves && (
            <span
              className={`font-montserrat text-xs ${featured ? "text-white/60" : "text-stone-400"}`}
            >
              / cooler
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p
            className={`font-montserrat text-sm leading-relaxed ${
              featured ? "text-white/75" : "text-stone-500"
            }`}
          >
            {description}
          </p>
        )}

        {/* Items */}
        <ul className="flex-1 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                  featured ? "bg-[#d4a017]" : colors.dot
                }`}
              />
              <span
                className={`font-montserrat text-sm ${
                  featured ? "text-white/85" : "text-stone-600"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`${whatsappBaseUrl}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl font-montserrat font-bold text-sm tracking-wide transition-all duration-200 ${
            featured
              ? "bg-[#d4a017] hover:bg-[#c49010] text-[#1a3a1a]"
              : "bg-[#1a3a1a] hover:bg-[#254f25] text-white"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
