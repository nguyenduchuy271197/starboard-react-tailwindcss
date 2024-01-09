import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat/Stat";
import Project from "./components/Project";
import Trial from "./components/Trial";
import Pricing from "./components/Pricing";
import Feedback from "./components/Feedback";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-screen-xl mx-auto my-auto">
      <div>Hello!</div>

      {/* NARBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* STAT */}
      <Stat />

      {/* PROJECT */}
      <Project />

      {/* TRIAL */}
      <Trial />

      {/* PRICING */}
      <Pricing />

      {/* FB */}
      <Feedback />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
