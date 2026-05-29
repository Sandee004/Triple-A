import { useState, useEffect } from "react";
import { Star, MessageSquarePlus, CheckCircle, X, Quote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Kemi",
      location: "Ashton-under-Lyne",
      text: "I had it as lunch at work. It was so so delicious. I recommend!",
      rating: 5,
    },
    {
      name: "Tricia",
      location: "Manchester",
      text: "After being disappointed by a lot of other vendors, I'm lucky I found you. The food was 100%! My relatives really loved the egusi soup too. Thank you Triple A Catering!!",
      rating: 5,
    },
    {
      name: "Amaka",
      location: "Tameside",
      text: "Your best smoky jollof I have eaten so far. The smell is making people ask who dey eat that smoky food. 😆😆",
      rating: 5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    text: "",
  });
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  // Change your initial state to start as an empty array
  //const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch reviews from the backend on page load
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://triple-a-backend.onrender.com/api/reviews",
        ); // Replace with your actual backend URL
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.text.trim() ||
      !formData.location.trim()
    ) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    const payload = {
      name: formData.name.trim(),
      location: formData.location.trim(),
      text: formData.text.trim(),
      rating,
    };

    try {
      // Send data to your backend
      const response = await fetch("http://localhost:8000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error status.");
      }

      const result = await response.json();

      // If backend returns the full updated list, use that.
      // Otherwise, fallback to manually appending it to state.
      if (Array.isArray(result)) {
        setReviews(result);
      } else if (result.data && Array.isArray(result.data)) {
        setReviews(result.data);
      } else {
        setReviews([payload, ...reviews]);
      }

      setSubmitted(true);
      setFormData({ name: "", location: "", text: "" });
      setRating(5);

      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 3500);
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Could not save review. Please check your connection and try again.",
      );
    }
  };

  return (
    <section id="reviews" className="py-24 bg-[#faf8f4] relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#b85c00] mb-3">
              Reviews
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-stone-900 leading-tight">
              What our customers say
            </h2>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#1a3a1a] hover:bg-[#254f25] text-white font-montserrat font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Add a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <Quote className="w-6 h-6 text-[#d4a017] opacity-60" />
              <p className="font-montserrat text-stone-700 text-sm leading-relaxed flex-1">
                {review.text}
              </p>
              <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-montserrat font-bold text-stone-800 text-sm">
                    {review.name}
                  </p>
                  <p className="font-montserrat text-stone-400 text-xs">
                    {review.location}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#d4a017] text-[#d4a017]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-7 relative">
            <button
              onClick={() => {
                setShowForm(false);
                setSubmitted(false);
                setError("");
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-stone-500" />
            </button>

            <h3 className="font-playfair font-bold text-xl text-stone-900 mb-1">
              Share your experience
            </h3>
            <p className="font-montserrat text-stone-400 text-sm mb-6">
              We'd love to hear what you thought of the food.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500" />
                <p className="font-montserrat font-bold text-stone-800">
                  Review added!
                </p>
                <p className="font-montserrat text-stone-400 text-sm">
                  Thank you for sharing your feedback.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {error && (
                  <p className="text-red-500 text-xs font-montserrat font-semibold">
                    {error}
                  </p>
                )}

                <div>
                  <label className="block font-montserrat text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Bolanle"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-800 placeholder:text-stone-300 font-montserrat text-sm focus:outline-none focus:border-[#1a3a1a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g. Manchester City Centre"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-800 placeholder:text-stone-300 font-montserrat text-sm focus:outline-none focus:border-[#1a3a1a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setRating(v)}
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${v <= rating ? "fill-[#d4a017] text-[#d4a017]" : "text-stone-200"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    placeholder="Tell everyone how the food tasted..."
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-800 placeholder:text-stone-300 font-montserrat text-sm focus:outline-none focus:border-[#1a3a1a] transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#1a3a1a] hover:bg-[#254f25] text-white font-montserrat font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowForm(true)}
        title="Leave a review"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#1a3a1a] hover:bg-[#254f25] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <MessageSquarePlus className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Testimonials;
