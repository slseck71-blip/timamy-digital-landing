"use client";

import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

const links = {
  Services: [
    { label: "Agents IA", href: "#services" },
    { label: "Automatisation", href: "#services" },
    { label: "Systèmes Notion", href: "#services" },
    { label: "Produits Digitaux", href: "#services" },
  ],
  Solutions: [
    { label: "Blueprint Revenus IA", href: "#offer" },
    { label: "Appel Stratégique", href: "#contact" },
    { label: "Comment ça marche", href: "#process" },
    { label: "Témoignages", href: "#testimonials" },
  ],
  Contact: [
    { label: "Réserver un appel", href: "#contact" },
    { label: "Envoyer un message", href: "#contact" },
    { label: "contacts@timamydigital.com", href: "mailto:contacts@timamydigital.com" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-radial from-[#7B35E8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bannière CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-[#7B35E8]/25 bg-gradient-to-br from-[#7B35E8]/15 via-[#1E293B]/60 to-[#3B82F6]/10 p-8 lg:p-12 mb-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle at 50% 0%, rgba(123,53,232,0.15), transparent 70%)" }} />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-[#7B35E8] to-[#00D4FF] bg-clip-text text-transparent">
                Construire, Automatiser & Scaler ?
              </span>
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Rejoignez 500+ entrepreneurs qui exploitent l'IA et l'automatisation pour développer leur business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7B35E8] to-[#3B82F6] text-white font-bold text-lg shadow-[0_0_40px_rgba(123,53,232,0.4)] hover:shadow-[0_0_60px_rgba(123,53,232,0.6)] hover:scale-[1.02] transition-all duration-200"
            >
              Réserver un appel stratégique gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Grille de liens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Marque */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B35E8] to-[#00D4FF] flex items-center justify-center shadow-[0_0_20px_rgba(123,53,232,0.4)]">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold text-base">
                TIMAMY{" "}
                <span className="bg-gradient-to-r from-[#7B35E8] to-[#00D4FF] bg-clip-text text-transparent">
                  DIGITAL
                </span>
              </span>
            </a>
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Construire • Automatiser • Scaler
              <br />
              Aider les entrepreneurs à exploiter l'IA pour grandir plus vite.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-[#7B35E8]/40 hover:bg-[#7B35E8]/10 transition-all duration-200"
                >
                  <s.icon className="w-3.5 h-3.5 text-white/50 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes de liens */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} TIMAMY DIGITAL. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Politique de confidentialité", "Conditions d'utilisation"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
