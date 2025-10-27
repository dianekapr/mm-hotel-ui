"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    if (activity.includes("Yoga")) return "bg-[#d9ebc4]";
    if (activity.includes("Sound")) return "bg-[#c6d4d3]"; 
    return "";
  };

  if (loading) return <p className="text-gray-500 text-center py-10">{loading}</p>;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className="py-20 px-6 md:px-16 mx-auto max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-[#C69C4D] text-4xl font-serif leading-tight">
          Weekly Schedule
        </h2>
        <p className="text-brown text-sm mt-2 font-light">
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
                  className="text-[#C69C4D] text-sm font-medium py-4 px-2 border-b border-l border-gold"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, j) => (
              <tr key={row.time}>
                <td className="text-[#C69C4D] text-sm py-4 pr-2 border-t border-r border-gold align-top">
                  {row.time}
                </td>
                {row.activities.map((activity: string, i: number) => (
                  <td
                    key={i}
                    className={`border-[#C69C4D] h-[80px] align-top px-2 ${
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

      <div className="mt-6 text-left">
  <Link
    href="/"
    className="group inline-block mt-6 text-[13px] font-semibold tracking-wide uppercase relative no-underline"
    style={{ color: "#C69C4D", textDecoration: "none" }}
  >
    <span className="relative z-10">DOWNLOAD PDF</span>
    <span className="block w-full h-[1.5px] bg-current mt-0.5 transition-all duration-300 group-hover:opacity-0" />
  </Link>
</div>

    </section>
  );
}
