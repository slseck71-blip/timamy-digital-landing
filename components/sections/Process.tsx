"use client";

import { motion } from "framer-motion";
import { Hammer, Zap, TrendingUp } from "lucide-react";
import { GradientText } from "../ui/GradientText";

const steps = [
  {
    number: "01",
    icon: Hammer,
    label: "Build",
    title: "Build Your Foundation",
    description:
      "We start by designing your digital infrastructure — AI systems, Notion workspace, and automation architecture custom-built for your business model.",
    color: "#7B35E8",
    items: ["AI Strategy Session", "Systems Architecture", "Notion OS Setup", "Tool Stack Selection"],
  },
  {
    number: "02",
    icon: Zap,
    label: "Automate",
    title: "Automate Everything",
    description:
      "Next we wire up your workflows — n8n automations, AI agents and integrations that eliminate manual tasks and create seamless operations.",
    color: "#00D4FF",
    items: ["n8n Workflow Build", "AI Agent Deployment", "Tool Integration", "Testing & QA"],
  },
  {
    number: "03",
    icon: TrendingUp,
    label: "Scale",
    title: "Scale Your Revenue",
    description:
      "Finally we launch your growth engine — digital products, automated funnels and revenue systems that compound month after month.",
    color: "#3B82F6",
    items: ["Digital Product Launch", "Revenue Automation", "Analytics Setup", "Ongoing Optimization"],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[700px] rounded-full bg-gradient-radial from-[#7B35E8]/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            The Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            How It <GradientText>Works</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-xl mx-auto"
          >
            A proven 3-step framework that takes you from chaos to clarity to consistent growth.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#7B35E8] via-[#00D4FF] to-[#3B82F6] opacity-30" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Step icon */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}25`,
                    }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ border: `1px solid ${step.color}` }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Step {step.number}</span>
                    <h3 className="font-extrabold text-xl text-white">{step.label}</h3>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}08, rgba(30,41,59,0.5))`,
                    borderColor: `${step.color}20`,
                  }}
                >
                  <h4 className="font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">{step.description}</p>

                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
