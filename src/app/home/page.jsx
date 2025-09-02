"use client";
import { Plane, MapPin, Globe, Calendar, Star, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-[#dad7cd] text-gray-900">
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore the World with Travel <span className="text-black font-mono font-bold">Agency</span></h1>
          <p className="text-lg mb-8">Your journey begins here. Find exclusive deals & unforgettable experiences.</p>
          <a href="#packages" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition">
            Start Your Adventure
          </a>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", link: "/packages/paris" },
            { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", link: "/packages/bali" },
            { name: "Dubai", img: "https://images.pexels.com/photos/1089645/pexels-photo-1089645.jpeg?_gl=1*18zp32e*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4NTUyJGo3JGwwJGgw", link: "/packages/dubai" },
            { name: "Russia", img: "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?_gl=1*a1xnl5*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM4OTc4JGoxMiRsMCRoMA..", link: "/packages/russia" },
            { name: "America", img: "https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?_gl=1*i2ugiq*_ga*MTc4NzI1ODA4NC4xNzI1ODg5NTEy*_ga_8JE65Q40S6*czE3NTY4MzcwNzEkbzIxJGcxJHQxNzU2ODM5MTM0JGo2MCRsMCRoMA..", link: "/packages/america" },
            { name: "Canada", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", link: "/packages/canada" },
            { name: "London", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", link: "/packages/london" },
          ].map((dest, i) => (
            <a
              key={i}
              href={dest.link}
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={dest.img} alt={dest.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold">
                  {dest.name}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

        


      {/* Packages Section */}
      <section id="packages" className="bg-[#dad7cd] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Exclusive Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Romantic Paris Getaway", price: "$999", days: "5 Days", icon: <Globe />,  link: "/packages/paris" },
              { title: "Bali Beach Escape", price: "$799", days: "7 Days", icon: <Plane /> , link:"/packages/bali" },
              { title: "Dubai Luxury Tour", price: "$1299", days: "6 Days", icon: <Star /> , link:"/packages/dubai" },
              { title: "Russian Winter Adventure", price: "$1499", days: "8 Days", icon: <Compass /> , link:"/packages/russia" },
              { title: "American Road Trip", price: "$1199", days: "10 Days", icon: <MapPin /> , link:"/packages/america" },
              { title: "Canadian Rockies Experience", price: "$1399", days: "9 Days", icon: <Calendar /> , link:"/packages/canada" },
              { title: "London City Explorer", price: "$899", days: "4 Days", icon: <Star /> , link:"/packages/london" },
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">{pkg.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-2">{pkg.days}</p>
                <p className="text-lg font-bold text-[#588157]">{pkg.price}</p>
                <a href={pkg.link}
                className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-[#212529] transition">
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
          alt="Travel"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose Travel Agency?</h2>
          <p className="text-gray-700 mb-4">
            With years of experience in the travel industry, we offer the best holiday packages at unbeatable prices. 
            From exotic beaches to adventurous mountains, we make your dream trip a reality.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><MapPin size={20} className="text-blue-600"/> Over 100+ Destinations</li>
            <li className="flex items-center gap-2"><Calendar size={20} className="text-blue-600"/> Flexible Dates & Packages</li>
            <li className="flex items-center gap-2"><Star size={20} className="text-blue-600"/> 5-Star Rated Experiences</li>
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#344e41] to-[#3a5a40] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
        <a href="contact" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition">
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
