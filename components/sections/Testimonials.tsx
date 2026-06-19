"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const testimonials = [
  {
    name: "Amara Diallo",
    role: "Fondatrice e-commerce",
    company: "ShopLify Africa",
    avatar: "AD",
    color: "#7B35E8",
    rating: 5,
    text: "TIMAMY DIGITAL a complètement transformé ma façon de gérer mon business. Les agents IA s'occupent de mon support client 24h/24 et les workflows n8n ont automatisé tout mon processus de commande. Je suis passée de 70 à 30 heures de travail par semaine — avec des revenus en hausse de 280%.",
  },
  {
    name: "Kwame Asante",
    role: "Coach Business",
    company: "Growth Mindset Academy",
    avatar: "KA",
    color: "#00D4FF",
    rating: 5,
    text: "Le Notion OS qu'ils ont créé pour mon activité de coaching est incroyable. Onboarding clients, suivi des sessions, facturation — tout est automatisé. J'ai lancé deux nouveaux produits digitaux en 3 mois grâce à leur blueprint et j'ai récupéré mon investissement 10 fois.",
  },
  {
    name: "Fatima Baldé",
    role: "Créatrice de contenu & Freelance",
    company: "Creative Hub Studio",
    avatar: "FB",
    color: "#3B82F6",
    rating: 5,
    text: "Je me noyais dans l'administratif avant TIMAMY DIGITAL. Maintenant mon pipeline de création de contenu est automatisé, les devis partent automatiquement et j'ai une boutique de produits digitaux qui génère des revenus passifs. Un vrai game changer.",
  },
  {
    name: "Oumar Sow",
    role: "Entrepreneur SaaS",
    company: "DataFlow Solutions",
    avatar: "OS",
    color: "#9B5CF6",
    rating: 5,
    text: "Le Blueprint Revenus IA m'a donné le cadre exact dont j'avais besoin. En 60 jours d'implémentation, mon MRR a doublé. La combinaison agents IA, automations n8n et produits digitaux a créé un moteur de revenus que je n'aurais jamais cru possible.",
  },
  {
    name: "Mariama Camara",
    role: "Dirigeante agence marketing digital",
    company: "Spark Digital Agency",
    avatar: "MC",
    color: "#00D4FF",
    rating: 5,
    text: "Nous avons utilisé TIMAMY DIGITAL pour construire des systèmes d'automatisation pour l'onboarding client, le reporting et la livraison. Ce qui prenait 15 heures à mon équipe se fait maintenant automatiquement. On est passé de 8 à 25 clients sans recruter une seule personne.",
  },
  {
    name: "Ibrahim Traoré",
    role: "Formateur en ligne",
    company: "TechLearn Africa",
    avatar: "IT",
    color: "#7B35E8",
    rating: 5,
    text: "Les systèmes Notion et l'infrastructure de produits digitaux que TIMAMY DIGITAL a construits pour ma plateforme e-learning sont de niveau mondial. Mes lancements de formations sont entièrement automatisés, les apprenants bénéficient d'un meilleur support via l'IA, et je génère des revenus en dormant.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B35E8]/4 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Témoignages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
          >
            Des résultats qui <GradientText>parlent d'eux-mêmes</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-xl mx-auto"
          >
            Des entrepreneurs et créateurs qui ont fait confiance aux systèmes. Voici ce qui s'est passé.
          </motion.p>
        </div>

        {/* Grille */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-white/8 bg-[#1E293B]/50 backdrop-blur-sm hover:border-white/15 transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: t.color }} />

              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: t.color }} className="text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6 italic">« {t.text} »</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
