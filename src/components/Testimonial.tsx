import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah O.",
      location: "Ashton-under-Lyne",
      text: "Triple A Catering made our Christmas truly special! The Jollof was incredible and brought back memories of home. Everyone at our party couldn't stop raving about the food.",
      rating: 5,
    },
    {
      name: "David M.",
      location: "Manchester",
      text: "Absolutely phenomenal! The Grand Banquet package fed our entire family perfectly. The quality and authenticity of the dishes exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Amaka N.",
      location: "Tameside",
      text: "From the first bite, I knew this was authentic Nigerian cooking. The pounded yam was perfect, and the Ayamase stew was just like my grandmother used to make. Five stars!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it – hear from families who've
            experienced our authentic Nigerian cuisine
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2 border-border p-6 rounded-lg hover:border-primary transition-all hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-montserrat text-foreground mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-montserrat font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-montserrat text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
