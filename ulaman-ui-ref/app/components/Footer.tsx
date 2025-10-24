export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ulaman Bali. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white">Facebook</a>
          <a href="#" className="text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
