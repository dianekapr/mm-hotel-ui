import React from "react";
import type { ActivityCardProps } from "@/types";

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={activity.imageUrl}
        alt={activity.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold">{activity.name}</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
          {activity.category} • {activity.duration}
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          {Array.isArray(activity.description)
            ? activity.description.join(" ")
            : activity.description}
        </p>
        <div className="mt-4 text-sm font-medium">
          {activity.price.join(" / ")}
        </div>
        {activity.addInfo && (
          <div className="mt-1 text-xs text-gray-500">{activity.addInfo}</div>
        )}
      </div>
    </article>
  );
}
