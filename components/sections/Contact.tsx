"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, Mail, MessageSquare, Building2, User } from "lucide-react";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Le nom est requis.";
  if (!form.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Format d'email invalide.";
  }
  if (!form.message.trim()) errors.message = "Le message est requis.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Une erreur est survenue. Réessayez.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:bg-[#7B35E8]/5 transition-all duration-200 ${
      hasError
        ? "border-red-500/60 focus:border-red-500/80"
        : "border-white/10 focus:border-[#7B35E8]/60"
    }`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-radial from-[#7B35E8]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B35E8]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Gauche — texte */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-6"
            >
              Parlons-en
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight"
            >
              Prêt à <GradientText>Construire, Automatiser</GradientText>{" "}
              et Scaler ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-10"
            >
              Réservez un appel stratégique gratuit. Nous cartographierons exactement comment construire vos systèmes, automatiser vos opérations et scaler vos revenus grâce à l'IA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@timamydigital.com" },
                { icon: MessageSquare, label: "Délai de réponse", value: "Sous 24 heures" },
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

          {/* Droite — formulaire */}
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
                  <h3 className="text-2xl font-bold text-white mb-3">Message envoyé !</h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Merci de nous avoir contactés. Nous vous répondrons sous 24 heures pour planifier votre appel stratégique.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-xl font-bold text-white mb-6">Réserver un appel stratégique</h3>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <User className="w-3.5 h-3.5" /> Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amara Diallo"
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <Mail className="w-3.5 h-3.5" /> Adresse email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="amara@exemple.com"
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <Building2 className="w-3.5 h-3.5" /> Entreprise / Nom du business
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Votre business"
                      className={inputClass()}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                      <MessageSquare className="w-3.5 h-3.5" /> Parlez-nous de votre business
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Quel est votre plus grand blocage en ce moment ? Que voulez-vous automatiser ou scaler ?"
                      rows={4}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {serverError && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-sm text-red-400">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      {serverError}
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="w-full justify-center"
                    icon={loading ? undefined : <Send className="w-4 h-4" />}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
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
