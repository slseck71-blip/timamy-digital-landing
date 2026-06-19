"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Hammer, Zap, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

const pillars = [
  {
    icon: Hammer,
    label: "Build",
    description: "Create rock-solid digital systems and AI-powered infrastructure.",
    color: "#7B35E8",
  },
  {
    icon: Zap,
    label: "Automate",
    description: "Connect every tool and eliminate repetitive work with smart workflows.",
    color: "#00D4FF",
  },
  {
    icon: TrendingUp,
    label: "Scale",
    description: "Grow revenue without growing headcount — leverage, not labour.",
    color: "#3B82F6",
  },
];

const includes = [
  "AI Revenue System Blueprint",
  "n8n Automation Workflows",
  "Notion Business OS Template",
  "Content Machine Framework",
  "Client Acquisition System",
  "Revenue Tracking Dashboard",
];

export function FeaturedOffer() {
  return (
    <section id="offer" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B35E8]/10 via-[#0F172A] to-[#00D4FF]/8" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-6"
            >
              ✦ Featured Offer
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight"
            >
              AI Revenue{" "}
              <GradientText>Blueprint™</GradientText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8"
            >
              A complete framework for building, automating and scaling a modern digital business using AI. The exact system TIMAMY DIGITAL uses to generate consistent revenue.
            </motion.p>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#7B35E8]/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: `${pillar.color}20`, border: `1px solid ${pillar.color}30` }}
                  >
                    <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">{pillar.label}</p>
                  <p className="text-xs text-white/45 leading-snug">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button href="#contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Right — what's included card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl border border-[#7B35E8]/25 bg-[#1E293B]/60 backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(123,53,232,0.15)]">
              {/* Glow top */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/60 to-transparent" />

              <div className="mb-6">
                <span className="text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest">What's Inside</span>
                <h3 className="text-2xl font-bold mt-2">Everything You Need to Scale</h3>
              </div>

              <div className="space-y-3">
                {includes.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40 mb-1">One-time investment</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">$297</span>
                    <span className="text-sm text-white/40 line-through">$597</span>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-xs font-bold text-[#00D4FF]">
                  50% OFF
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
