"use client";
import { MapPin, Star, Landmark, Coffee, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function DubaiTourPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen text-gray-900">

      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1089645/pexels-photo-1089645.jpeg?_gl=1*18zp32e*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4NTUyJGo3JGwwJGgw')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dubai <span className="text-black">Luxury </span>Tour
          </h1>
          <p className="text-lg">6 Days / 5 Nights • $1299 per person</p>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/33727652/pexels-photo-33727652.jpeg?_gl=1*195brai*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4NTUyJGo3JGwwJGgw"
          alt="Dubai Skyline"
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
              Dubai, UAE
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-blue-600" />
              4.7 Rating from 980+ travelers
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-blue-600" />
              6 Days / 5 Nights
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-blue-600" />
              Burj Khalifa & Dubai Mall Visit
            </li>
            <li className="flex items-center gap-2">
              <Utensils className="text-blue-600" />
              Luxury 5-Star Hotel Stay
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="text-blue-600" />
              Dubai Desert Safari with BBQ Dinner
            </li>
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">6-Day Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { day: "Day 1", plan: "Arrival in Dubai, luxury hotel check-in, evening fountain show." },
              { day: "Day 2", plan: "Visit Burj Khalifa, Dubai Aquarium, and Dubai Mall shopping." },
              { day: "Day 3", plan: "Desert Safari adventure with dune bashing & traditional BBQ dinner." },
              { day: "Day 4", plan: "Free morning, spa and relaxation, optional yacht cruise in the evening." },
              { day: "Day 5", plan: "Visit Palm Jumeirah & Global Village. Participate in Shopping Festival." },
              { day: "Day 6", plan: "Last-minute shopping, resort checkout, airport transfer." },
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
        <h2 className="text-3xl font-bold mb-6">Ready to Book Your Dubai Trip?</h2>
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
