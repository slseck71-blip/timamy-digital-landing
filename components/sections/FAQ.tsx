"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const faqs = [
  {
    q: "What exactly does TIMAMY DIGITAL do?",
    a: "TIMAMY DIGITAL helps entrepreneurs, creators, freelancers and small businesses build digital systems, automate their operations, and scale their revenue using AI. We do this through four core services: AI Agents, Automation Systems (n8n), Notion Systems, and Digital Products.",
  },
  {
    q: "Who is this for?",
    a: "Our services are designed for solopreneurs, freelancers, coaches, content creators, agency owners, and small business owners who want to work smarter — not harder. If you're spending more time on repetitive tasks than on high-value work, TIMAMY DIGITAL is built for you.",
  },
  {
    q: "How quickly can I see results?",
    a: "Most clients see measurable time savings within the first 2 weeks after their automation systems are deployed. Revenue results typically compound over 30–90 days as digital products and AI agents begin generating consistent output.",
  },
  {
    q: "Do I need to be technical to use your services?",
    a: "Absolutely not. We handle all the technical setup, configuration and integration. Our role is to build and deliver fully working systems — you just need to run your business. We also provide documentation and walkthroughs so you stay in control.",
  },
  {
    q: "What's included in the AI Revenue Blueprint™?",
    a: "The AI Revenue Blueprint™ includes a complete framework covering: AI system architecture, n8n automation workflows, a Notion Business OS template, content machine setup, client acquisition system, revenue tracking dashboard, and ongoing optimization guidance. It's everything you need to build, automate and scale.",
  },
  {
    q: "How do I get started?",
    a: "Start by booking a free Strategy Call. We'll learn about your business, identify your biggest bottlenecks, and map out a custom plan for building, automating and scaling your operations. There's no commitment required — just a conversation.",
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
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
          >
            Frequently Asked <GradientText>Questions</GradientText>
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
