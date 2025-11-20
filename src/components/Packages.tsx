import PackageCard from "./PackageCard";

const Packages = () => {
  const packages = [
    {
      title: "The Family Feast",
      price: "£170",
      serves: "5 People",
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
      price: "£320",
      serves: "10 People",
      items: [
        "Jollof Rice (4L)",
        "Fried Rice (4L)",
        "Ayamase Stew (1L)",
        "Dodo Gizzard (1L)",
      ],
      featured: true,
    },
    {
      title: "The Traditional Special",
      price: "£320",
      serves: "10 People",
      items: [
        "Iyan (Pounded Yam 4L)",
        "Ayamase Stew (1L)",
        "Moi Moi (10 pieces)",
        "Dodo",
      ],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
