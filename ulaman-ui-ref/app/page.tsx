import { HeroSectProps } from "@/types";
import Hero from "@/app/components/Hero";  // Import Hero component
import About from "@/app/components/About"; // Import About component
import Activities from "@/app/components/Activites"; // Import Activities component
// import Footer from "@/app/components/Footer"; // Import Footer component

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-[#D8E2DC] text-black">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </section>

      {/* About Section */}
      <div className="py-6">
        <About />
      </div>

      {/* Activities Section */}
      <div className="py-6 bg-[#F1F1F1]">
        <Activities />
      </div>

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}
