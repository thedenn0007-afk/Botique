"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1752786768226-b624a5261654?w=600&q=80", alt: "Bridal Lehenga", category: "Bridal", tall: true },
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80", alt: "Silk Saree", category: "Sarees", tall: false },
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80", alt: "Party Wear Anarkali", category: "Party Wear", tall: false },
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", alt: "Festive Lehenga", category: "Lehenga", tall: true },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Custom Stitch Detail", category: "Custom", tall: false },
  { src: "https://images.unsplash.com/photo-1762201698238-bf412e297016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bridal Jewellery Detail", category: "Bridal", tall: false },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80", alt: "Designer Blouse", category: "Sarees", tall: false },
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Embroidery Detail", category: "Custom", tall: true },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-pad bg-[#F0EDE7]">
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
              Our Gallery
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2
            className="text-4xl md:text-5xl text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            A Glimpse of Our{" "}
            <em className="italic text-gold">Craft</em>
          </h2>
          <p
            className="text-dark-muted text-base max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Explore our curated lookbook — where every frame is a celebration of fabric, colour, and heritage.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="img-zoom relative group cursor-pointer break-inside-avoid mb-4 rounded-sm overflow-hidden shadow-luxury"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${img.tall ? "h-72 md:h-80" : "h-48 md:h-56"}`}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={22} className="text-white" />
                  <span
                    className="text-white text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {img.category}
                  </span>
                </div>
              </div>

              {/* Gold corner */}
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold/0 group-hover:border-gold/80 transition-all duration-300" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold/0 group-hover:border-gold/80 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p
            className="text-dark-muted text-sm mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Love what you see? Get in touch for lookbooks and pricing.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I'd%20love%20to%20see%20more%20of%20your%20gallery%20and%20pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block text-white px-8 py-4 text-sm tracking-widest uppercase font-medium rounded-sm shadow-gold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Request a Lookbook
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-dark/95 z-[100] flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
