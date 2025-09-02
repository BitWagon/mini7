"use client";
import { MapPin, Star, Landmark, Coffee, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function BaliTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bali <span className="text-black ">Beach</span> Escape
         </h1>
          <p className="text-lg">7 Days / 6 Nights • $799 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/33687849/pexels-photo-33687849.jpeg?_gl=1*1d48dwb*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4NzY1JGo1OSRsMCRoMA.."
          alt="Bali Beach"
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
              Bali, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-blue-600" />
              4.8 Rating from 1200+ travelers
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              7 Days / 6 Nights
            </li>
            <li className="flex items-center gap-2">
              <Utensils className="text-blue-600" />
              Beach Resort Stay with Breakfast
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-blue-600" />
              Island Hopping & Water Sports
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-blue-600" />
              Traditional Balinese Dance Show
            </li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">7-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in Bali, transfer to beach resort, welcome dinner." },
              { day: "Day 2", plan: "Island hopping tour including Nusa Penida and snorkel adventure." },
              { day: "Day 3", plan: "Relax on the beach, optional spa treatments, sunset yoga session." },
              { day: "Day 4", plan: "Water sports day — jet skiing, banana boat, and parasailing." },
              { day: "Day 5", plan: "Cultural excursion to Uluwatu Temple and Balinese dance performance." },
              { day: "Day 6", plan: "Local market shopping and traditional Balinese cooking class." },
              { day: "Day 7", plan: "Free morning, resort checkout, departure." },
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
        <h2 className="text-3xl font-bold mb-6">Ready to Book Your Bali Escape?</h2>
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
