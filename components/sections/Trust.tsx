"use client";

import { motion } from "framer-motion";
import { Bot, Zap, BookOpen, Workflow, Package, TrendingUp } from "lucide-react";

const indicators = [
  { icon: Bot, label: "Intelligence Artificielle" },
  { icon: Zap, label: "Automatisation" },
  { icon: BookOpen, label: "Notion" },
  { icon: Workflow, label: "n8n" },
  { icon: Package, label: "Produits Digitaux" },
  { icon: TrendingUp, label: "Croissance Business" },
];

export function Trust() {
  return (
    <section className="relative py-16 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B35E8]/5 via-transparent to-[#00D4FF]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-white/40 uppercase tracking-widest mb-10"
        >
          Propulsé par les meilleurs outils et plateformes
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {indicators.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl border border-white/8 bg-white/[0.04] flex items-center justify-center group-hover:border-[#7B35E8]/40 group-hover:bg-[#7B35E8]/10 group-hover:shadow-[0_0_20px_rgba(123,53,232,0.2)] transition-all duration-300">
                <item.icon className="w-6 h-6 text-white/50 group-hover:text-[#9B5CF6] transition-colors" />
              </div>
              <span className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
