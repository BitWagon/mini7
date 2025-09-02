"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#588157] to-[#a3b18a] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Travel <span className="text-black font-mono font-bold">Agency</span></h2>
          <p className="text-gray-200">
            Discover the world with us! We provide the best travel deals,
            packages, and unforgettable experiences across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-black">Home</a></li>
            <li><a href="#destinations" className="hover:text-black">Destinations</a></li>
            <li><a href="#about" className="hover:text-black">About Us</a></li>
            <li><a href="#contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +92 333 6516071
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> abrahamrandhawa@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Faisalabad, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4 text-gray-200">
            Subscribe to get updates on exclusive offers & new destinations.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#212529] transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} Travel Agency. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-black"><Facebook /></a>
          <a href="#" className="hover:text-black"><Instagram /></a>
          <a href="#" className="hover:text-black"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
}
