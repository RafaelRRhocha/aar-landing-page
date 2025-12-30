import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ArtAndCultureSection } from "@/components/sections/ArtAndCultureSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { CTASection } from "@/components/sections/CTASection";

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
