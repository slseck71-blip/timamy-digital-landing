"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(123,53,232,0.2)] border border-white/8">
          <Image
            src="/banniere-timamy-digital.png"
            alt="TIMAMY DIGITAL — Build • Automate • Scale"
            width={1500}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
