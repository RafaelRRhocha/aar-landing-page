import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { AboutSection } from '@/components/sections/AboutSection';
import { ArtAndCultureSection } from '@/components/sections/ArtAndCultureSection';
import { CTASection } from '@/components/sections/CTASection';
import { EventsSection } from '@/components/sections/EventsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { RecognitionSection } from '@/components/sections/RecognitionSection';
import { WorkSection } from '@/components/sections/WorkSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <EventsSection />
        <GallerySection />
        <ArtAndCultureSection />
        <ImpactSection />
        <RecognitionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
