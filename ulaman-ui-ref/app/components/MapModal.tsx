"use client";

type MapModalProps = {
  point: {
    id: string;
    name: string;
    icon: string;
    category: string;
    description: string;
    images: string[];
  };
  onCloseAction: () => void;
};

export default function MapModal({ point, onCloseAction }: MapModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-0 flex justify-center items-center">
      <div className="relative bg-[#EFEBE2] w-full max-w-[850px] lg:max-w-[900px] rounded-lg overflow-hidden shadow-xl flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 aspect-[3/4] lg:h-[400px]">
          <img
            src={point.images[0]}
            alt={point.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600">{point.category}</p>
            <h3 className="text-gold text-2xl font-serif mb-4">{point.name}</h3>
            <p className="text-gray-700 text-sm">{point.description}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onCloseAction}
            className="absolute top-4 right-4 text-gold hover:text-black transition z-20 bg-beige w-10 h-10 rounded-full flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
