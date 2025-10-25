// /components/MapSection.tsx
export default function MapSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Explore Our Location</h2>
        <div className="mt-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            width="100%" 
            height="450" 
            allowFullScreen={true} 
            loading="lazy"
            title="Ulaman Bali Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
