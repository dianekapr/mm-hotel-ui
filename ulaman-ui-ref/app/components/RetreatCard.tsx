"use client";

import React from "react";
import type { RetreatCardProps } from "@/types";

export const RetreatCard = ({ retreat }: RetreatCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={retreat.imageUrl}
          alt={retreat.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold leading-tight">{retreat.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{retreat.duration}</p>

        <p className="mt-3 text-gray-700">{retreat.description}</p>

        {retreat.benefits?.length ? (
          <ul className="mt-4 grid grid-cols-1 gap-1 text-sm text-gray-700">
            {retreat.benefits.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        {retreat.schedule?.length ? (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium">Schedule</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              {retreat.schedule.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </details>
        ) : null}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold">{retreat.price}</span>
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

export default RetreatCard;
