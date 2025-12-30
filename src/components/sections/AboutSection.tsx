"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { MISSION_VISION_VALUES } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-16 sm:py-20 desktop:py-32 bg-cream-dark overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Quem Somos"
            subtitle="Uma organização da sociedade civil dedicada ao cuidado de pacientes renais"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 sm:gap-12 desktop:gap-20 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-burgundy">Nossa História</h3>
              <p className="text-foreground/80 leading-relaxed">
                A Associação Amigos do Rim, fundada em <strong className="text-burgundy">2010</strong>, 
                é uma organização da sociedade civil, sem fins lucrativos, que atua de forma voluntária 
                no apoio a pacientes renais crônicos e seus familiares em Campos dos Goytacazes e região.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ao longo de <strong className="text-burgundy">15 anos de atuação</strong>, a Associação 
                consolidou-se como referência regional no cuidado ao paciente renal, contando com uma 
                equipe multidisciplinar de profissionais voluntários nas áreas de psicologia, nutrição, 
                fisioterapia, serviço social e direito.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Atualmente, a Associação mantém em seu cadastro <strong className="text-burgundy">1.039 
                pacientes renais crônicos e familiares</strong>, dos quais 250 estão ativos nos últimos 
                três anos. A Doença Renal Crônica (DRC) é considerada uma epidemia global pela 
                Sociedade Brasileira de Nefrologia.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="space-y-4 sm:space-y-6">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Missão</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {MISSION_VISION_VALUES.mission}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
                    <Eye size={20} className="text-burgundy sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Visão</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {MISSION_VISION_VALUES.vision}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Valores</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {MISSION_VISION_VALUES.values.map((value) => (
                    <motion.div
                      key={value.label}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2 p-3 bg-cream rounded-xl"
                    >
                      <value.icon size={18} className="text-burgundy" />
                      <span className="text-sm font-medium text-foreground">
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
