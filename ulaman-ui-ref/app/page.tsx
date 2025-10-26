export const dynamic = "force-dynamic";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Room from "./components/Room";
import Dining from "./components/Dining";
import SpaVideo from "./components/SpaVideo";
import Retreats from "./components/Retreats";
import Package from "./components/Package";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import WeeklySched from "./components/WeeklySched";
import Footer from "./components/Footer";
import Activities from "./components/Activites";
import Tagline from "./components/Tagline";

export default function Home() {
  return (
    <div className="bg-[#D8E2DC] text-black">
      <Navbar />

      <Hero />

      <Tagline />

      <div id="about" className="py-6">
        <About />
      </div>

      <section id="rooms" className="py-6">
        <Room />
      </section>

      <section id="activities" className="py-6">
        <Activities />
      </section>

      <section id="culinary" className="py-6">
        <Dining />
      </section>

      <section id="spa" className="py-6">
        <SpaVideo />
      </section>

      <section id="retreats" className="py-6">
        <Retreats />
      </section>

      <section id="packages" className="py-6">
        <Package />
      </section>

      <section id="schedule" className="py-6">
        <WeeklySched />
      </section>

      <section id="reviews" className="py-6">
        <Reviews />
      </section>

      <section id="map" className="py-6">
        <MapSection />
      </section>

      <Footer />
    </div>
  );
}
