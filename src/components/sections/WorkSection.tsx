"use client";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { ServiceCard } from "../cards/ServiceCard";
import { SERVICES, IMPACT_AREAS } from "@/lib/constants";

export function WorkSection() {
  return (
    <section id="nossa-atuacao" className="py-16 sm:py-20 desktop:py-32 bg-cream overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nossa Atuação"
            subtitle="Oferecemos suporte completo e humanizado através de uma equipe multidisciplinar de voluntários"
          />
        </AnimatedSection>

        <div className="mb-12 sm:mb-16">
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg sm:text-xl font-bold text-burgundy mb-6 sm:mb-8 text-center">
              Atendimento Multidisciplinar
            </h3>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-3 gap-4 sm:gap-6">
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
            <h3 className="text-lg sm:text-xl font-bold text-burgundy mb-6 sm:mb-8 text-center">
              Mobilização e Atuação Institucional
            </h3>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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

