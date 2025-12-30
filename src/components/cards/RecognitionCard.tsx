"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface RecognitionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  year?: string;
}

export function RecognitionCard({
  icon: Icon,
  title,
  description,
  year,
}: RecognitionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-linear-to-br from-burgundy to-burgundy-dark rounded-2xl p-5 sm:p-6 overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shrink-0">
          <Icon size={28} className="text-white sm:w-8 sm:h-8" />
        </div>

        {year && (
          <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
            {year}
          </span>
        )}

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

