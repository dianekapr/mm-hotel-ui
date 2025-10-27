"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ActivityCard from "./ActivityCard"; // Changed to ActivityCard
import { activityType } from "@/types";


export default function ActivitiesSection() {
  const [activities, setActivities] = useState<activityType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching the data from the API
  useEffect(() => {
    fetch("/api/activities")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((err) => {
        setError("Failed to load activities.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>; // Temporary loading message
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className="py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[100px] md:auto-rows-[250px]">
        {/* Activity Cards */}
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            name={activity.name}
            description={activity.description[0]} // Assuming the first description is the main one
            duration={activity.duration}
            price={activity.price}
            imageUrl={activity.imageUrl}
            addInfo={activity.addInfo}
          />
        ))}
      </div>
      <div className="flex w-full">
        <Link href="#" className="mx-auto mt-4">
          <span className="inline-block text-sm text-gold font-medium border-b border-gold transition-all duration-300 hover:border-transparent pb-[2px]">
            Discover All Experiences
          </span>
        </Link>
      </div>
    </section>
  );
}
