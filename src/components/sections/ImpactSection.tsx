'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Building2,
  Calendar,
  Heart,
  Syringe,
  Users,
} from 'lucide-react';

import { IMPACT_NUMBERS } from '@/lib/constants';

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

const STATS = [
  {
    icon: Calendar,
    value: IMPACT_NUMBERS.yearsOfOperation,
    suffix: '+',
    label: 'Anos de Atuação',
  },
  {
    icon: Users,
    value: IMPACT_NUMBERS.totalRegistered,
    suffix: '',
    label: 'Pacientes Cadastrados',
  },
  {
    icon: Heart,
    value: IMPACT_NUMBERS.activePatients,
    suffix: '+',
    label: 'Pacientes Ativos',
  },
  {
    icon: Award,
    value: IMPACT_NUMBERS.trianonEvents,
    suffix: '',
    label: 'Eventos no Trianon',
  },
];

const ACHIEVEMENTS = [
  {
    icon: Building2,
    title: 'Clínica Nefro Campos',
    description:
      "Criação da Clínica Regional de Hemodiálise 'Amigos do Rim – Francisco Paes Filho' no Hospital Geral de Guarus.",
  },
  {
    icon: Syringe,
    title: 'Vacinação Prioritária',
    description:
      'Conquista histórica: inclusão dos pacientes renais no grupo prioritário de vacinação contra a COVID-19.',
  },
];

export function ImpactSection() {
  return (
    <section
      id="impacto"
      className="desktop:py-32 from-burgundy via-burgundy-dark to-primary overflow-hidden bg-linear-to-br py-16 sm:py-20"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nosso Impacto"
            subtitle="Números que refletem nossa dedicação aos pacientes renais"
            light
          />
        </AnimatedSection>

        <StaggerContainer className="desktop:grid-cols-4 mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:gap-6">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-sm sm:p-6"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-white sm:h-10 sm:w-10" />
                <div className="desktop:text-5xl mb-2 text-3xl font-bold text-white sm:text-4xl">
                  {stat.value.toLocaleString('pt-BR')}
                  {stat.suffix}
                </div>
                <div className="text-sm text-white/80 sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <h3 className="mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl">
            Conquistas Históricas
          </h3>
        </AnimatedSection>

        <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {ACHIEVEMENTS.map((achievement) => (
            <StaggerItem key={achievement.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white p-5 shadow-lg sm:p-6"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <achievement.icon className="text-primary h-6 w-6" />
                  </div>
                  <h4 className="text-foreground text-lg font-semibold">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
