export const dynamic = "force-dynamic";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Room from "./components/Room";
import Dining from "./components/Dining";
import SpaVideo from "./components/SpaVideo";
import Package from "./components/Package";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import WeeklySched from "./components/WeeklySched";
import Footer from "./components/Footer";
import Activities from "./components/Activites";
import Tagline from "./components/Tagline";
import ArchMediaHero from "./components/ArchMedia";
import Tagline2 from "./components/Tagline2";
import RetreatSplit from "./components/Retreats";


export default function Home() {
  return (
    <div className="bg-[#EFEBE2] text-black">
      <Hero />

      <Tagline />        
      <About />
        <Room />

        <Tagline2/>

        <ArchMediaHero src="/arch-media.avif" 
        />

        <Package/>

        <RetreatSplit
        leftSrc="/retreats1.avif"
        rightSrc="/retreats2.avif"
        heading="Discover your path to wellness and growth."
        body="At Ulaman we redefine luxury as an experience that not only pampers the senses but also nurtures the soul. Nestled in pristine nature, our eco-luxury retreat offers a sanctuary for healing and transformation."
        ctaLabel="LEARN MORE"
        onCtaHref="/retreats"
        sectionHeightVH={160}       // more runway = slower feel
        openThreshold={0.33}        // start opening after ~1/3 enters
        closeThreshold={0.33}       // start closing when ~1/3 remains
      />

      
      <SpaVideo />


    <Dining/>

      <section id="map" className="py-6">
        <MapSection />
      </section>
<section id="reviews" className="py-6">
        <Reviews />
      </section>
    <Activities/>

      <section id="schedule" className="py-6">
        <WeeklySched />
      </section>
    </div>
  );
}
