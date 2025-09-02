"use client";
import { MapPin, Calendar, Star, Coffee, Landmark, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function ParisTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">
      
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Romantic <span className="text-black"> Paris</span> Getaway</h1>
          <p className="text-lg">5 Days • $999 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img 
          src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?_gl=1*1dzfdio*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM3MTA3JGoyNCRsMCRoMA.."
          alt="Eiffel Tower"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2"><MapPin className="text-blue-600"/> Eiffel Tower & Seine River Cruise</li>
            <li className="flex items-center gap-2"><Landmark className="text-blue-600"/> Louvre Museum & Notre-Dame Cathedral</li>
            <li className="flex items-center gap-2"><Utensils className="text-blue-600"/> Authentic French Cuisine Experience</li>
            <li className="flex items-center gap-2"><Coffee className="text-blue-600"/> Parisian Café Culture Tour</li>
            <li className="flex items-center gap-2"><Star className="text-blue-600"/> Evening Lights of Paris Tour</li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">5-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in Paris, hotel check-in, evening Eiffel Tower visit." },
              { day: "Day 2", plan: "Full-day guided Louvre Museum & Notre-Dame Cathedral tour." },
              { day: "Day 3", plan: "Seine River Cruise + Montmartre exploration." },
              { day: "Day 4", plan: "Local food tour, café hopping, and shopping at Champs-Élysées." },
              { day: "Day 5", plan: "Free morning, souvenir shopping, departure." },
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
        <h2 className="text-3xl font-bold mb-6">Ready to Book Your Paris Trip?</h2>
        <a href="/contact" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition">
          Apply Now
        </a>
      </section>
    </main>
  );
}
