"use client";

import { Instagram, Youtube, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const collections = [
  "Bridal Lehengas",
  "Designer Sarees",
  "Party Wear",
  "Custom Stitching",
  "Embroidery Work",
  "Trousseau Sets",
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/aabhushan_boutique",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/aabhushan",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@aabhushan",
    label: "YouTube",
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Top gold border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-2xl font-playfair font-semibold tracking-widest text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AABHUSHAN
              </div>
              <div
                className="text-[10px] tracking-[0.4em] text-gold uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Boutique
              </div>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Weaving heritage and artistry into every thread since 2009. Mumbai's favourite destination for bridal and ethnic wear.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/15 hover:border-gold rounded-sm flex items-center justify-center transition-all duration-300 group"
                >
                  <s.icon
                    size={15}
                    className="text-white/40 group-hover:text-gold transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Collections
            </h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <span
                    className="text-white/40 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Stay Updated
            </h4>
            <p
              className="text-white/40 text-sm mb-5 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Get exclusive invites to trunk shows, new collections, and styling tips.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/15 focus:border-gold/60 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none rounded-l-sm transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button className="btn-gold px-4 py-3 text-white text-xs tracking-widest uppercase rounded-r-sm shrink-0">
                Join
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p
                className="text-white/30 text-xs mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                12, Kala Ghoda, Fort
              </p>
              <p
                className="text-white/30 text-xs mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Mumbai, Maharashtra 400001
              </p>
              <a
                href="tel:+919876543210"
                className="text-gold/60 hover:text-gold text-xs transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Aabhushan Boutique. All rights reserved.
          </p>

          {/* Gold decorative */}
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-gold/30" />
            <span className="text-gold/40 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Crafted with Love · Mumbai
            </span>
            <div className="h-px w-6 bg-gold/30" />
          </div>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((t) => (
              <span
                key={t}
                className="text-white/25 text-xs cursor-pointer hover:text-white/50 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
