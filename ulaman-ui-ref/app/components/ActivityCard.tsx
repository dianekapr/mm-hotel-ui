import React from "react";
import { activityType } from "@/types";

type ActivityCardProps = {
  activity: activityType;
};

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={activity.imageUrl}
        alt={activity.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{activity.name}</h3>
        <p className="text-gray-500">{activity.duration}</p>
        <p className="mt-2">{activity.description.join(" ")}</p>
      </div>
    </div>
  );
};
