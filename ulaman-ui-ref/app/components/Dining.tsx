'use client';  // This makes this component a Client Component

import React from 'react';
import Image from 'next/image';

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="row">
          <div className="imageContainer">
            <Image
              src="/images/salad.jpg"
              alt="Salad"
              width={600}
              height={400}
              className="image"
            />
          </div>
          <div className="content">
            <h2>A world-class gastronomic journey where nature’s finest ingredients meet culinary craftsmanship.</h2>
          </div>
        </div>
        <div className="row">
          <div className="imageContainer">
            <Image
              src="/images/chef.jpg"
              alt="Chef"
              width={600}
              height={400}
              className="image"
            />
          </div>
          <div className="content">
            {/* More text content */}
          </div>
        </div>
        <div className="row">
          <div className="imageContainer">
            <Image
              src="/images/restaurant.jpg"
              alt="Restaurant"
              width={600}
              height={400}
              className="image"
            />
          </div>
          <div className="content">
            {/* More text content */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 50px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          justify-content: center;
          width: 100%;
        }

        .imageContainer {
          width: 50%;
        }

        .content {
          width: 50%;
          padding-left: 20px;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.5;
          color: #5a4f38;
        }

        .image {
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Scroll snapping */
        .section {
          scroll-snap-type: y mandatory;
          height: 100vh;
        }

        .row {
          scroll-snap-align: start;
        }
      `}</style>
    </>
  );
};

export default Section;
