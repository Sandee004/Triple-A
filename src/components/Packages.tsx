import PackageCard from "./PackageCard";
import { MessageCircle } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      title: "The Family Feast",
      price: "£120",
      oldPrice: "£170",
      serves: "5 People",
      discount: true,
      items: [
        "Jollof Rice (2L)",
        "Fried Rice (4L)",
        "Egusi with Vegetable (1L)",
        "Chicken (5 pieces)",
        "Hake Fish (10 pieces)",
      ],
    },
    {
      title: "The Grand Banquet",
      price: "£200",
      oldPrice: "£320",
      serves: "10 People",
      items: [
        "Jollof Rice (4L)",
        "Fried Rice (4L)",
        "Ayamase Stew (1L)",
        "Dodo Gizzard (1L)",
      ],
      featured: true,
      discount: true,
    },
    {
      title: "The Traditional Special",
      price: "£250",
      serves: "10 People",
      items: [
        "Iyan (Pounded Yam 10 wraps)",
        "Egusi soup/Vegetable soup (1L)",
        "Moi Moi (10 pieces)",
      ],
      oldPrice: "£350",
      discount: true,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground mb-4">
            Our Festive Christmas Packages
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your Christmas celebration. All
            dishes are prepared with authentic Nigerian flavors and premium
            ingredients.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        {/* Custom Request */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="font-montserrat text-lg text-foreground">
            Custom request?{" "}
            <span className="text-primary font-semibold">
              Send a DM — let’s talk!
            </span>
          </p>

          <a
            href="https://wa.me/447476166415?text=Hi%20I%20have%20a%20custom%20order%20request"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-montserrat font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
