// /pages/about.tsx
import { FC } from 'react';
import HeroSection from '../components/HeroSect';

const AboutPage: FC = () => {
  return (
    <div>
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Ulaman Bali</h2>
          <p className="text-lg">
            Ulaman Bali offers a unique, luxurious retreat experience designed to rejuvenate your body and soul. 
            Nestled in the lush greenery of Bali, our resort combines modern comfort with traditional Balinese charm.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
