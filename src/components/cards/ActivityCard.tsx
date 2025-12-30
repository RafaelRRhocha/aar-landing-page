"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export function ActivityCard({
  icon: Icon,
  title,
  description,
  image,
}: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-dark h-full"
    >
      <div className="relative h-48 bg-linear-to-br from-burgundy to-primary overflow-hidden">
        {image ? (
          <div className="relative w-full h-full">
            <div 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <Icon size={40} className="text-white/80" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={20} className="text-primary" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{title}</h3>
        </div>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

