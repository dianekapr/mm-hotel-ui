import React from "react";

const stars = (n: number) => "★★★★★☆☆☆☆☆".slice(5 - Math.min(5, n), 10 - Math.min(5, n));

export default function Reviews() {
  const items = [
    { id: 1, author: "Sasha", role: "Google Reviews", rating: 5, content: "Magical stay. The bamboo design & nature are unreal." },
    { id: 2, author: "Kenji", role: "TripAdvisor", rating: 5, content: "Spa & waterfall dining were unforgettable!" },
    { id: 3, author: "Alicia", role: "Booking.com", rating: 4, content: "Peaceful, warm staff, loved the yoga schedule." },
  ];

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-wide">Guest Reviews</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(r => (
            <article key={r.id} className="bg-[#F7FAF8] rounded-2xl p-5 md:p-6 shadow border border-black/5">
              <div className="text-lg">{stars(r.rating)}</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">“{r.content}”</p>
              <div className="mt-4 text-sm font-medium">{r.author}</div>
              <div className="text-xs text-gray-500">{r.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
