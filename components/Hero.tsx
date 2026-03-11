"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/40" />
      </div>

      {/* Decorative gold corner accents */}
      <div className="absolute top-32 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/60 z-10 hidden lg:block" />
      <div className="absolute top-32 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/60 z-10 hidden lg:block" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/60 z-10 hidden lg:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/60 z-10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-gold" />
            <span
              className="text-gold text-xs tracking-[0.4em] uppercase font-inter font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              New Bridal Collection 2024
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            Elegant Ethnic
            <br />
            <em className="italic text-gold">Wear</em> for Every
            <br />
            Occasion
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            From timeless bridal lehengas to bespoke designer sarees — curated with
            love, crafted with heritage. Your dream ethnic look begins here.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                const el = document.querySelector("#collections");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold text-white px-8 py-4 text-sm tracking-widest uppercase font-medium rounded-sm shadow-gold-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Collections
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'd%20love%20to%20know%20more%20about%20your%20collections"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/30 backdrop-blur-sm text-white px-8 py-4 text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-white/20 hover:border-gold/60 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Enquiry
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="flex gap-10 mt-16 pt-8 border-t border-white/20"
          >
            {[
              { num: "500+", label: "Happy Brides" },
              { num: "15+", label: "Years of Craft" },
              { num: "1000+", label: "Designs" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-3xl text-gold font-playfair font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-white/60 text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-white/50 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
