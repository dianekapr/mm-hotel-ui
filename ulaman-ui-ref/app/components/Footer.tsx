const Footer = () => {
  return (
    <footer className="bg-[#A19C96] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">Ulaman Eco Luxury Resort</h3>
            <p className="text-sm">Bali, Indonesia</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Facebook</a>
            <a href="#" className="text-white hover:text-gray-300">Instagram</a>
            <a href="#" className="text-white hover:text-gray-300">Twitter</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Ulaman Eco Luxury Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
