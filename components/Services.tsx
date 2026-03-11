"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Crown, Sparkles, User, Star, Heart } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Bridal Consultation",
    description:
      "A dedicated one-on-one session with our bridal expert to curate your dream trousseau — from lehenga to accessories.",
    highlight: "Complimentary first session",
  },
  {
    icon: Scissors,
    title: "Custom Stitching",
    description:
      "Bring your own fabric or choose from our curated selection. Our master tailors craft perfect silhouettes for your unique measurements.",
    highlight: "7–21 days turnaround",
  },
  {
    icon: Sparkles,
    title: "Embroidery & Embellishment",
    description:
      "Zardozi, gota patti, mirror work, and threadwork — add bespoke embroidery to any garment in our workshop.",
    highlight: "Handcrafted by artisans",
  },
  {
    icon: User,
    title: "Personal Styling",
    description:
      "Not sure what suits you? Our stylists will curate looks based on your body type, occasion, and aesthetic.",
    highlight: "In-studio & virtual sessions",
  },
  {
    icon: Star,
    title: "Alterations & Repairs",
    description:
      "Breathing new life into vintage and heirloom garments. Expert alterations with minimal turnaround time.",
    highlight: "Express service available",
  },
  {
    icon: Heart,
    title: "Trousseau Packaging",
    description:
      "Beautifully packaged trousseau sets with custom boxes, tissue wrapping, and handwritten notes for gifting.",
    highlight: "Premium gifting experience",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad bg-dark relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,162,39,0.3) 40px,
              rgba(201,162,39,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
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
              What We Offer
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            Services Crafted
            <br />
            with <em className="italic text-gold">Devotion</em>
          </h2>
          <p
            className="text-white/50 text-base max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Beyond beautiful clothes — we offer an experience that begins the moment you step in.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group p-8 border border-white/10 hover:border-gold/40 rounded-sm transition-all duration-400 hover:bg-white/5 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500 rounded-sm" />

              {/* Icon */}
              <div className="mb-5 relative z-10">
                <div className="w-12 h-12 border border-gold/30 group-hover:border-gold/70 rounded-sm flex items-center justify-center transition-all duration-300">
                  <svc.icon
                    size={20}
                    className="text-gold/70 group-hover:text-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-white text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {svc.description}
                </p>
                <span
                  className="text-gold/70 text-[10px] tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {svc.highlight}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/40 transition-all duration-300 rounded-br-sm" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20a%20consultation%20at%20Aabhushan%20Boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block text-white px-10 py-4 text-sm tracking-widest uppercase font-medium rounded-sm shadow-gold-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
