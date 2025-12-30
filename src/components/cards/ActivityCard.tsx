'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

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
      className="group border-cream-dark h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="from-burgundy to-primary relative h-48 overflow-hidden bg-linear-to-br">
        {image ? (
          <div className="relative h-full w-full">
            <div
              className="h-full w-full bg-cover bg-center object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <Icon size={40} className="text-white/80" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
            <Icon size={20} className="text-primary" />
          </div>
          <h3 className="text-foreground text-base leading-tight font-semibold sm:text-lg">
            {title}
          </h3>
        </div>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
