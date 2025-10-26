"use client";

import React, { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import type { packageType } from "@/types";

const PackageSection = () => {
  const [packages, setPackages] = useState<packageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/packages", { cache: "no-store" });
        const data = (await res.json()) as packageType[];
        setPackages(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Packages</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageSection;
