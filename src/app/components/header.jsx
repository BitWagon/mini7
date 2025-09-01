"use client";
import { useState } from "react";
import { Menu, X, Plane, Compass } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#588157] to-[#a3b18a] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Plane className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Travel <span className="text-black font-mono font-bold">Agency</span> 
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="home" className="hover:text-black transition">
            Home
          </a>
          <a href="Destination" className="hover:text-black transition">
            Destinations
          </a>
          
          <a href="about" className="hover:text-black transition">
            About Us
          </a>
          <a href="contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-[#212529] transition shadow-md"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-blue-700 text-white px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="#destinations" className="block hover:text-yellow-300">
            Destinations
          </a>
          <a href="#packages" className="block hover:text-yellow-300">
            Packages
          </a>
          <a href="#about" className="block hover:text-yellow-300">
            About Us
          </a>
          <a href="#contact" className="block hover:text-yellow-300">
            Contact
          </a>
          <a
            href="#book"
            className="block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
