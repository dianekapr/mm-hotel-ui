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
import ArchMediaHero from "./components/ArchMedia";
import Tagline2 from "./components/Tagline2";


export default function Home() {
  return (
    <div className="bg-[#EDE8D9] text-black">
      <Navbar />

      <Hero />

      <Tagline />        
      <About />
        <Room />

        <Tagline2/>

        <ArchMediaHero src="/arch-media.avif" 
        />

        <Package/>


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
