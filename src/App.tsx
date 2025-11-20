import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import ValueProposition from "./components/WhyUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Packages />
          <ValueProposition />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
