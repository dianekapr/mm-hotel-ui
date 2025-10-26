import React from "react";

const Reviews = () => {
  return (
    <section className="py-20 bg-[#e1f5fe]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Guests Say</h2>
        <div className="space-y-6">
          <blockquote className="text-xl italic">
            "The most magical experience! Ulaman Eco Resort is a hidden gem in Bali. Every detail exceeded our expectations."
          </blockquote>
          <cite className="block text-lg font-semibold">- John Doe</cite>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
