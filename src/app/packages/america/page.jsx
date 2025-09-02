"use client";
import { MapPin, Star, Landmark, Coffee, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AmericaTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?_gl=1*i2ugiq*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM5MTM0JGo2MCRsMCRoMA..')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            American <span className="text-black">Road </span> Trip
          </h1>
          <p className="text-lg">10 Days / 9 Nights • $1199 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?_gl=1*i2ugiq*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM5MTM0JGo2MCRsMCRoMA.."
          alt="USA Road Trip"
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
              USA – Coast to Coast
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-blue-600" />
              4.9 Rating from 2,300+ travelers
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              10 Days / 9 Nights
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-blue-600" />
              Iconic Cities & Natural Wonders
            </li>
            <li className="flex items-center gap-2">
              <Utensils className="text-blue-600" />
              Diverse Culinary Experiences
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-blue-600" />
              Music, Culture & Nightlife
            </li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">10-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in New York City, Times Square night tour." },
              { day: "Day 2", plan: "Statue of Liberty, Central Park, and Broadway show." },
              { day: "Day 3", plan: "Fly to Las Vegas, check-in, explore The Strip." },
              { day: "Day 4", plan: "Grand Canyon day trip with scenic lookout stops." },
              { day: "Day 5", plan: "Free day in Vegas: optional helicopter ride or shopping." },
              { day: "Day 6", plan: "Drive to Los Angeles via Route 66 with roadside attractions." },
              { day: "Day 7", plan: "Hollywood sign, Walk of Fame, and Rodeo Drive tour." },
              { day: "Day 8", plan: "Santa Monica beach day and sunset pier walk." },
              { day: "Day 9", plan: "Universal Studios full-day adventure." },
              { day: "Day 10", plan: "Farewell breakfast and departure from LAX airport." },
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
        <h2 className="text-3xl font-bold mb-6">Ready to Hit the American Roads?</h2>
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
