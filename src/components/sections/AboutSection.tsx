"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Star, Scale } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const VALUES = [
  { icon: Heart, label: "Humanidade" },
  { icon: Users, label: "Solidariedade" },
  { icon: Star, label: "Compromisso" },
  { icon: Scale, label: "Ética" },
];

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-16 sm:py-20 desktop:py-32 bg-cream-dark overflow-hidden">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Quem Somos"
            subtitle="Uma história de amor, dedicação e cuidado com pacientes renais crônicos"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 sm:gap-12 desktop:gap-20 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-burgundy">Nossa História</h3>
              <p className="text-foreground/80 leading-relaxed">
                Fundada em <strong className="text-burgundy">2010</strong>, a
                Associação Amigos do Rim nasceu do desejo de transformar a realidade
                dos pacientes renais crônicos e suas famílias. Somos uma organização
                sem fins lucrativos, composta inteiramente por{" "}
                <strong className="text-burgundy">voluntários dedicados</strong> que
                acreditam no poder da solidariedade.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ao longo de mais de uma década, construímos uma rede de apoio que vai
                além do atendimento médico tradicional. Oferecemos suporte
                multidisciplinar, educação em saúde, eventos culturais e beneficentes,
                sempre com o objetivo de promover dignidade e qualidade de vida.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nossa atuação é pautada pela transparência, ética e compromisso com a
                comunidade. Trabalhamos em parceria com instituições públicas e
                privadas para ampliar nosso impacto e garantir que nenhum paciente
                renal se sinta sozinho em sua jornada.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="space-y-4 sm:space-y-6">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Missão</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Promover qualidade de vida e dignidade aos pacientes renais crônicos
                  e seus familiares através de apoio multidisciplinar, educação em
                  saúde e mobilização social.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
                    <Eye size={20} className="text-burgundy sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Visão</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Ser referência no apoio a pacientes renais, contribuindo para uma
                  sociedade mais consciente e solidária em relação às doenças renais.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Valores</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {VALUES.map((value) => (
                    <motion.div
                      key={value.label}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2 p-3 bg-cream rounded-xl"
                    >
                      <value.icon size={18} className="text-burgundy" />
                      <span className="text-sm font-medium text-foreground">
                        {value.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}

