"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="apoie" className="py-16 sm:py-20 desktop:py-32 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 sm:gap-12 items-center">
          <AnimatedSection>
            <div className="text-center desktop:text-left">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto desktop:mx-0 mb-6"
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>
              
              <h2 className="text-2xl sm:text-3xl desktop:text-4xl font-bold text-foreground mb-4">
                Apoie Nossa Causa
              </h2>
              
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto desktop:mx-0">
                Sua contribuição ajuda a manter nossos serviços e ampliar o
                atendimento aos pacientes renais crônicos e suas famílias.
                Juntos, podemos fazer a diferença.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center desktop:justify-start">
                <Button href="#contato" variant="primary">
                  <a
                    className="text-white"
                    href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entre em Contato
                  </a>
                </Button>
                <Button
                  href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  variant="outline"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-cream-dark">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 bg-cream rounded-xl hover:bg-cream-dark transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Telefone</div>
                    <div className="font-medium text-foreground">{CONTACT_INFO.phone}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 bg-cream rounded-xl hover:bg-cream-dark transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-burgundy/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">E-mail</div>
                    <div className="font-medium text-foreground break-all">{CONTACT_INFO.email}</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 bg-cream rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Endereço</div>
                    <div className="font-medium text-foreground">{CONTACT_INFO.address}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

