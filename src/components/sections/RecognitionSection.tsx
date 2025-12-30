'use client';

import { RECOGNITIONS } from '@/lib/constants';

import { RecognitionCard } from '../cards/RecognitionCard';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function RecognitionSection() {
  return (
    <section
      id="reconhecimentos"
      className="desktop:py-32 bg-cream-dark overflow-hidden py-16 sm:py-20"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Reconhecimentos"
            subtitle="Honrarias e conquistas que refletem nosso compromisso com a comunidade"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
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
          <div className="from-burgundy to-primary mt-12 rounded-2xl bg-linear-to-r p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8">
            <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
              Impacto Social Real
            </h3>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Cada reconhecimento representa anos de trabalho voluntário,
              dedicação e amor ao próximo. Continuamos nossa missão de
              transformar vidas e fortalecer a rede de apoio aos pacientes
              renais.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
