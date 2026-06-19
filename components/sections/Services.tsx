"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BookOpen, Package, ArrowRight } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { GradientText } from "../ui/GradientText";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Custom AI assistants that automate customer support, content creation and business operations — working 24/7 so you don't have to.",
    tags: ["GPT-4", "Claude", "Automation"],
    color: "#7B35E8",
    glow: "purple" as const,
    gradient: "from-[#7B35E8]/20 to-[#3B82F6]/5",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description:
      "n8n workflows and business automations that eliminate repetitive tasks and connect all your tools seamlessly.",
    tags: ["n8n", "Zapier", "Make"],
    color: "#00D4FF",
    glow: "cyan" as const,
    gradient: "from-[#00D4FF]/15 to-[#3B82F6]/5",
  },
  {
    icon: BookOpen,
    title: "Notion Systems",
    description:
      "Professional workspaces, dashboards, CRMs and operating systems built in Notion — your business brain in one place.",
    tags: ["Notion", "CRM", "Dashboards"],
    color: "#3B82F6",
    glow: "blue" as const,
    gradient: "from-[#3B82F6]/20 to-[#7B35E8]/5",
  },
  {
    icon: Package,
    title: "Digital Products",
    description:
      "Templates, ebooks, courses and digital assets designed for growth — scalable revenue without extra hours.",
    tags: ["Templates", "Courses", "Ebooks"],
    color: "#9B5CF6",
    glow: "purple" as const,
    gradient: "from-[#9B5CF6]/15 to-[#00D4FF]/5",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-radial from-[#7B35E8]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            What We Build
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            Solutions That <GradientText>Actually Scale</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-2xl mx-auto"
          >
            Every service is designed to create compounding leverage — saving time, generating revenue and building systems that scale without you.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <GlowCard key={service.title} delay={i * 0.1} glowColor={service.glow} className="group flex flex-col">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">{service.description}</p>

              {/* Tags */}
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

              {/* Link */}
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm font-semibold mt-auto group/link"
                style={{ color: service.color }}
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
