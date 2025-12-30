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
    '/assets/atendimentos/246fba71-fa48-40a3-81df-1966ab840b70.JPG',
    '/assets/atendimentos/3c1d052b-e906-4e88-827a-ae268908a929.JPG',
    '/assets/atendimentos/43ea9b82-1acd-4132-84a0-b4bb0d76037b.JPG',
    '/assets/atendimentos/64316BD9-D209-4CBC-8BCA-BE5CD75F09B9.JPG',
    '/assets/atendimentos/71ec3874-62c6-427e-b4bf-eebead647620.JPG',
  ],
  pilates_e_fisioterapia: [
    '/assets/pilates_e_fisioterapia/8b57fe59-98c2-4e89-b1d4-9933926cea8a.JPG',
    '/assets/pilates_e_fisioterapia/8f63497e-ae27-4d76-bb80-41a8e29a7918.JPG',
    '/assets/pilates_e_fisioterapia/965218c0-0e83-4db1-95de-8874dcf65569.JPG',
    '/assets/pilates_e_fisioterapia/IMG_8527.JPG',
    '/assets/pilates_e_fisioterapia/IMG_8528.JPG',
  ],
  aulapinturaemtelaepinturaemtelha: [
    '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35_1.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35_2.jpg',
    '/assets/aulapinturaemtelaepinturaemtelha/PHOTO-2025-12-09-19-53-35_3.jpg',
  ],
  aulaaromaterapia: [
    '/assets/aulaaromaterapia/PHOTO-2025-12-09-20-01-47.jpg',
    '/assets/aulaaromaterapia/PHOTO-2025-12-09-20-01-47_1.jpg',
    '/assets/aulaaromaterapia/PHOTO-2025-12-09-20-01-47_2.jpg',
    '/assets/aulaaromaterapia/PHOTO-2025-12-09-20-01-47_3.jpg',
  ],
  aulaparceriauenfcaminhosdebarro: [
    '/assets/aulaparceriauenfcaminhosdebarro/IMG_8511.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/IMG_8512.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/IMG_8513.jpg',
    '/assets/aulaparceriauenfcaminhosdebarro/IMG_8514.jpg',
  ],
  reunioes: [
    '/assets/reunioes/07624faa-f401-46fb-aeb6-c3a69e982eb6.JPG',
    '/assets/reunioes/143e1458-f781-40ea-8bd5-aa1480ab44a4.JPG',
    '/assets/reunioes/3b16a80d-401f-41d1-bc47-cf363b3e0629.JPG',
    '/assets/reunioes/652d52d4-6430-4b78-a723-dddcb151bb3b.JPG',
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
      className="desktop:py-32 bg-cream overflow-hidden py-16 sm:py-20"
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
                <span className="relative z-10">{category.title}</span>
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
