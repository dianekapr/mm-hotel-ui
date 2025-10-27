"use client";

import { useEffect, useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type ScheduleRow = {
  time: string;
  activities: string[];
};

export default function WeeklySched() {
  const [schedule, setSchedule] = useState<ScheduleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchedule()
      .then(setSchedule)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Helper function to simulate fetching data
  const fetchSchedule = async (): Promise<ScheduleRow[]> => {
    return new Promise<ScheduleRow[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { time: "7 AM", activities: ["Yoga (All Levels)", "Yoga (All Levels)", "Yoga (All Levels)", "Yoga (All Levels)", "Yoga (All Levels)", "Yoga (All Levels)", "Yoga (All Levels)"] },
          { time: "12 PM", activities: ["Sound Healing", "Sound Healing", "Sound Healing", "Sound Healing", "Sound Healing", "Sound Healing", "Sound Healing"] },
          { time: "1 PM", activities: ["", "", "", "", "", "", ""] },
        ]);
      }, 1000);
    });
  };

  const getBgClass = (activity: string) => {
    if (activity.includes("Yoga")) return "bg-[#d9ebc4]"; // Light green
    if (activity.includes("Sound")) return "bg-[#c6d4d3]"; // Light blue
    return "";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <svg
          className="animate-spin h-8 w-8 text-gold"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className="py-20 px-6 md:px-16 mx-auto max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-gold text-4xl font-serif leading-tight">
          Weekly Schedule
        </h2>
        <p className="text-brown text-lg mt-2 font-light">
          Advanced Booking Is Recommended
        </p>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-[600px] w-full table-fixed border-separate border-spacing-0 mx-auto">
          <thead>
            <tr>
              <th className="w-20"></th>
              {days.map((day) => (
                <th
                  key={day}
                  className="text-gold text-sm font-medium py-4 px-2 border-b border-l border-gold"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, j) => (
              <tr key={row.time}>
                <td className="text-gold text-sm py-4 pr-2 border-t border-r border-gold align-top">
                  {row.time}
                </td>
                {row.activities.map((activity: string, i: number) => (
                  <td
                    key={i}
                    className={`border-gold h-[80px] align-top px-2 ${
                      j !== schedule.length - 1 && "border-b"
                    } ${i !== row.activities.length - 1 && "border-r"}`}
                  >
                    {activity ? (
                      <div
                        className={`text-center text-sm py-4 rounded-md ${getBgClass(
                          activity
                        )}`}
                      >
                        {activity}
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gold underline text-left">
        <a href="/api/schedule-pdf" target="_blank">
          DOWNLOAD PDF
        </a>
      </div>
    </section>
  );
}
