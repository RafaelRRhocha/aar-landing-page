"use client";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { ActivityCard } from "../cards/ActivityCard";
import { ACTIVITIES } from "@/lib/constants";

export function ActivitiesSection() {
  return (
    <section id="atividades" className="py-16 sm:py-20 desktop:py-32 bg-cream-dark overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nossas Atividades"
            subtitle="Eventos, campanhas e iniciativas que promovem saúde, cultura e solidariedade"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-3 gap-4 sm:gap-6 desktop:gap-8">
          {ACTIVITIES.map((activity) => (
            <StaggerItem key={activity.id}>
              <ActivityCard
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                image={activity.image}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

