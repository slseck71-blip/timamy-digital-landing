"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const faqs = [
  {
    q: "Qu'est-ce que TIMAMY DIGITAL fait exactement ?",
    a: "TIMAMY DIGITAL aide les entrepreneurs, créateurs, freelances et petites entreprises à construire des systèmes digitaux, automatiser leurs opérations et scaler leurs revenus grâce à l'IA. Nous le faisons à travers quatre services principaux : Agents IA, Systèmes d'automatisation (n8n), Systèmes Notion, et Produits Digitaux.",
  },
  {
    q: "Pour qui est-ce fait ?",
    a: "Nos services sont conçus pour les solopreneurs, freelances, coachs, créateurs de contenu, agences et petits business qui veulent travailler plus intelligemment — pas plus dur. Si vous passez plus de temps sur des tâches répétitives que sur du travail à haute valeur ajoutée, TIMAMY DIGITAL est fait pour vous.",
  },
  {
    q: "À quelle vitesse puis-je voir des résultats ?",
    a: "La plupart des clients constatent des économies de temps mesurables dans les 2 premières semaines après le déploiement de leurs systèmes d'automatisation. Les résultats en termes de revenus se cumulent généralement sur 30 à 90 jours à mesure que les produits digitaux et les agents IA génèrent une production constante.",
  },
  {
    q: "Dois-je être technique pour utiliser vos services ?",
    a: "Absolument pas. Nous gérons toute la configuration technique, la configuration et l'intégration. Notre rôle est de construire et livrer des systèmes entièrement fonctionnels — vous n'avez qu'à gérer votre business. Nous fournissons également la documentation et des tutoriels pour que vous restiez en contrôle.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le Blueprint Revenus IA™ ?",
    a: "Le Blueprint Revenus IA™ comprend un cadre complet couvrant : l'architecture des systèmes IA, les workflows d'automatisation n8n, un template Notion Business OS, la mise en place d'une machine à contenu, un système d'acquisition clients, un tableau de bord de suivi des revenus, et des conseils d'optimisation continus. Tout ce dont vous avez besoin pour construire, automatiser et scaler.",
  },
  {
    q: "Comment démarrer ?",
    a: "Commencez par réserver un appel stratégique gratuit. Nous apprendrons à connaître votre business, identifierons vos plus grands blocages et élaborerons un plan personnalisé pour construire, automatiser et scaler vos opérations. Aucun engagement requis — juste une conversation.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-white/8 rounded-2xl overflow-hidden hover:border-[#7B35E8]/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-white/90 group-hover:text-white transition-colors pr-4 text-sm sm:text-base">
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#7B35E8] shadow-[0_0_16px_rgba(123,53,232,0.5)]"
              : "bg-white/8 group-hover:bg-white/12"
          }`}
        >
          {open ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white/70" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#7B35E8]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Vous avez des questions ?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
          >
            Questions <GradientText>fréquentes</GradientText>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
