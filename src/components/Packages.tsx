import { useState } from "react";
import PackageCard from "./PackageCard";
import { Info, Truck, ChevronRight } from "lucide-react";

type MenuCategory =
  | "all"
  | "single-meals"
  | "soups"
  | "party-coolers"
  | "extras";

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("all");

  const menuData = [
    {
      title: "Jollof Rice (Single Portion)",
      price: "£12",
      description: "Served with 2 pieces of seasoned chicken.",
      category: "single-meals",
      items: [
        "Authentic Smoky Jollof Rice",
        "2 Pieces of Fried Chicken",
        "Choose your spice level",
      ],
    },
    {
      title: "Fried Rice (Single Portion)",
      price: "£12",
      description: "Served with 2 pieces of seasoned chicken.",
      category: "single-meals",
      items: [
        "Classic Nigerian Fried Rice",
        "2 Pieces of Fried Chicken",
        "Choose your spice level",
      ],
    },
    {
      title: "White Rice (Single Portion)",
      price: "£10",
      description: "Perfect base plate for any of our premium stews or soups.",
      category: "single-meals",
      items: [
        "Perfectly Steamed White Rice",
        "Pairs beautifully with any soup",
      ],
    },
    {
      title: "Egusi Soup (5L)",
      price: "£70",
      description:
        "Rich, traditional melon seed soup with premium palm oil and spices.",
      category: "soups",
      items: ["Large 5L Bulk Pot", "1L variant available for £15"],
    },
    {
      title: "Spinach / Efo Riro (5L)",
      price: "£70",
      description: "Rich, deeply flavored savory Nigerian vegetable stew.",
      category: "soups",
      items: ["Large 5L Bulk Pot", "1L variant available for £15"],
    },
    {
      title: "Okro Soup (5L)",
      price: "£70",
      description:
        "Beautifully viscous traditional draw soup cooked with rich aromatics.",
      category: "soups",
      items: ["Large 5L Bulk Pot", "1L variant available for £15"],
    },
    {
      title: "Ayamase (Ofada Sauce) (5L)",
      price: "£75",
      description:
        "Spicy green pepper designer stew with authentic Ofada flavor.",
      category: "soups",
      items: [
        "Large 5L Bulk Pot",
        "Authentic Ofada flavour profile",
        "1L variant available for £15",
      ],
    },
    {
      title: "Jollof Rice Party Cooler",
      price: "£180",
      description:
        "Massive catering tier, perfect for large gatherings and events.",
      category: "party-coolers",
      serves: "30–40 People",
      items: ["Large Scale Event Cooler", "Signature smoky wood-fire flavour"],
    },
    {
      title: "Fried Rice Party Cooler",
      price: "£200",
      description:
        "Large event tray rich with vegetable and seasoning accents.",
      category: "party-coolers",
      serves: "30–40 People",
      items: ["Large Scale Event Cooler", "Loaded flavour profile"],
    },
    {
      title: "White Rice Party Cooler",
      price: "£100",
      description:
        "Clean catering base for weddings, meetings, or home events.",
      category: "party-coolers",
      serves: "30–40 People",
      items: ["Large Scale Event Cooler", "Steamed to fluffy perfection"],
    },
    {
      title: "Box of Fried Chicken",
      price: "£60",
      description: "Bulk seasoned protein box.",
      category: "extras",
      items: ["Full Bulk Protein Box", "Make it Peppered (Optional) for +£25"],
    },
    {
      title: "Moi Moi",
      price: "£3",
      description: "Savory steamed bean pudding wrap.",
      category: "extras",
      items: ["Single individual wrap"],
    },
    {
      title: "Semolina",
      price: "£3",
      description: "Smooth, perfectly turned firm swallow.",
      category: "extras",
      items: ["Single individual wrap"],
    },
    {
      title: "Amala",
      price: "£3",
      description: "Classic dark yam flour traditional swallow.",
      category: "extras",
      items: ["Single individual wrap"],
    },
    {
      title: "Custom Catering Order",
      price: "Bespoke",
      description:
        "Need something custom or a specialized menu layout for your gathering?",
      category: "custom", // Internal identifier
      featured: true,
      items: [
        "Tailored portion scaling",
        "Custom menu requirements",
        "Flexible arrangements",
      ],
    },
  ];

  // Base tabs count includes the custom card since it belongs to all categories
  const tabs = [
    { id: "all", label: "All", count: menuData.length },
    {
      id: "single-meals",
      label: "Single Plates",
      count: menuData.filter(
        (i) => i.category === "single-meals" || i.category === "custom",
      ).length,
    },
    {
      id: "soups",
      label: "Soups",
      count: menuData.filter(
        (i) => i.category === "soups" || i.category === "custom",
      ).length,
    },
    {
      id: "party-coolers",
      label: "Party Coolers",
      count: menuData.filter(
        (i) => i.category === "party-coolers" || i.category === "custom",
      ).length,
    },
    {
      id: "extras",
      label: "Extras",
      count: menuData.filter(
        (i) => i.category === "extras" || i.category === "custom",
      ).length,
    },
  ] as const;

  // Filters items while forcing the custom orders card to stay visible in all modes
  const filteredMenu =
    activeCategory === "all"
      ? menuData
      : menuData.filter(
          (item) =>
            item.category === activeCategory || item.category === "custom",
        );

  return (
    <section id="packages" className="py-24 bg-[#faf8f4]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#b85c00] mb-3">
            Our Menu
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-stone-900 max-w-xl leading-tight">
            Nigerian cuisine, made with heart
          </h2>
          <p className="font-montserrat text-stone-500 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            From daily single plates to bulk soups and large event coolers —
            there's something for every table.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as MenuCategory)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-montserrat text-sm font-semibold transition-all duration-200 ${
                activeCategory === tab.id
                  ? "bg-[#1a3a1a] text-white shadow-md"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-stone-400"
              }`}
            >
              {tab.label}
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${
                  activeCategory === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-stone-100 text-stone-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMenu.map((dish, index) => (
            <PackageCard key={index} {...dish} />
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="flex gap-4 items-start bg-white border border-stone-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-sm text-stone-800 mb-1">
                Ordering & Deposits
              </h4>
              <p className="font-montserrat text-xs text-stone-500 leading-relaxed">
                All 5L soups are also available in a 1L portion for £15. A
                deposit is appreciated when placing orders.
              </p>
              <a
                href="https://wa.me/447476166415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs font-montserrat font-bold text-[#1a3a1a] hover:underline"
              >
                Chat with us <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white border border-stone-200 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-sm text-stone-800 mb-1">
                Delivery
              </h4>
              <p className="font-montserrat text-xs text-stone-500 leading-relaxed">
                Delivery starts from £10 depending on your address across
                Manchester, Tameside and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
