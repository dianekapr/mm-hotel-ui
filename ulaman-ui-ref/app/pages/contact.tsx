// /pages/contact.tsx
import { FC } from 'react';

const ContactPage: FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded" rows={4}></textarea>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
