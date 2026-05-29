import { Flame, HeartHandshake, Star, Truck, Leaf, Clock } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Authentic Smoky Flavour",
    description:
      "Every pot is cooked with the same wood-fire technique that gives Nigerian food its unmistakable depth. No shortcuts, no compromise.",
    stat: "100%",
    statLabel: "Traditional recipes",
  },
  {
    icon: HeartHandshake,
    title: "Home-Style with Care",
    description:
      "We cook like it's going on our own table. Premium cuts, fresh aromatics, and layers of seasoning built over hours.",
    stat: "5★",
    statLabel: "Average customer rating",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients Only",
    description:
      "No frozen mixes. Vegetables, proteins, and spices are sourced fresh before every cook to guarantee quality in every order.",
    stat: "0",
    statLabel: "Pre-made shortcuts",
  },
  {
    icon: Truck,
    title: "Delivered to Your Door",
    description:
      "Serving Greater Manchester and Tameside. Hot, sealed, and on time — from our kitchen straight to your table.",
    stat: "£10+",
    statLabel: "Delivery from",
  },
  {
    icon: Star,
    title: "Built for Events",
    description:
      "Party coolers feeding 30–40 guests, bulk soup pots, and full catering setups for weddings, birthdays, and community events.",
    stat: "30–40",
    statLabel: "Per party cooler",
  },
  {
    icon: Clock,
    title: "Order Anytime",
    description:
      "Reach us directly on WhatsApp for custom orders, enquiries, and reservations. We'll sort the details with you personally.",
    stat: "24/7",
    statLabel: "WhatsApp available",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#b85c00] mb-3">
              Why Triple A
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-stone-900 leading-tight">
              Cooking that speaks for itself
            </h2>
          </div>
          <div>
            <p className="font-montserrat text-stone-500 text-base leading-relaxed">
              We're not just a catering service — we're a piece of home for Nigerians and food lovers across Manchester. Every meal we send out carries the same standard we hold ourselves to.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#faf8f4] border border-stone-200 rounded-2xl p-7 hover:border-[#1a3a1a] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon + stat row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a3a1a] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#d4a017]" />
                  </div>
                  <div className="text-right">
                    <p className="font-playfair font-black text-2xl text-stone-900 leading-none">
                      {item.stat}
                    </p>
                    <p className="font-montserrat text-[10px] text-stone-400 uppercase tracking-wider font-semibold mt-0.5">
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                <h3 className="font-playfair font-bold text-lg text-stone-800 mb-2 group-hover:text-[#1a3a1a] transition-colors">
                  {item.title}
                </h3>
                <p className="font-montserrat text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4a017] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 bg-[#1a3a1a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair font-bold text-2xl text-white mb-1">
              Ready to place an order?
            </h3>
            <p className="font-montserrat text-sm text-white/60">
              Message us on WhatsApp — we'll handle everything from there.
            </p>
          </div>
          <a
            href="https://wa.me/447476166415"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#c49010] text-[#1a3a1a] font-montserrat font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
