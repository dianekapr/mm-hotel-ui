import React from "react";

export default function Dining() {
  const photos = ["/culinary-1.jpg", "/culinary-2.jpg", "/culinary-3.jpg"]; // ganti sesuai asetmu
  return (
    <section className="py-20 bg-[#EEF2EE]" id="culinary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Culinary</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Seasonal menus crafted from local organic produce. Riverside breakfast, floating trays,
              and candlelit dinners curated by our chefs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <img key={i} src={p} alt={`Culinary ${i + 1}`} className="h-32 md:h-40 w-full object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
