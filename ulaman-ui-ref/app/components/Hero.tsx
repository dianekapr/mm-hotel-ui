const Hero = () => {
  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">Ulaman Eco Luxury Resort</h1>
      </div>
    </section>
  );
};

export default Hero;
