"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MessageSquare, Building2, User } from "lucide-react";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7B35E8]/60 focus:bg-[#7B35E8]/5 transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-radial from-[#7B35E8]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-6"
            >
              Let's Talk
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight"
            >
              Ready to <GradientText>Build, Automate</GradientText>{" "}
              and Scale?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-10"
            >
              Book a free Strategy Call. We'll map out exactly how to build your systems, automate your operations, and scale your revenue with AI.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@timamydigital.com" },
                { icon: MessageSquare, label: "Response Time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7B35E8]/15 border border-[#7B35E8]/25 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#9B5CF6]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">{item.label}</p>
                    <p className="text-sm font-medium text-white/80">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl border border-white/8 bg-[#1E293B]/60 backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(123,53,232,0.1)]">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/50 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                    <CheckCircle className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Thanks for reaching out. We'll be in touch within 24 hours to schedule your Strategy Call.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-6">Book a Strategy Call</h3>

                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <User className="w-3.5 h-3.5" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amara Diallo"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <Mail className="w-3.5 h-3.5" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="amara@example.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <Building2 className="w-3.5 h-3.5" /> Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Business"
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <MessageSquare className="w-3.5 h-3.5" /> Tell Us About Your Business
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's your biggest bottleneck right now? What do you want to automate or scale?"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full justify-center"
                    icon={loading ? undefined : <Send className="w-4 h-4" />}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
