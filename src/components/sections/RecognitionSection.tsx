"use client";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { RecognitionCard } from "../cards/RecognitionCard";
import { RECOGNITIONS } from "@/lib/constants";

export function RecognitionSection() {
  return (
    <section id="reconhecimentos" className="py-16 sm:py-20 desktop:py-32 bg-cream-dark overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Reconhecimentos"
            subtitle="Honrarias e conquistas que refletem nosso compromisso com a comunidade"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {RECOGNITIONS.map((recognition) => (
            <StaggerItem key={recognition.title}>
              <RecognitionCard
                icon={recognition.icon}
                title={recognition.title}
                description={recognition.description}
                year={recognition.year}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-linear-to-r from-burgundy to-primary rounded-2xl sm:rounded-3xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Impacto Social Real
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Cada reconhecimento representa anos de trabalho voluntário, dedicação
              e amor ao próximo. Continuamos nossa missão de transformar vidas e
              fortalecer a rede de apoio aos pacientes renais.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

