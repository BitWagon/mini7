"use client";
import { MapPin, Star, Landmark, Coffee, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function RussiaTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?_gl=1*a1xnl5*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4OTc4JGoxMiRsMCRoMA..')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Russian <span className="text-black">Winter </span> Adventure
          </h1>
          <p className="text-lg">8 Days / 7 Nights • $1499 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/415980/pexels-photo-415980.jpeg?_gl=1*mky0yx*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4OTc4JGoxMiRsMCRoMA.."
          alt="Moscow Winter"
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
              Moscow, Russia
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-blue-600" />
              4.6 Rating from 850+ travelers
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              8 Days / 7 Nights
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-blue-600" />
              Red Square & St. Basil’s Cathedral
            </li>
            <li className="flex items-center gap-2">
              <Utensils className="text-blue-600" />
              Authentic Russian Cuisine Experiences
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-blue-600" />
              Winter Activities & Cultural Exploration
            </li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">8-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in Moscow, hotel check-in, welcome dinner." },
              { day: "Day 2", plan: "Explore Red Square, Kremlin tour, and winter stroll." },
              { day: "Day 3", plan: "Visit St. Basil’s Cathedral and GUM shopping mall." },
              { day: "Day 4", plan: "Snow adventure: sledding and ice skating in Gorky Park." },
              { day: "Day 5", plan: "Day trip to Suzdal for traditional countryside experience." },
              { day: "Day 6", plan: "Try Russian banya (sauna), followed by local food tasting." },
              { day: "Day 7", plan: "Cultural tour: museums, art galleries, evening folk show." },
              { day: "Day 8", plan: "Farewell breakfast, souvenir shopping, airport transfer." },
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
        <h2 className="text-3xl font-bold mb-6">Ready to Book Your Russian Adventure?</h2>
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
