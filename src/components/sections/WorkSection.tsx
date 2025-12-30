'use client';

import { IMPACT_AREAS, SERVICES } from '@/lib/constants';

import { ServiceCard } from '../cards/ServiceCard';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function WorkSection() {
  return (
    <section
      id="nossa-atuacao"
      className="desktop:py-32 bg-cream py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nossa Atuação"
            subtitle="Oferecemos suporte completo e humanizado através de uma equipe multidisciplinar de voluntários"
          />
        </AnimatedSection>

        <div className="mb-12 sm:mb-16">
          <AnimatedSection delay={0.1}>
            <h3 className="text-burgundy mb-6 text-center text-lg font-bold sm:mb-8 sm:text-xl">
              Atendimento Multidisciplinar
            </h3>
          </AnimatedSection>

          <StaggerContainer className="desktop:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-12 sm:mt-20">
          <AnimatedSection delay={0.2}>
            <h3 className="text-burgundy mb-6 text-center text-lg font-bold sm:mb-8 sm:text-xl">
              Mobilização e Atuação Institucional
            </h3>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {IMPACT_AREAS.map((area) => (
              <StaggerItem key={area.title}>
                <ServiceCard
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
