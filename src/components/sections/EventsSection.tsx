'use client';

import { EVENTS_DATA } from '@/lib/constants';

import { EventCard } from '../cards/EventCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { EventCarousel } from '../ui/EventCarousel';
import { SectionTitle } from '../ui/SectionTitle';

const EVENT_IMAGES: Record<string, Array<string>> = {
  baile: [
    '/assets/baile/baile-01.jpg',
    '/assets/baile/baile-02.jpg',
    '/assets/baile/baile-03.jpg',
    '/assets/baile/baile-04.jpg',
    '/assets/baile/baile-05.jpg',
    '/assets/baile/baile-06.jpg',
    '/assets/baile/baile-07.jpg',
    '/assets/baile/baile-08.jpg',
    '/assets/baile/baile-09.jpg',
  ],
  eventotrianon: [
    '/assets/eventotrianon/trianon-01.jpg',
    '/assets/eventotrianon/trianon-02.jpg',
    '/assets/eventotrianon/trianon-03.jpg',
    '/assets/eventotrianon/trianon-04.jpg',
  ],
  diamundialdorim2025: [
    '/assets/diamundialdorim2025/dia-rim-01.jpg',
    '/assets/diamundialdorim2025/dia-rim-02.jpg',
    '/assets/diamundialdorim2025/dia-rim-03.jpg',
    '/assets/diamundialdorim2025/dia-rim-04.jpg',
    '/assets/diamundialdorim2025/dia-rim-05.jpg',
    '/assets/diamundialdorim2025/dia-rim-06.jpg',
    '/assets/diamundialdorim2025/dia-rim-07.jpg',
  ],
  confraternizaofinaldeano: [
    '/assets/confraternizaofinaldeano/confraternizacao-01.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-02.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-03.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-04.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-05.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-06.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-07.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-08.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-09.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-10.jpg',
    '/assets/confraternizaofinaldeano/confraternizacao-11.jpg',
  ],
  doeorgaos: [
    '/assets/doeorgaos/doacao-orgaos-01.jpg',
    '/assets/doeorgaos/doacao-orgaos-02.jpg',
    '/assets/doeorgaos/doacao-orgaos-03.jpg',
  ],
  campanhaconscientizaodianacionaldedoaodergos: [
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-01.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-02.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-03.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-04.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-05.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-06.jpg',
    '/assets/campanhaconscientizaodianacionaldedoaodergos/campanha-conscientizacao-07.jpg',
  ],
  campanhadoacao: [
    '/assets/campanhadoacao/campanhadoacao-01.jpg',
    '/assets/campanhadoacao/campanhadoacao-02.jpg',
    '/assets/campanhadoacao/campanhadoacao-03.jpg',
    '/assets/campanhadoacao/campanhadoacao-04.jpg',
  ],
};

export function EventsSection() {
  const featuredEvents = EVENTS_DATA.filter((event) => event.featured);

  return (
    <section
      id="eventos"
      className="desktop:py-32 bg-cream-dark py-16 sm:py-20"
      style={{ overflow: 'clip' }}
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
                  '/assets/baile/baile-01.jpg'
                }
              />
            ))}
          </EventCarousel>
        </AnimatedSection>
      </Container>
    </section>
  );
}
