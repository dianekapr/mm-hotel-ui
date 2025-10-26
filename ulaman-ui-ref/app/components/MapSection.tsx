"use client"

import type { MapSectionProps } from "@/types"

const MapSection = ({}: MapSectionProps) => {
  const facilities = [
    { name: "Cliffside Yoga Shala", x: "25%", y: "35%" },
    { name: "Cocoon Jungle", x: "45%", y: "25%" },
    { name: "E.A.R.T.H Restaurant", x: "65%", y: "45%" },
    { name: "Riverside Spa", x: "35%", y: "65%" },
    { name: "Waterfall Infinity Pool", x: "55%", y: "55%" },
    { name: "Grand Lagoon Villa", x: "75%", y: "70%" },
    { name: "Avatar Tree House", x: "20%", y: "70%" },
    { name: "Bio-Filtered Lake", x: "50%", y: "75%" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Explore Our Resort</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our world-class facilities spread across our lush 5-hectare property nestled in nature
          </p>
        </div>

        <div className="relative w-full bg-secondary rounded-lg overflow-hidden aspect-video shadow-lg">
          {/* Map Background */}
          <img src="/map.jpg" alt="Resort Map" className="w-full h-full object-cover" />

          {/* Facility Markers */}
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: facility.x, top: facility.y }}
            >
              <div className="w-5 h-5 bg-primary rounded-full border-3 border-white shadow-lg hover:scale-125 transition-transform" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-foreground text-primary-foreground px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
                {facility.name}
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-secondary p-5 rounded-lg text-center hover:bg-secondary/80 transition-colors border border-border"
            >
              <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3" />
              <h3 className="font-semibold text-foreground text-sm">{facility.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MapSection