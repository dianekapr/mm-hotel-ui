// /pages/packages.tsx
import { FC, useEffect, useState } from 'react';

interface Package {
  id: string;
  name: string;
  description: string;
  duration: string;
}

const PackagesPage: FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Exclusive Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">{pkg.name}</h3>
              <p className="text-lg">{pkg.description}</p>
              <p className="text-lg font-bold mt-2">{pkg.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
