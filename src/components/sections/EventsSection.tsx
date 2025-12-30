'use client';

import { EVENTS_DATA } from '@/lib/constants';

import { EventCard } from '../cards/EventCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { EventCarousel } from '../ui/EventCarousel';
import { SectionTitle } from '../ui/SectionTitle';

const EVENT_IMAGES: Record<string, Array<string>> = {
  baile: [
    '/assets/baile/IMG_8131.JPG',
    '/assets/baile/IMG_8132.JPG',
    '/assets/baile/IMG_8133.JPG',
  ],
  eventotrianon: [
    '/assets/eventotrianon/IMG_8535.jpg',
    '/assets/eventotrianon/IMG_8578.jpg',
    '/assets/eventotrianon/IMG_8594.jpg',
  ],
  diamundialdorim2025: [
    '/assets/diamundialdorim2025/IMG_8520.JPG',
    '/assets/diamundialdorim2025/IMG_8521.JPG',
    '/assets/diamundialdorim2025/IMG_8522.JPG',
  ],
  confraternizaofinaldeano: [
    '/assets/confraternizaofinaldeano/089b20ae-0056-40d6-8d74-2070d6d5b182.JPG',
    '/assets/confraternizaofinaldeano/0d7b69b1-2eff-4772-abc1-19a99f09194c.JPG',
    '/assets/confraternizaofinaldeano/37f305f2-e5f1-472f-808d-7c1a2602ea28.JPG',
  ],
  doeorgaos: [
    '/assets/doeorgaos/IMG_8541.JPG',
    '/assets/doeorgaos/IMG_8542.JPG',
    '/assets/doeorgaos/IMG_8543.JPG',
  ],
  campanhaconscientizaodianacionaldedoaodergos: [
    '/assets/campanhaconscientizaodianacionaldedoaodergos/IMG_8533.JPG',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/IMG_8534.JPG',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/IMG_8535.JPG',
  ],
};

export function EventsSection() {
  const featuredEvents = EVENTS_DATA.filter((event) => event.featured);

  return (
    <section
      id="eventos"
      className="desktop:py-32 bg-cream-dark overflow-hidden py-16 sm:py-20"
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nossos Eventos"
            subtitle="Momentos que marcam nossa trajetória de solidariedade e cuidado"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <EventCarousel>
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image={
                  EVENT_IMAGES[event.folder]?.[0] ||
                  '/assets/baile/IMG_8131.JPG'
                }
              />
            ))}
          </EventCarousel>
        </AnimatedSection>
      </Container>
    </section>
  );
}
