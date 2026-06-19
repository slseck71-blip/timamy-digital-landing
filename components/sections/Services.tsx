"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BookOpen, Package, ArrowRight } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { GradientText } from "../ui/GradientText";

const services = [
  {
    icon: Bot,
    title: "Agents IA",
    description:
      "Des assistants IA sur mesure qui automatisent le support client, la création de contenu et vos opérations business — 24h/24, 7j/7.",
    tags: ["GPT-4", "Claude", "Automatisation"],
    color: "#7B35E8",
    glow: "purple" as const,
    gradient: "from-[#7B35E8]/20 to-[#3B82F6]/5",
  },
  {
    icon: Workflow,
    title: "Systèmes d'automatisation",
    description:
      "Des workflows n8n et des automatisations business qui éliminent les tâches répétitives et connectent tous vos outils en toute fluidité.",
    tags: ["n8n", "Zapier", "Make"],
    color: "#00D4FF",
    glow: "cyan" as const,
    gradient: "from-[#00D4FF]/15 to-[#3B82F6]/5",
  },
  {
    icon: BookOpen,
    title: "Systèmes Notion",
    description:
      "Des espaces de travail professionnels, tableaux de bord, CRM et systèmes d'exploitation construits dans Notion — le cerveau de votre business en un seul endroit.",
    tags: ["Notion", "CRM", "Tableaux de bord"],
    color: "#3B82F6",
    glow: "blue" as const,
    gradient: "from-[#3B82F6]/20 to-[#7B35E8]/5",
  },
  {
    icon: Package,
    title: "Produits Digitaux",
    description:
      "Templates, ebooks, formations et ressources digitales conçus pour la croissance — des revenus scalables sans heures supplémentaires.",
    tags: ["Templates", "Formations", "Ebooks"],
    color: "#9B5CF6",
    glow: "purple" as const,
    gradient: "from-[#9B5CF6]/15 to-[#00D4FF]/5",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-radial from-[#7B35E8]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Ce que nous construisons
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            Des solutions qui <GradientText>scalent vraiment</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-2xl mx-auto"
          >
            Chaque service est conçu pour créer un effet de levier composé — économiser du temps, générer des revenus et construire des systèmes qui scalent sans vous.
          </motion.p>
        </div>

        {/* Cartes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <GlowCard key={service.title} delay={i * 0.1} glowColor={service.glow} className="group flex flex-col">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>

              <h3 className="font-bold text-lg text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/10 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm font-semibold mt-auto group/link"
                style={{ color: service.color }}
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
