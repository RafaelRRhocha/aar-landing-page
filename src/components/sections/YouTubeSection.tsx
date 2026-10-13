import { getLatestVideos } from '@/lib/youtube';

import { AnimatedSection } from '../ui/AnimatedSection';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { YouTubePlayer } from '../ui/YouTubePlayer';

export async function YouTubeSection() {
  const videos = await getLatestVideos();

  return (
    <section
      id="videos"
      className="desktop:py-32 bg-cream-dark py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Nosso Canal no YouTube"
            subtitle="Acompanhe em vídeo nossas campanhas, eventos e o dia a dia da associação"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <YouTubePlayer videos={videos} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
