"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#offer" },
  { label: "Processus", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/8 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B35E8] to-[#00D4FF] flex items-center justify-center shadow-[0_0_20px_rgba(123,53,232,0.5)] group-hover:shadow-[0_0_30px_rgba(123,53,232,0.7)] transition-shadow">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                TIMAMY{" "}
                <span className="bg-gradient-to-r from-[#7B35E8] to-[#00D4FF] bg-clip-text text-transparent">
                  DIGITAL
                </span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button href="#contact" size="sm">
                Réserver un appel
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/8 lg:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-white/80 hover:text-white py-2 border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full justify-center">
                Réserver un appel stratégique
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
