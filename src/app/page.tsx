import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ArtAndCultureSection } from "@/components/sections/ArtAndCultureSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ActivitiesSection />
        <ArtAndCultureSection />
        <RecognitionSection />
      </main>
      <Footer />
    </>
  );
}
