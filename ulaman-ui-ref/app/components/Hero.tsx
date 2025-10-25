import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <video
        src="/hero1.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-5xl font-bold">Welcome to Ulaman</h1>
      </div>
    </section>
  );
};

export default Hero;
