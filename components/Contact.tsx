"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["12, Kala Ghoda, Fort", "Mumbai, Maharashtra 400001"],
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    lines: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Clock,
    title: "Store Hours",
    lines: ["Mon–Sat: 10 AM – 8 PM", "Sunday: 11 AM – 6 PM"],
  },
  {
    icon: Instagram,
    title: "Follow Us",
    lines: ["@aabhushan_boutique", "20K+ Followers"],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleWhatsApp = () => {
    const text = `Hi, I'm ${form.name}. ${form.message} (Phone: ${form.phone})`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="section-pad bg-[#F0EDE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span
              className="text-gold text-xs tracking-[0.35em] uppercase font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2
            className="text-4xl md:text-5xl text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            We'd Love to{" "}
            <em className="italic text-gold">Hear</em> From You
          </h2>
          <p
            className="text-dark-muted text-base max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Walk into our studio, send a WhatsApp, or drop us a message below — we respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cream border border-gold/15 p-5 rounded-sm group hover:border-gold/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 border border-gold/30 rounded-sm flex items-center justify-center mb-3 group-hover:border-gold transition-all duration-300">
                    <item.icon size={16} className="text-gold" />
                  </div>
                  <h4
                    className="text-dark text-sm font-medium mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-dark-muted text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map embed */}
            <div className="h-64 rounded-sm overflow-hidden shadow-luxury border border-gold/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0255174043074!2d72.83266421490253!3d18.930016487156654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a7f5ae7%3A0x53e3a29c09e4a3d4!2sKala%20Ghoda%2C%20Fort%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1648000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aabhushan Boutique Location"
              />
            </div>

            {/* WhatsApp big button */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20visit%20Aabhushan%20Boutique"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-full py-4 rounded-sm text-sm tracking-widest uppercase font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-cream border border-gold/20 p-8 md:p-10 rounded-sm shadow-luxury"
          >
            <h3
              className="text-2xl text-dark mb-2"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Send an Enquiry
            </h3>
            <p
              className="text-dark-muted text-sm mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Fill in your details and we'll follow up via WhatsApp within 2 hours.
            </p>

            <div className="space-y-5">
              <div>
                <label
                  className="text-dark text-xs tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gold/25 bg-cream/50 focus:border-gold px-4 py-3 text-sm outline-none rounded-sm transition-all duration-200 placeholder:text-dark-muted/40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="text-dark text-xs tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gold/25 bg-cream/50 focus:border-gold px-4 py-3 text-sm outline-none rounded-sm transition-all duration-200 placeholder:text-dark-muted/40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="text-dark text-xs tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tell Us About Your Requirements
                </label>
                <textarea
                  rows={5}
                  placeholder="e.g. Looking for a bridal lehenga for a December wedding..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gold/25 bg-cream/50 focus:border-gold px-4 py-3 text-sm outline-none rounded-sm transition-all duration-200 resize-none placeholder:text-dark-muted/40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button
                onClick={handleWhatsApp}
                className="btn-gold w-full text-white py-4 text-sm tracking-widest uppercase font-medium rounded-sm shadow-gold flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Send size={15} />
                Send via WhatsApp
              </button>

              <p
                className="text-dark-muted text-xs text-center"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                By submitting, you agree to be contacted via WhatsApp for follow-ups.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
