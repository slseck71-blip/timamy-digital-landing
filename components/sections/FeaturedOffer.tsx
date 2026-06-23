"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, LayoutDashboard, Sparkles, Newspaper, TrendingUp, Package, Users, Zap, BriefcaseBusiness } from "lucide-react";
import { GradientText } from "../ui/GradientText";
import { blueprintOsModules } from "@/data/products";

const moduleIcons = [
  LayoutDashboard,
  Sparkles,
  Newspaper,
  TrendingUp,
  Package,
  Users,
  Zap,
  BriefcaseBusiness,
];

const CHARIOW_URL = "https://timamydigital.com/timamy/prd_s62jbi31";

export function FeaturedOffer() {
  return (
    <section id="offer" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/8 via-[#0F172A] to-[#7B35E8]/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Gauche — pitch */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-6"
            >
              ⭐ Offre phare
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 leading-tight"
            >
              AI Revenue Blueprint{" "}
              <GradientText variant="blue-cyan">OS</GradientText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sm font-semibold text-[#00D4FF] uppercase tracking-widest mb-5"
            >
              Système Notion tout-en-un pour entrepreneurs digitaux
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-10"
            >
              Pilote tout ton business IA depuis un seul espace Notion — objectifs, contenu, revenus, produits, prospects et automatisations. 8 modules interconnectés, exemples pré-remplis, guide de démarrage et roadmap 90 jours inclus.
            </motion.p>

            {/* Prix + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              <div>
                <p className="text-xs text-white/40 mb-1">Accès à vie · Paiement unique</p>
                <span className="text-4xl font-extrabold text-white">15 000 FCFA</span>
              </div>

              <a
                href={CHARIOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(0,212,255,0.4)]"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #3B82F6)",
                  boxShadow: "0 0 35px rgba(0,212,255,0.3)",
                }}
              >
                Je commande
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Droite — carte modules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl border border-[#00D4FF]/25 bg-[#1E293B]/60 backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(0,212,255,0.12)]">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" />

              <div className="mb-6">
                <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-widest">
                  🧠 Ce qui est inclus
                </span>
                <h3 className="text-xl font-bold text-white mt-2">8 modules interconnectés</h3>
              </div>

              <div className="space-y-3">
                {blueprintOsModules.map((module, i) => {
                  const Icon = moduleIcons[i];
                  const [moduleName, ...rest] = module.split(" — ");
                  return (
                    <motion.div
                      key={module}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/12 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#00D4FF]/20 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#00D4FF]" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white">{moduleName}</span>
                        {rest.length > 0 && (
                          <span className="text-xs text-white/45 block leading-snug">{rest.join(" — ")}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-7 pt-5 border-t border-white/8">
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
                  Exemples pré-remplis · Guide de démarrage · Roadmap 90 jours
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
