"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const testimonials = [
  {
    name: "Amara Diallo",
    role: "E-commerce Founder",
    company: "ShopLify Africa",
    avatar: "AD",
    color: "#7B35E8",
    rating: 5,
    text: "TIMAMY DIGITAL completely transformed how I run my business. The AI agents handle my customer support 24/7, and the n8n workflows automated my entire order process. I went from working 70-hour weeks to 30 — while my revenue grew by 280%.",
  },
  {
    name: "Kwame Asante",
    role: "Business Coach",
    company: "Growth Mindset Academy",
    avatar: "KA",
    color: "#00D4FF",
    rating: 5,
    text: "The Notion OS they built for my coaching business is unreal. Client onboarding, session tracking, invoicing — all automated. I launched two new digital products in 3 months using their blueprint and made back my investment 10× over.",
  },
  {
    name: "Fatima Balde",
    role: "Content Creator & Freelancer",
    company: "Creative Hub Studio",
    avatar: "FB",
    color: "#3B82F6",
    rating: 5,
    text: "I was drowning in admin before TIMAMY DIGITAL stepped in. Now my content creation pipeline is automated, proposals go out automatically, and I have a full digital product store generating passive income. Game changer.",
  },
  {
    name: "Oumar Sow",
    role: "SaaS Entrepreneur",
    company: "DataFlow Solutions",
    avatar: "OS",
    color: "#9B5CF6",
    rating: 5,
    text: "The AI Revenue Blueprint gave me the exact framework I needed. Within 60 days of implementation, my MRR doubled. The combination of AI agents, n8n automations and digital products created a revenue engine I never thought possible.",
  },
  {
    name: "Mariama Camara",
    role: "Digital Marketing Agency Owner",
    company: "Spark Digital Agency",
    avatar: "MC",
    color: "#00D4FF",
    rating: 5,
    text: "We used TIMAMY DIGITAL to build automation systems for client onboarding, reporting and delivery. What used to take my team 15 hours now runs automatically. We scaled from 8 to 25 clients without hiring a single new person.",
  },
  {
    name: "Ibrahim Traoré",
    role: "Online Educator",
    company: "TechLearn Africa",
    avatar: "IT",
    color: "#7B35E8",
    rating: 5,
    text: "The Notion systems and digital product infrastructure TIMAMY DIGITAL built for my e-learning platform are world-class. My course launches are now fully automated, students get better support via AI, and I'm earning while I sleep.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B35E8]/4 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5"
          >
            Results That <GradientText>Speak for Themselves</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-xl mx-auto"
          >
            Entrepreneurs and creators who trusted the systems. Here's what happened.
          </motion.p>
        </div>

        {/* Grid */}
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
              {/* Quote icon */}
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: t.color }} className="text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6 italic">"{t.text}"</p>

              {/* Author */}
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
