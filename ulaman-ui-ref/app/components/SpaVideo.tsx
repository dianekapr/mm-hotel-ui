import React from "react";

export default function SpaVideo() {
  return (
    <section className="py-20 bg-[#F9FBF9]" id="spa">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Spa & Wellness</h2>
        <p className="mt-3 text-gray-700">
          Riverstone massages, herbal baths, and bamboo tranquility.
        </p>
        <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
            title="Spa video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
