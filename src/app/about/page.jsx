"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, Users, Globe, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#dad7cd] text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-black font-mono">Us</span>
          </h1>
          <p className="text-lg">
            Who we are and why thousands trust us for unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?_gl=1*ygki6k*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY3NTQzNjAkbzE5JGcxJHQxNzU2NzU0NDkxJGo2MCRsMCRoMA.."
          alt="Travel agency team"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            At <span className="font-semibold text-[#588157]">Travel Agency</span>,
            we believe that traveling is not just about destinations—it's about the
            experience, memories, and people you meet along the way.
          </p>
          <p className="text-gray-700">
            With over <strong>10+ years</strong> in the travel industry, we’ve helped
            thousands of explorers find their dream adventures across the globe. From
            curated packages to custom trips, we’re here to turn your travel dreams
            into reality.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=" py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <Globe size={28} className="text-blue-600" />,
                title: "Global Reach",
                desc: "We offer trips to over 100+ destinations worldwide with exclusive experiences.",
              },
              {
                icon: <Star size={28} className="text-yellow-500" />,
                title: "5-Star Service",
                desc: "Our travel experts and guides ensure every trip is smooth, safe, and memorable.",
              },
              {
                icon: <Calendar size={28} className="text-green-600" />,
                title: "Flexible Plans",
                desc: "Book, reschedule, or cancel your plans without any hassle or hidden fees.",
              },
              {
                icon: <Smile size={28} className="text-pink-500" />,
                title: "Customer Happiness",
                desc: "Our 24/7 support and post-trip service keep our customers happy and coming back.",
              },
              {
                icon: <Users size={28} className="text-purple-600" />,
                title: "Experienced Team",
                desc: "With years of expertise, our travel consultants curate the perfect itinerary just for you.",
              },
              {
                icon: <MapPin size={28} className="text-red-500" />,
                title: "Local Insight",
                desc: "We collaborate with local partners to offer authentic and unique experiences.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-[#f0efeb] rounded-xl p-6 shadow-md"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Experience Section */}
<section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h2 className="text-3xl font-bold mb-4">Explore the World with Confidence</h2>
    <p className="text-gray-700 mb-6">
      At the heart of every great journey lies a story waiting to be told. We specialize in curating
      exceptional travel experiences that go beyond the ordinary — from breathtaking landscapes and vibrant cultures to hidden gems off the beaten path.
    </p>

    <p className="text-gray-700">
      Whether you're planning a solo escape, a family adventure, or a luxury retreat, our expert
      team ensures every detail is tailored to perfection. Discover a new way to travel — seamless,
      immersive, and unforgettable.
    </p>
  </div>
  <motion.img
    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
    alt="Travel Experience"
    className="rounded-2xl shadow-lg"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  />
</section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#344e41] to-[#3a5a40] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Start Planning Your Next Journey
        </h2>
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
