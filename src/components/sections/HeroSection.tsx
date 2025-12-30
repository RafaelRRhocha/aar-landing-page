"use client";

import { motion } from "framer-motion";
import { ArrowDown, Heart, Users, Calendar } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-burgundy via-burgundy-dark to-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] max-w-full bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <Heart size={16} className="text-white" />
              Associação sem fins lucrativos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl desktop:text-7xl font-bold text-white leading-tight mb-6"
          >
            Juntos pelos renais
            <span className="block text-primary mt-2">desde 2010</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-xl desktop:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            Promovendo dignidade, cuidado e qualidade de vida para pacientes
            renais crônicos e seus familiares através do apoio multidisciplinar
            e da solidariedade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="#quem-somos" variant="primary" className="w-full sm:w-auto">
              Conheça nossa história
            </Button>
            <Button href="#nossa-atuacao" variant="ghost" className="w-full sm:w-auto">
              Nossa atuação
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Calendar size={24} className="text-white mb-2 sm:mb-3 sm:w-7 sm:h-7" />
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">14+</span>
              <span className="text-white/80 text-xs sm:text-sm text-center">Anos de atuação</span>
            </div>
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Users size={24} className="text-white mb-2 sm:mb-3 sm:w-7 sm:h-7" />
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</span>
              <span className="text-white/80 text-xs sm:text-sm text-center">Famílias atendidas</span>
            </div>
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Heart size={24} className="text-white mb-2 sm:mb-3 sm:w-7 sm:h-7" />
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-white/80 text-xs sm:text-sm text-center">Trabalho voluntário</span>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#quem-somos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
