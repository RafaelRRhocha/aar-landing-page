'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

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
      className="group from-burgundy to-burgundy-dark relative h-full overflow-hidden rounded-2xl bg-linear-to-br p-5 sm:p-6"
    >
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />

      <div className="relative">
        <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-transform group-hover:scale-105 sm:h-16 sm:w-16">
          <Icon size={28} className="text-white sm:h-8 sm:w-8" />
        </div>

        {year && (
          <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
            {year}
          </span>
        )}

        <h3 className="mb-2 text-lg leading-tight font-bold text-white sm:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}
