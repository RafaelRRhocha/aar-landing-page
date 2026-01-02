'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { GALLERY_CATEGORIES } from '@/lib/constants';

import { AnimatedSection } from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { ImageCarousel } from '../ui/ImageCarousel';
import { SectionTitle } from '../ui/SectionTitle';

const GALLERY_IMAGES: Record<string, Array<string>> = {
  atendimentos: [
    '/assets/atendimentos/atendimento-01.jpg',
    '/assets/atendimentos/atendimento-02.jpg',
    '/assets/atendimentos/atendimento-03.jpg',
    '/assets/atendimentos/atendimento-04.jpg',
    '/assets/atendimentos/atendimento-05.jpg',
    '/assets/atendimentos/atendimento-06.jpg',
    '/assets/atendimentos/atendimento-07.jpg',
    '/assets/atendimentos/atendimento-08.jpg',
  ],
  pilates_e_fisioterapia: [
    '/assets/pilates_e_fisioterapia/pilates-fisio-01.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-02.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-03.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-04.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-05.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-06.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-07.jpg',
    '/assets/pilates_e_fisioterapia/pilates-fisio-08.jpg',
  ],
  aulapinturaemtelaepinturaemtelha: [
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-01.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-02.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-03.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-04.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-05.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-06.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-07.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-08.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/pintura-tela-telha-09.jpg',
  ],
  aulaaromaterapia: [
    '/assets/aulaaromaterapia/aromaterapia-01.jpg',
    '/assets/aulaaromaterapia/aromaterapia-02.jpg',
    '/assets/aulaaromaterapia/aromaterapia-03.jpg',
    '/assets/aulaaromaterapia/aromaterapia-04.jpg',
  ],
  aulaparceriauenfcaminhosdebarro: [
    '/assets/aulaparceriauenfcaminhosdebarro/parceria-uenf-01.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/parceria-uenf-02.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/parceria-uenf-03.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/parceria-uenf-04.jpg',
  ],
  reunioes: [
    '/assets/reunioes/reuniao-01.jpg',
    '/assets/reunioes/reuniao-02.jpg',
    '/assets/reunioes/reuniao-03.jpg',
    '/assets/reunioes/reuniao-04.jpg',
    '/assets/reunioes/reuniao-05.jpg',
    '/assets/reunioes/reuniao-06.jpg',
    '/assets/reunioes/reuniao-07.jpg',
    '/assets/reunioes/reuniao-08.jpg',
    '/assets/reunioes/reuniao-09.jpg',
    '/assets/reunioes/reuniao-10.jpg',
    '/assets/reunioes/reuniao-11.jpg',
  ],
  campanhadoacao: [
    '/assets/campanhadoacao/campanhadoacao-01.jpg',
    '/assets/campanhadoacao/campanhadoacao-02.jpg',
    '/assets/campanhadoacao/campanhadoacao-03.jpg',
    '/assets/campanhadoacao/campanhadoacao-04.jpg',
  ],
};

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(
    GALLERY_CATEGORIES[0].id,
  );

  const currentCategory = GALLERY_CATEGORIES.find(
    (cat) => cat.id === activeCategory,
  );
  const currentImages = GALLERY_IMAGES[currentCategory?.folder || ''] || [];

  return (
    <section
      id="galeria"
      className="desktop:py-32 bg-cream py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Galeria"
            subtitle="Registros das nossas atividades e momentos especiais"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-14">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-foreground/70 hover:text-foreground border-cream-dark hover:border-primary/30 border bg-white'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="bg-primary absolute inset-0 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="font-inter relative z-10">
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentCategory && (
                <div className="mb-8 text-center">
                  <p className="text-foreground/60 text-sm sm:text-base">
                    {currentCategory.description}
                  </p>
                </div>
              )}

              <div className="mx-auto max-w-4xl">
                <ImageCarousel
                  images={currentImages}
                  aspectRatio="video"
                  autoplay={true}
                  showPagination={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </Container>
    </section>
  );
}
