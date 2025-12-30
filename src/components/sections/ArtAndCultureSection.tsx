"use client";

import { motion } from "framer-motion";
import { Music, Palette, Theater, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const CULTURE_ITEMS = [
  {
    icon: Music,
    title: "Dança",
    description:
      "Aulas e apresentações de dança como forma de expressão, terapia e integração social.",
  },
  {
    icon: Palette,
    title: "Pintura e Artes Visuais",
    description:
      "Oficinas de pintura e artesanato para desenvolvimento criativo e bem-estar emocional.",
  },
  {
    icon: Theater,
    title: "Teatro e Música",
    description:
      "Apresentações culturais que unem arte, sensibilidade e solidariedade.",
  },
];

export function ArtAndCultureSection() {
  return (
    <section id="arte-cultura" className="py-16 sm:py-20 desktop:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 sm:gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl bg-linear-to-br from-burgundy to-primary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 sm:w-48 sm:h-48 border-2 border-white/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-white/30 rounded-full flex items-center justify-center">
                      <Sparkles size={32} className="text-white/80 sm:w-12 sm:h-12" />
                    </div>
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-burgundy-dark/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-white/90 text-base sm:text-lg font-medium">
                    Espaço reservado para imagem
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    Adicione fotos das oficinas e eventos culturais
                  </p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-burgundy/10 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          <div className="space-y-4 sm:space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Acreditamos que a arte é uma poderosa ferramenta de{" "}
                <strong className="text-burgundy">cura e transformação</strong>. Por
                meio de oficinas, apresentações e eventos culturais, promovemos o
                bem-estar emocional dos pacientes e seus familiares.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-foreground/80 leading-relaxed">
                Nossas atividades culturais vão além do entretenimento – são espaços
                de expressão, integração e desenvolvimento pessoal, onde cada
                participante pode descobrir novos talentos e fortalecer vínculos
                afetivos.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
              {CULTURE_ITEMS.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 sm:gap-4 p-4 bg-white rounded-xl border border-cream-dark hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
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

