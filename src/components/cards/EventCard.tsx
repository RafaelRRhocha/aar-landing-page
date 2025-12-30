"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

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
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-dark h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden bg-cream-dark">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="image-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 sm:p-6 flex flex-col">
        {date && (
          <div className="flex items-center gap-2 text-burgundy text-xs font-medium mb-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        )}
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

