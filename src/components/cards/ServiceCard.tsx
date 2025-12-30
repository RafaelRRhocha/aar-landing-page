'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group border-cream-dark h-full rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6"
    >
      <div className="bg-primary/10 group-hover:bg-primary mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
        <Icon
          size={24}
          className="text-primary transition-colors group-hover:text-white sm:h-7 sm:w-7"
        />
      </div>
      <h3 className="text-foreground mb-2 text-base leading-tight font-semibold sm:text-lg">
        {title}
      </h3>
      <p className="text-foreground/70 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
