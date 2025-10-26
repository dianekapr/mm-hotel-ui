"use client";

import React from "react";
import type { PackageCardProps } from "@/types";

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={pkg.imageUrl}
          alt={pkg.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold leading-tight">{pkg.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{pkg.duration}</p>

        <p className="mt-3 text-gray-700">{pkg.description}</p>

        {pkg.includes?.length ? (
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
            {pkg.includes.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
        ) : null}

        {pkg.addInfo?.length ? (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium">Additional info</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              {pkg.addInfo.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </details>
        ) : null}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold">{pkg.price}</span>
          <a
            href="#book-now"
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Book now
          </a>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
