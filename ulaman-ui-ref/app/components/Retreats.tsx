"use client";

import React, { useEffect, useState } from "react";
import type { retreatType } from "@/types";

export default function Retreats() {
  const [items, setItems] = useState<retreatType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/retreats", { cache: "no-store" });
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section className="py-20 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 tracking-wide">
          Retreats
        </h2>

        {loading ? (
          <p className="text-center">Loading…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((r) => (
              <article
                key={r.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={r.imageUrl}
                  alt={r.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                    {r.duration} • {r.category}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{r.description}</p>
                  <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                    {r.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm font-medium">{r.price}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
