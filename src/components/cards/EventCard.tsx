'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
}

export function EventCard({ title, description, image, date }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group border-cream-dark flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="bg-cream-dark relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="image-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        {date && (
          <div className="text-burgundy mb-2 flex items-center gap-2 text-xs font-medium">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        )}
        <h3 className="text-foreground mb-2 text-base leading-tight font-semibold sm:text-lg">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
