"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram as InstagramIcon, Heart, MessageCircle } from "lucide-react";

const instaPosts = [
  {
    img: "https://images.unsplash.com/photo-1752786768226-b624a5261654?w=400&q=80",
    likes: "1.2k",
    comments: "43",
    caption: "Bridal Jewellery 💎",
  },
  {
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    likes: "987",
    comments: "31",
    caption: "Silk dreams 🌸",
  },
  {
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    likes: "2.1k",
    comments: "67",
    caption: "Festive vibes 🪔",
  },
  {
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    likes: "756",
    comments: "28",
    caption: "Party ready 💫",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    likes: "1.5k",
    comments: "52",
    caption: "Custom craft 🧵",
  },
  {
    img: "https://images.unsplash.com/photo-1762201698238-bf412e297016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: "3.2k",
    comments: "89",
    caption: "Bridal glam 👑",
  },
];

export default function Instagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <a
            href="https://instagram.com/aabhushan_boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group mb-4"
          >
            <InstagramIcon
              size={22}
              className="text-gold group-hover:scale-110 transition-transform duration-300"
            />
            <span
              className="text-gold text-xs tracking-[0.35em] uppercase font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              @aabhushan_boutique
            </span>
          </a>
          <h2
            className="text-4xl md:text-5xl text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
          >
            Follow Our{" "}
            <em className="italic text-gold">Journey</em>
          </h2>
          <p
            className="text-dark-muted text-base max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Behind-the-scenes moments, new arrivals, and real brides — all on Instagram.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instaPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/aabhushan_boutique"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="img-zoom relative group aspect-square overflow-hidden rounded-sm shadow-luxury block"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-400 flex flex-col items-center justify-center gap-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white">
                    <Heart size={14} fill="white" />
                    <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {post.likes}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <MessageCircle size={14} fill="white" />
                    <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {post.comments}
                    </span>
                  </div>
                </div>
                <p
                  className="text-white/80 text-[10px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.caption}
                </p>
              </div>

              {/* Instagram icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <InstagramIcon size={14} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/aabhushan_boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-dark/20 hover:border-gold text-dark hover:text-gold px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 rounded-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <InstagramIcon size={16} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
