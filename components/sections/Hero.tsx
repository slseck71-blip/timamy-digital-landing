"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Zap, Bot, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

const floatingStats = [
  { icon: TrendingUp, label: "Croissance CA", value: "+340%", color: "#7B35E8" },
  { icon: Users, label: "Clients accompagnés", value: "500+", color: "#00D4FF" },
  { icon: Zap, label: "Heures économisées/mois", value: "1 200+", color: "#3B82F6" },
];

const dashboardItems = [
  { label: "Agents IA actifs", value: "12", status: "running", icon: Bot },
  { label: "Workflows automatisés", value: "48", status: "live", icon: Zap },
  { label: "Revenus ce mois", value: "24 800 €", status: "up", icon: BarChart3 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Fond animé */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-radial from-[#7B35E8]/20 via-[#7B35E8]/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#00D4FF]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#3B82F6]/10 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Gauche — texte */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-sm font-medium text-[#9B5CF6] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              Systèmes d'entreprise propulsés par l'IA
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              Construis des systèmes.{" "}
              <br />
              <GradientText>Automatise tout.</GradientText>
              <br />
              Scale tes revenus.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-xl"
            >
              TIMAMY DIGITAL aide les entrepreneurs et créateurs à exploiter l'IA, l'automatisation et les systèmes digitaux pour{" "}
              <span className="text-white/90 font-semibold">croître plus vite</span> et{" "}
              <span className="text-white/90 font-semibold">travailler plus intelligemment</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button href="#contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Réserver un appel stratégique
              </Button>
              <Button href="#services" size="lg" variant="secondary" icon={<Play className="w-4 h-4" />}>
                Découvrir nos solutions
              </Button>
            </motion.div>

            {/* Preuve sociale */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0F172A] flex items-center justify-center text-xs font-bold"
                    style={{
                      background: `linear-gradient(135deg, hsl(${i * 60 + 240}, 70%, 55%), hsl(${i * 60 + 280}, 70%, 65%))`,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#00D4FF] text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-white/50">Faisant confiance à 500+ entrepreneurs</p>
              </div>
            </motion.div>
          </div>

          {/* Droite — dashboard flottant */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-[#7B35E8]/20 bg-[#1E293B]/80 backdrop-blur-xl p-6 shadow-[0_0_80px_rgba(123,53,232,0.2)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-white/40 mb-1">Tableau de bord IA</p>
                    <h3 className="font-bold text-white">Centre de commande</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                    <span className="text-xs text-[#00D4FF]">En direct</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {dashboardItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B35E8]/30 to-[#3B82F6]/30 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-[#9B5CF6]" />
                        </div>
                        <span className="text-sm text-white/70">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item.value}</span>
                        <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini graphique */}
                <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-end gap-1 h-16">
                    {[30, 50, 40, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                        className="flex-1 rounded-t"
                        style={{
                          background: `linear-gradient(to top, #7B35E8, #00D4FF)`,
                          opacity: 0.4 + (i / 10) * 0.6,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/40 mt-2 text-center">Croissance des revenus — 10 derniers mois</p>
                </div>
              </motion.div>

              {/* Statistiques flottantes */}
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  style={{
                    position: "absolute",
                    top: i === 0 ? "-24px" : i === 1 ? "40%" : "auto",
                    bottom: i === 2 ? "-24px" : "auto",
                    left: i === 1 ? "-40px" : "auto",
                    right: i === 0 ? "20px" : i === 2 ? "10px" : "auto",
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#1E293B]/90 backdrop-blur-xl shadow-xl"
                >
                  <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                  <span className="text-xs font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
