"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(34,34,34,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("Home", "#home")}
            className="flex flex-col items-start leading-none group"
          >
            <span
              className="text-xl font-playfair font-semibold tracking-widest text-dark group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              AABHUSHAN
            </span>
            <span
              className="text-[10px] tracking-[0.35em] text-gold uppercase font-inter font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Boutique
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`nav-link text-sm tracking-widest uppercase font-inter font-medium transition-colors duration-300 ${
                  active === link.label ? "text-gold" : "text-dark hover:text-gold"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20your%20collections"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-gold text-white text-xs tracking-widest uppercase font-medium px-6 py-3 rounded-sm shadow-gold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Consultation
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-dark hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-cream/98 backdrop-blur-md shadow-luxury border-t border-gold/20 md:hidden"
          >
            <nav className="flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.label, link.href)}
                  className="text-left text-base font-playfair text-dark hover:text-gold transition-colors duration-200 border-b border-cream-dark pb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center text-white text-xs tracking-widest uppercase font-medium px-6 py-4 rounded-sm mt-2"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
