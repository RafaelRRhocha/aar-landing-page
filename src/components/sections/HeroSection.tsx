'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Heart, Users } from 'lucide-react';

import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function HeroSection() {
  return (
    <section className="from-burgundy via-burgundy-dark to-primary relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="bg-primary/20 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[min(800px,100vw)] w-[min(800px,100vw)] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
              <Heart size={16} className="text-white" />
              Associação sem fins lucrativos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="desktop:text-7xl mb-6 text-3xl leading-tight font-bold text-white sm:text-5xl"
          >
            Juntos pelos renais
            <span className="text-primary mt-2 block">desde 2010</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="desktop:text-2xl mx-auto mb-8 max-w-2xl px-2 text-base leading-relaxed text-white/90 sm:mb-10 sm:text-xl"
          >
            Promovendo dignidade, cuidado e qualidade de vida para pacientes
            renais crônicos e seus familiares através do apoio multidisciplinar
            e da solidariedade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              href="#quem-somos"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Conheça nossa história
            </Button>
            <Button
              href="#nossa-atuacao"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Nossa atuação
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6"
          >
            <div className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              <Calendar
                size={24}
                className="mb-2 text-white sm:mb-3 sm:h-7 sm:w-7"
              />
              <span className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                14+
              </span>
              <span className="text-center text-xs text-white/80 sm:text-sm">
                Anos de atuação
              </span>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              <Users
                size={24}
                className="mb-2 text-white sm:mb-3 sm:h-7 sm:w-7"
              />
              <span className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                1000+
              </span>
              <span className="text-center text-xs text-white/80 sm:text-sm">
                Famílias atendidas
              </span>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              <Heart
                size={24}
                className="mb-2 text-white sm:mb-3 sm:h-7 sm:w-7"
              />
              <span className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                100%
              </span>
              <span className="text-center text-xs text-white/80 sm:text-sm">
                Trabalho voluntário
              </span>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.a
          href="#quem-somos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
