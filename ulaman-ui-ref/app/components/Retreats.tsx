"use client";

import React, { useEffect, useState } from "react";
import RetreatCard from "./RetreatCard";
import type { retreatType } from "@/types";

const Retreats = () => {
  const [retreats, setRetreats] = useState<retreatType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/retreats", { cache: "no-store" });
        const data = (await res.json()) as retreatType[];
        setRetreats(data);
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Retreats</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((ret) => (
              <RetreatCard key={ret.id} retreat={ret} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Retreats;
