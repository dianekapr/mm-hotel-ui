// /components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Welcome to Ulaman Bali</h1>
      </div>
    </section>
  );
}
