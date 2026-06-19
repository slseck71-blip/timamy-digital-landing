"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, DollarSign, Users, Brain, RefreshCw } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate the tasks eating your most productive hours. Get back 20+ hours a week.",
    color: "#7B35E8",
    stat: "20+ hrs/week",
  },
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description: "AI-powered systems do the heavy lifting. You focus only on high-leverage decisions.",
    color: "#00D4FF",
    stat: "3× output",
  },
  {
    icon: DollarSign,
    title: "Generate More Revenue",
    description: "Digital products and automated funnels create income streams that run without you.",
    color: "#3B82F6",
    stat: "+340% avg",
  },
  {
    icon: Users,
    title: "Scale Without Hiring",
    description: "Build systems that handle growth without proportionally increasing your team size.",
    color: "#9B5CF6",
    stat: "0 extra hires",
  },
  {
    icon: Brain,
    title: "Work Smarter",
    description: "Replace manual work with intelligent automation. Let AI handle the repetitive stuff.",
    color: "#00D4FF",
    stat: "AI-first ops",
  },
  {
    icon: RefreshCw,
    title: "Build Repeatable Systems",
    description: "Document and systematize everything so your business runs predictably at any scale.",
    color: "#7B35E8",
    stat: "100% repeatable",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-gradient-radial from-[#00D4FF]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-xs font-semibold text-[#3B82F6] uppercase tracking-widest mb-5"
          >
            Why It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            Real Results,{" "}
            <GradientText variant="blue-cyan">Real Fast</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-2xl mx-auto"
          >
            Every system we build is engineered for measurable, compounding outcomes.
          </motion.p>
        </div>

        {/* Grid */}
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
              {/* Hover glow */}
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
