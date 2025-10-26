import React from "react";

export default function WeeklySched() {
  const rows = [
    ["Mon", "07:30", "Hatha Yoga (Shala)"],
    ["Tue", "16:00", "Jungle Walk"],
    ["Wed", "07:30", "Yin & Breath"],
    ["Thu", "15:30", "Village Cycling"],
    ["Fri", "07:30", "Fly High Yoga"],
    ["Sat", "10:00", "Sound Healing"],
    ["Sun", "17:00", "Sunset Meditation"],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-wide">Weekly Schedule</h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5 shadow">
          <table className="w-full text-sm">
            <thead className="bg-[#F3F5F2]">
              <tr>
                <th className="text-left px-4 py-3">Day</th>
                <th className="text-left px-4 py-3">Time</th>
                <th className="text-left px-4 py-3">Activity</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="odd:bg-white even:bg-[#FAFAFA]">
                  <td className="px-4 py-3 font-medium">{r[0]}</td>
                  <td className="px-4 py-3">{r[1]}</td>
                  <td className="px-4 py-3">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
