"use client";
import { MapPin, Star, Landmark, Coffee, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function CanadaTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Canadian <span className="text-black">Rockies </span> Experience
          </h1>
          <p className="text-lg">9 Days / 8 Nights • $1399 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/4077917/pexels-photo-4077917.jpeg?_gl=1*1e1zm62*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM5MzY5JGo1OSRsMCRoMA.."
          alt="Banff and Rockies"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <MapPin className="text-blue-600" />
              Canada – Alberta & British Columbia
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-blue-600" />
              4.7 Rating from 1,100+ travelers
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              9 Days / 8 Nights
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-blue-600" />
              Banff, Lake Louise & Columbia Icefields
            </li>
            <li className="flex items-center gap-2">
              <Utensils className="text-blue-600" />
              Canadian Cuisine & Mountain Lodging
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-blue-600" />
              Wildlife Safari & Scenic Hiking
            </li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">9-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in Calgary, transfer to Banff, welcome dinner." },
              { day: "Day 2", plan: "Explore Banff town, Bow Falls, and mountain gondola ride." },
              { day: "Day 3", plan: "Visit Lake Louise & Moraine Lake – glacier-fed beauty." },
              { day: "Day 4", plan: "Scenic Icefields Parkway drive to Jasper, stops at waterfalls." },
              { day: "Day 5", plan: "Columbia Icefield Glacier Adventure & Skywalk." },
              { day: "Day 6", plan: "Wildlife safari through Jasper National Park." },
              { day: "Day 7", plan: "Relaxation day with optional spa or nature trails." },
              { day: "Day 8", plan: "Return to Banff, lakeside lunch, farewell celebration." },
              { day: "Day 9", plan: "Morning transfer back to Calgary Airport." },
            ].map((d, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#f0efeb] p-6 rounded-xl shadow"
              >
                <h3 className="text-xl font-bold mb-2">{d.day}</h3>
                <p>{d.plan}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-[#344e41] to-[#3a5a40] text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Explore the Rockies?</h2>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}
