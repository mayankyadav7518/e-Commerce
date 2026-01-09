import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-teal-400 text-2xl font-bold mb-6">MarketPlace</h3>
            <p className="text-gray-400">
              A modern, fast and secure way to shop curated fashion, accessories and spices in one place.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Men's wear</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Women's wear</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Kids' wear</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Spices</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Help center</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Track order</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Returns & refunds</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Shipping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <p className="mb-4">support@marketplace.app</p>
            <p className="mb-6">+91 98765 43210</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MarketPlace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
