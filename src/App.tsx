import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import ValueProposition from "./components/WhyUs";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonial";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Packages />
          <ValueProposition />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
