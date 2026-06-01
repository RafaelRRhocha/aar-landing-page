'use client';

import Image from 'next/image';

import { PARTNERS } from '@/lib/constants';

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function PartnershipsSection() {
  return (
    <section
      id="parcerias"
      className="desktop:py-32 bg-cream py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Parcerias"
            subtitle="Instituições e organizações que caminham conosco na missão de cuidar e transformar vidas"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-foreground mb-1 text-base font-bold sm:text-lg">
                    {partner.name}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="from-burgundy to-primary mt-12 rounded-2xl bg-linear-to-r p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8">
            <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
              Juntos somos mais fortes
            </h3>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Cada parceria representa mais recursos, mais alcance e mais
              qualidade de vida para nossos pacientes. Se sua organização deseja
              se unir à nossa causa, entre em contato.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
