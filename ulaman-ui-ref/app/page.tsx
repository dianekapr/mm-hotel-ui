'use client'
import { FC, useEffect, useState } from 'react';
import HeroSection from './components/HeroSect';
import VillaCard from './components/VillaCard';
import ExperienceCard from './components/ExperienceCard';

interface Villa {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
}

interface Experience {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: string | number;
}

const HomePage: FC = () => {
  const [villas, setVillas] = useState<Villa[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Fetch villas and experiences data from APIs
    fetch('/api/villas')
      .then(res => res.json())
      .then(data => setVillas(data));

    fetch('/api/experiences')
      .then(res => res.json())
      .then(data => setExperiences(data));
  }, []);

  return (
    <div>
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Villas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Exclusive Experiences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
