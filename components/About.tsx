"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2009", event: "Aabhushan founded in Mumbai" },
  { year: "2013", event: "Launched bridal consultation studio" },
  { year: "2018", event: "Expanded to pan-India custom orders" },
  { year: "2024", event: "500+ brides dressed & counting" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="section-pad bg-cream relative overflow-hidden">
      {/* Decorative mandala */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='190' fill='none' stroke='%23C9A227' stroke-width='2'/%3E%3Ccircle cx='200' cy='200' r='160' fill='none' stroke='%23C9A227' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='130' fill='none' stroke='%23C9A227' stroke-width='2'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23C9A227' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='70' fill='none' stroke='%23C9A227' stroke-width='2'/%3E%3Ccircle cx='200' cy='200' r='40' fill='none' stroke='%23C9A227' stroke-width='1'/%3E%3Cpath d='M200 10 L200 390 M10 200 L390 200 M62 62 L338 338 M338 62 L62 338' fill='none' stroke='%23C9A227' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="img-zoom relative h-[480px] md:h-[560px] rounded-sm overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1752786768226-b624a5261654?w=600&q=80"
                alt="Aabhushan Boutique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-cream shadow-luxury border border-gold/20 p-6 rounded-sm max-w-[200px]"
            >
              <div
                className="text-4xl text-gold font-playfair font-semibold leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                15+
              </div>
              <div
                className="text-dark text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Years of Heritage Craft
              </div>
              <div className="gold-divider-left mt-3" />
            </motion.div>

            {/* Gold corner frame */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/50 pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span
                className="text-gold text-xs tracking-[0.35em] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl text-dark mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
            >
              Where Tradition
              <br />
              Meets <em className="italic text-gold">Artistry</em>
            </h2>

            <p
              className="text-dark-muted leading-relaxed mb-5 text-base"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Aabhushan was born from a simple belief — every woman deserves to feel extraordinary
              on her most precious days. Founded in 2009 by master craftsman Priya Mehta in the
              heart of Mumbai, our boutique has woven itself into the fabric of countless family celebrations.
            </p>

            <p
              className="text-dark-muted leading-relaxed mb-8 text-base"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              We work with karigars from Varanasi, Lucknow, and Jaipur — each piece bearing the
              fingerprint of human hands and the soul of Indian heritage. From intricately zardozi
              bridal lehengas to contemporary fusion wear, we create garments that become heirlooms.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-5 mb-8">
              <p
                className="text-dark italic text-lg leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                "Fashion fades, but the feeling of wearing something made with love — that stays forever."
              </p>
              <cite
                className="text-gold text-xs tracking-widest uppercase mt-2 block not-italic"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                — Priya Mehta, Founder
              </cite>
            </blockquote>

            {/* Timeline */}
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span
                    className="text-gold font-semibold text-sm w-12 shrink-0"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {m.year}
                  </span>
                  <div className="h-px flex-1 bg-gold/20" />
                  <span
                    className="text-dark-muted text-sm text-right"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {m.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
