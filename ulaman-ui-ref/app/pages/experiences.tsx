// /pages/experiences.tsx
import { FC, useEffect, useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';

interface Experience {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

const ExperiencesPage: FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch('/api/experiences')
      .then(res => res.json())
      .then(data => setExperiences(data));
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Exclusive Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
