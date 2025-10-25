"use client"

import Link from "next/link"

export const DiningSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 leading-tight">
          A world-class gastronomic journey where nature's finest ingredients meet culinary craftsmanship.
        </h2>

        <div className="mb-8 bg-gray-200 aspect-video rounded-sm flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <Link
          href="https://earthbyulaman.com/"
          target="_blank"
          className="text-gray-900 underline hover:text-gray-600 transition-colors text-base"
        >
          Visit The Website
        </Link>

        <div className="mt-16 space-y-4">
          <div>
            <p className="text-gray-900 text-sm font-light">Ulaman Salad</p>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-light">Our Chef: Arik</p>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-light">E.A.R.T.H Restaurant</p>
          </div>
        </div>
      </div>
    </section>
  )
}
