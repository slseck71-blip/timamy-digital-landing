"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, DollarSign, Users, Brain, RefreshCw } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const benefits = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    description: "Automatisez les tâches qui dévorent vos heures les plus productives. Récupérez 20h+ par semaine.",
    color: "#7B35E8",
    stat: "20h+/semaine",
  },
  {
    icon: TrendingUp,
    title: "Boostez la productivité",
    description: "Les systèmes IA font le gros du travail. Vous vous concentrez uniquement sur les décisions à fort impact.",
    color: "#00D4FF",
    stat: "×3 de résultats",
  },
  {
    icon: DollarSign,
    title: "Générez plus de revenus",
    description: "Les produits digitaux et les tunnels automatisés créent des flux de revenus qui tournent sans vous.",
    color: "#3B82F6",
    stat: "+340% en moy.",
  },
  {
    icon: Users,
    title: "Scalez sans recruter",
    description: "Construisez des systèmes qui absorbent la croissance sans augmenter proportionnellement votre équipe.",
    color: "#9B5CF6",
    stat: "0 recrutement",
  },
  {
    icon: Brain,
    title: "Travaillez intelligemment",
    description: "Remplacez le travail manuel par l'automatisation intelligente. Laissez l'IA gérer le répétitif.",
    color: "#00D4FF",
    stat: "IA en premier",
  },
  {
    icon: RefreshCw,
    title: "Systèmes reproductibles",
    description: "Documentez et systématisez tout pour que votre business tourne de manière prévisible à n'importe quelle échelle.",
    color: "#7B35E8",
    stat: "100% reproductible",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-gradient-radial from-[#00D4FF]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-5"
          >
            Pourquoi ça marche
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            Des résultats réels,{" "}
            <GradientText variant="blue-cyan">rapidement</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-2xl mx-auto"
          >
            Chaque système que nous construisons est conçu pour des résultats mesurables et composés.
          </motion.p>
        </div>

        {/* Grille */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-white/8 bg-[#1E293B]/40 backdrop-blur-sm hover:border-white/15 hover:bg-[#1E293B]/60 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${b.color}12, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${b.color}18`, border: `1px solid ${b.color}25` }}
                  >
                    <b.icon className="w-5 h-5" style={{ color: b.color }} />
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ color: b.color, background: `${b.color}15`, border: `1px solid ${b.color}25` }}
                  >
                    {b.stat}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
