'use client';

import { motion } from 'framer-motion';
import { Music, Palette, Theater } from 'lucide-react';

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { ImageCarousel } from '../ui/ImageCarousel';
import { SectionTitle } from '../ui/SectionTitle';

const CULTURE_ITEMS = [
  {
    icon: Music,
    title: 'Dança e Música',
    description:
      'Aulas e apresentações de dança como forma de expressão, terapia e integração social.',
  },
  {
    icon: Palette,
    title: 'Pintura e Artes Visuais',
    description:
      'Oficinas de pintura em tela e telha para desenvolvimento criativo e bem-estar emocional.',
  },
  {
    icon: Theater,
    title: 'Teatro Trianon',
    description:
      '11 eventos promovidos no Teatro Trianon com cantores locais, unindo arte e solidariedade.',
  },
];

const CULTURE_IMAGES = [
  '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35.jpg',
  '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35_1.jpg',
  '/assets/aulaaromaterapia/PHOTO-2025-12-09-20-01-47.jpg',
  '/assets/eventotrianon/IMG_8535.jpg',
  '/assets/eventotrianon/IMG_8578.jpg',
  '/assets/aulaparceriauenfcaminhosdebarro/IMG_8511.jpg',
];

export function ArtAndCultureSection() {
  return (
    <section
      id="arte-cultura"
      className="desktop:py-32 bg-cream-dark relative py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="culture-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="#8B1538" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#culture-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Arte e Cultura"
            subtitle="A arte como ferramenta de acolhimento, expressão e transformação social"
          />
        </AnimatedSection>

        <div className="desktop:grid-cols-2 grid grid-cols-1 items-center gap-8 sm:gap-12">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <ImageCarousel
                images={CULTURE_IMAGES}
                aspectRatio="4-3"
                autoplay={true}
                showPagination={true}
              />
              <div className="bg-primary/10 absolute -right-6 -bottom-6 -z-10 hidden h-32 w-32 rounded-2xl sm:block" />
              <div className="bg-burgundy/10 absolute -top-6 -left-6 -z-10 hidden h-24 w-24 rounded-2xl sm:block" />
            </div>
          </AnimatedSection>

          <div className="space-y-4 sm:space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
                Acreditamos que a arte é uma poderosa ferramenta de{' '}
                <strong className="text-burgundy">cura e transformação</strong>.
                Por meio de oficinas, apresentações e eventos culturais,
                promovemos o bem-estar emocional dos pacientes e seus
                familiares.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-foreground/80 leading-relaxed">
                A Associação realiza eventos culturais e beneficentes, como os{' '}
                <strong className="text-burgundy">
                  11 eventos promovidos no Teatro Trianon
                </strong>{' '}
                com cantores locais e as{' '}
                <strong className="text-burgundy">
                  4 tradicionais Noites Tropicais
                </strong>
                . Também promovemos oficinas de arte no Museu de Campos e
                exposições temáticas.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {CULTURE_ITEMS.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="border-cream flex items-start gap-3 rounded-xl border bg-white p-4 transition-all hover:shadow-md sm:gap-4"
                  >
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12">
                      <item.icon
                        size={20}
                        className="text-primary sm:h-6 sm:w-6"
                      />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1 text-sm font-semibold sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 text-xs leading-relaxed sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
