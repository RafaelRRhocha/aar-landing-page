"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-dark h-full"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300 shrink-0">
        <Icon
          size={24}
          className="text-primary group-hover:text-white transition-colors sm:w-7 sm:h-7"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

