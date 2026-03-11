"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Lehengas & Shararas",
    subtitle: "Bridal Collection",
    description: "Exquisitely crafted bridal wear adorned with hand embroidery, zardozi work, and heritage motifs.",
    img: "https://images.unsplash.com/photo-1752786768226-b624a5261654?w=600&q=80",
    tag: "Bestseller",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Designer Sarees",
    subtitle: "Silk, Chiffon & Net",
    description: "From Banarasi silk to contemporary georgette — a saree for every ceremony.",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    tag: "New Arrivals",
    span: "",
  },
  {
    title: "Lehengas",
    subtitle: "Festive & Party",
    description: "Flared skirts, choli blouses and dupattas in vibrant hues and luxe fabrics.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    tag: "Trending",
    span: "",
  },
  {
    title: "Party Wear",
    subtitle: "Anarkalis & Suits",
    description: "Contemporary ethnic silhouettes perfect for cocktail dinners and evening soirees.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    tag: "",
    span: "",
  },
  {
    title: "Custom Stitching",
    subtitle: "Made-to-Measure",
    description: "Your fabric, your vision — stitched by master tailors with decades of expertise.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Popular",
    span: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Collections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="collections" className="section-pad bg-cream">
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
              Our Collections
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2
            className="text-4xl md:text-5xl text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            Dressed for Every{" "}
            <em className="italic text-gold">Chapter</em>
          </h2>
          <p
            className="text-dark-muted text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Each piece in our collection tells a story — of tradition, artisanship, and timeless beauty.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className={`relative img-zoom rounded-sm overflow-hidden group cursor-pointer shadow-luxury ${col.span}`}
            >
              {/* Image */}
              <div
                className="img-inner absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${col.img}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

              {/* Tag */}
              {col.tag && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="bg-gold text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {col.tag}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p
                  className="text-gold text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {col.subtitle}
                </p>
                <h3
                  className="text-white text-xl md:text-2xl mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {col.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 transition-all duration-500 rounded-sm pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20all%20your%20collections"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View All Collections
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
