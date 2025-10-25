// /components/ExperienceCard.tsx
interface Experience {
  imageUrl: string;
  name: string;
  description: string;
  price: string | number;
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={experience.imageUrl} alt={experience.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{experience.name}</h3>
        <p>{experience.description}</p>
        <p className="text-lg font-bold">{experience.price}</p>
      </div>
    </div>
  );
}
