"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Heart, Building2, Award, Syringe } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { IMPACT_NUMBERS } from "@/lib/constants";

const STATS = [
  {
    icon: Calendar,
    value: IMPACT_NUMBERS.yearsOfOperation,
    suffix: "+",
    label: "Anos de Atuação",
  },
  {
    icon: Users,
    value: IMPACT_NUMBERS.totalRegistered,
    suffix: "",
    label: "Pacientes Cadastrados",
  },
  {
    icon: Heart,
    value: IMPACT_NUMBERS.activePatients,
    suffix: "+",
    label: "Pacientes Ativos",
  },
  {
    icon: Award,
    value: IMPACT_NUMBERS.trianonEvents,
    suffix: "",
    label: "Eventos no Trianon",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Building2,
    title: "Clínica Nefro Campos",
    description:
      "Criação da Clínica Regional de Hemodiálise 'Amigos do Rim – Francisco Paes Filho' no Hospital Geral de Guarus.",
  },
  {
    icon: Syringe,
    title: "Vacinação Prioritária",
    description:
      "Conquista histórica: inclusão dos pacientes renais no grupo prioritário de vacinação contra a COVID-19.",
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-16 sm:py-20 desktop:py-32 bg-linear-to-br from-burgundy via-burgundy-dark to-primary overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nosso Impacto"
            subtitle="Números que refletem nossa dedicação aos pacientes renais"
            light
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 desktop:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center p-5 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl desktop:text-5xl font-bold text-white mb-2">
                  {stat.value.toLocaleString("pt-BR")}
                  {stat.suffix}
                </div>
                <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Conquistas Históricas
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((achievement) => (
            <StaggerItem key={achievement.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
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

