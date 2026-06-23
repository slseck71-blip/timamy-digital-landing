"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { GradientText } from "../ui/GradientText";
import { products } from "@/data/products";

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-radial from-[#7B35E8]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B35E8]/30 bg-[#7B35E8]/10 text-xs font-semibold text-[#9B5CF6] uppercase tracking-widest mb-5"
          >
            Nos produits digitaux
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
          >
            Des outils qui <GradientText>génèrent vraiment</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/55 max-w-2xl mx-auto"
          >
            Des ressources concrètes pour tracker tes ventes, lancer tes premiers revenus IA et piloter tout ton business depuis un seul endroit.
          </motion.p>
        </div>

        {/* Grille produits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-3xl border bg-[#1E293B]/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-lg group ${
                product.featured
                  ? "border-[#00D4FF]/40 shadow-[0_0_60px_rgba(0,212,255,0.1)] lg:scale-[1.03]"
                  : "border-white/8 hover:border-white/18"
              }`}
            >
              {/* Ligne de brillance en haut */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${product.color}60, transparent)`,
                }}
              />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      color: product.color,
                      background: `${product.color}18`,
                      border: `1px solid ${product.color}35`,
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Contenu */}
              <div className="p-7 flex flex-col flex-1">
                {/* Emoji + titre */}
                <div className="mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}25, ${product.color}08)`,
                      border: `1px solid ${product.color}30`,
                    }}
                  >
                    {product.emoji}
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: product.accentColor }}>
                    {product.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                  {product.description}
                </p>

                {/* Prix */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-extrabold text-white">
                    {product.priceLabel}
                  </span>
                  {product.originalPriceLabel && (
                    <span className="text-sm text-white/35 line-through">
                      {product.originalPriceLabel}
                    </span>
                  )}
                  {product.originalPriceLabel && (
                    <span
                      className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        color: product.color,
                        background: `${product.color}18`,
                        border: `1px solid ${product.color}30`,
                      }}
                    >
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Bouton CTA */}
                <a
                  href={product.chariowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={
                    product.featured
                      ? {
                          background: `linear-gradient(135deg, ${product.color}, #3B82F6)`,
                          color: "#fff",
                          boxShadow: `0 0 30px ${product.color}40`,
                        }
                      : {
                          background: `${product.color}15`,
                          color: product.accentColor,
                          border: `1px solid ${product.color}35`,
                        }
                  }
                >
                  <ShoppingCart className="w-4 h-4" />
                  Je commande
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
