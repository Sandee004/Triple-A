import { Utensils, Home, Sparkles } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Utensils,
      title: "Authentic Flavour",
      description:
        "Traditional Nigerian recipes passed down through generations",
    },
    {
      icon: Home,
      title: "Home-style Cooking",
      description: "Prepared with love and care, just like homemade",
    },
    {
      icon: Sparkles,
      title: "Unforgettable Taste",
      description: "Premium ingredients creating memories that last",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground mb-4">
            Why Choose Triple A Catering?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-montserrat text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
