'use client';

import { motion } from 'framer-motion';
import { Eye, Heart, Target } from 'lucide-react';

import { MISSION_VISION_VALUES } from '@/lib/constants';

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="desktop:py-32 bg-cream-dark overflow-hidden py-16 sm:py-20"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Quem Somos"
            subtitle="Uma organização da sociedade civil dedicada ao cuidado de pacientes renais"
          />
        </AnimatedSection>

        <div className="desktop:grid-cols-2 desktop:gap-20 grid grid-cols-1 items-start gap-8 sm:gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-burgundy text-xl font-bold sm:text-2xl">
                Nossa História
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                A Associação Amigos do Rim, fundada em{' '}
                <strong className="text-burgundy">2010</strong>, é uma
                organização da sociedade civil, sem fins lucrativos, que atua de
                forma voluntária no apoio a pacientes renais crônicos e seus
                familiares em Campos dos Goytacazes e região.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ao longo de{' '}
                <strong className="text-burgundy">15 anos de atuação</strong>, a
                Associação consolidou-se como referência regional no cuidado ao
                paciente renal, contando com uma equipe multidisciplinar de
                profissionais voluntários nas áreas de psicologia, nutrição,
                fisioterapia, serviço social e direito.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Atualmente, a Associação mantém em seu cadastro{' '}
                <strong className="text-burgundy">
                  1.039 pacientes renais crônicos e familiares
                </strong>
                , dos quais 250 estão ativos nos últimos três anos. A Doença
                Renal Crônica (DRC) é considerada uma epidemia global pela
                Sociedade Brasileira de Nefrologia.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="space-y-4 sm:space-y-6">
            <StaggerItem>
              <div className="border-cream rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12">
                    <Target size={20} className="text-primary sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="text-foreground text-base font-bold sm:text-lg">
                    Missão
                  </h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {MISSION_VISION_VALUES.mission}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border-cream rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-3 sm:gap-4">
                  <div className="bg-burgundy/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12">
                    <Eye size={20} className="text-burgundy sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="text-foreground text-base font-bold sm:text-lg">
                    Visão
                  </h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {MISSION_VISION_VALUES.vision}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border-cream rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12">
                    <Heart size={20} className="text-primary sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="text-foreground text-base font-bold sm:text-lg">
                    Valores
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {MISSION_VISION_VALUES.values.map((value) => (
                    <motion.div
                      key={value.label}
                      whileHover={{ scale: 1.02 }}
                      className="bg-cream flex items-center gap-2 rounded-xl p-3"
                    >
                      <value.icon size={18} className="text-burgundy" />
                      <span className="text-foreground text-sm font-medium">
                        {value.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
