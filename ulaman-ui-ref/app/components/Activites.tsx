import React, { useEffect, useState } from "react";
import { ActivityCard } from "./ActivityCard";
import { activityType } from "@/types";

const Activities = () => {
  const [activities, setActivities] = useState<activityType[]>([]);

  useEffect(() => {
    // Fetch activities from API or mock data
    const fetchActivities = async () => {
      const response = await fetch("/api/activities");
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
