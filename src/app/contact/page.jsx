"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    setFormStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setFormStatus("Message sent successfully!");
        form.reset();
      } else {
        setFormStatus("Failed to send message.");
      }
    } catch (error) {
      setFormStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <main className="bg-[#dad7cd] text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-black font-mono">Touch</span>
          </h1>
          <p className="text-lg">
            Have questions or need help planning your next journey? We’re here for you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition"
            >
              Send Message
            </button>
            <p className="text-sm text-green-600">{formStatus}</p>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700">
            Reach out to us via email, phone, or visit our office in Faisalabad.
          </p>

          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <Mail className="text-[#588157]" /> contact@travelagency.com
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#588157]" /> +92 300 1234567
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#588157]" /> 123 Main Boulevard, Faisalabad
            </div>
          </div>

          <iframe
            title="Faisalabad Office Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border border-gray-300 shadow-sm"
          ></iframe>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#344e41] to-[#3a5a40] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Plan Your Next Escape</h2>
        <p className="mb-6">We’re just one message away from making your travel dream a reality.</p>
        <a
          href="/"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#212529] transition"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
