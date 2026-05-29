import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import ValueProposition from "./components/WhyUs";
import LocationMap from "./components/LocationMap";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {/* Core Layout Navigation Frame */}
        <Navbar />

        {/* Structured Application Blocks */}
        <main>
          <Hero />
          <Packages />
          <ValueProposition />
          <LocationMap />
          <Testimonials />
        </main>

        {/* Global Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default App;
