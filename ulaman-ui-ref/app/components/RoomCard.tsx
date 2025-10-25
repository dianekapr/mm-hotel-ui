// /components/VillaCard.tsx
interface Villa {
  imageUrl: string;
  name: string;
  description: string;
}

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={villa.imageUrl} alt={villa.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{villa.name}</h3>
        <p>{villa.description}</p>
      </div>
    </div>
  );
}
