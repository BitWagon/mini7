"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star } from "lucide-react";

export default function TravelAgencyPage() {
  const packages = [
    {
      title: "Romantic Paris Getaway",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      price: "$999",
      days: "5 Days / 4 Nights",
      rating: "4.9",
      location: "Paris, France",
      highlights: ["Eiffel Tower Tour", "Seine River Cruise", "Luxury Stay", "Romantic Dinner"],
    },
    {
      title: "Bali Beach Escape",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      price: "$799",
      days: "7 Days / 6 Nights",
      rating: "4.8",
      location: "Bali, Indonesia",
      highlights: ["Beach Resort Stay", "Island Hopping", "Water Sports", "Traditional Dance Show"],
    },
    {
      title: "Dubai Luxury Tour",
      img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
      price: "$1299",
      days: "6 Days / 5 Nights",
      rating: "4.7",
      location: "Dubai, UAE",
      highlights: ["Desert Safari", "Burj Khalifa Visit", "Luxury Hotel", "Shopping Festival"],
    },
    {
      title: "Russian Winter Adventure",
      img: "https://images.unsplash.com/photo-1505842465776-3d90f616310d",
      price: "$1499",
      days: "8 Days / 7 Nights",
      rating: "4.6",
      location: "Moscow, Russia",
      highlights: ["Red Square", "Snow Adventures", "Russian Cuisine", "Cultural Tour"],
    },
    {
      title: "American Road Trip",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      price: "$1199",
      days: "10 Days / 9 Nights",
      rating: "4.9",
      location: "USA",
      highlights: ["New York City", "Las Vegas", "Grand Canyon", "Hollywood"],
    },
    {
      title: "Canadian Rockies Experience",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      price: "$1399",
      days: "9 Days / 8 Nights",
      rating: "4.7",
      location: "Canada",
      highlights: ["Banff National Park", "Lake Louise", "Rocky Mountains", "Wildlife Safari"],
    },
    {
      title: "London City Explorer",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      price: "$899",
      days: "4 Days / 3 Nights",
      rating: "4.8",
      location: "London, UK",
      highlights: ["London Eye", "Buckingham Palace", "Big Ben", "Shopping Tour"],
    },
  ];

  return (
    <main className="bg-[#dad7cd] text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel <span className="text-black font-mono font-bold">Agency</span></h1>
          <p className="text-lg">Discover exclusive packages for your next adventure.</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 max-w-7xl mx-auto px-6" id="packages">
        <h2 className="text-3xl font-bold text-center mb-12">Available Packages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={pkg.img} alt={pkg.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin size={16} className="mr-2 text-blue-600" /> {pkg.location}
                </div>
                <div className="flex items-center text-sm text-[#588157] mb-2">
                  <Star size={16} className="mr-1" /> {pkg.rating} Rating
                </div>
                <div className="flex items-center text-sm text-gray-700 mb-3">
                  <Calendar size={16} className="mr-2 text-blue-600" /> {pkg.days}
                </div>
                <p className="text-lg font-bold text-[#588157] mb-4">{pkg.price}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                  {pkg.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="block text-center bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-[#212529] transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#344e41] to-[#3a5a40] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Dream Vacation Today</h2>
        <p className="mb-6">Exclusive offers available for early bookings. Don’t miss out!</p>
        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
