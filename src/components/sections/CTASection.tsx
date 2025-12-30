'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

import { CONTACT_INFO } from '@/lib/constants';

import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function CTASection() {
  return (
    <section
      id="apoie"
      className="desktop:py-32 bg-cream py-16 sm:py-20"
      style={{ overflow: 'clip' }}
    >
      <Container>
        <div className="desktop:grid-cols-2 grid grid-cols-1 items-center gap-8 sm:gap-12">
          <AnimatedSection>
            <div className="desktop:text-left text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="bg-primary/10 desktop:mx-0 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20"
              >
                <Heart className="text-primary h-8 w-8 sm:h-10 sm:w-10" />
              </motion.div>

              <h2 className="desktop:text-4xl text-foreground mb-4 text-2xl font-bold sm:text-3xl">
                Apoie Nossa Causa
              </h2>

              <p className="text-foreground/70 desktop:mx-0 mx-auto mb-6 max-w-xl text-base leading-relaxed sm:text-lg">
                Sua contribuição ajuda a manter nossos serviços e ampliar o
                atendimento aos pacientes renais crônicos e suas famílias.
                Juntos, podemos fazer a diferença.
              </p>

              <div className="desktop:justify-start flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  target="_blank"
                >
                  Entre em Contato
                </Button>
                <Button
                  href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  variant="outline"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border-cream-dark rounded-2xl border bg-white p-6 shadow-lg sm:rounded-3xl sm:p-8">
              <h3 className="text-foreground mb-6 text-lg font-bold sm:text-xl">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <motion.a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  whileHover={{ x: 4 }}
                  className="bg-cream hover:bg-cream-dark flex items-start gap-4 rounded-xl p-4 transition-colors"
                >
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-foreground/60 mb-1 text-sm">
                      Telefone
                    </div>
                    <div className="text-foreground font-medium">
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  whileHover={{ x: 4 }}
                  className="bg-cream hover:bg-cream-dark flex items-start gap-4 rounded-xl p-4 transition-colors"
                >
                  <div className="bg-burgundy/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="text-burgundy h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-foreground/60 mb-1 text-sm">
                      E-mail
                    </div>
                    <div className="text-foreground font-medium break-all">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-cream flex items-start gap-4 rounded-xl p-4"
                >
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-foreground/60 mb-1 text-sm">
                      Endereço
                    </div>
                    <div className="text-foreground font-medium">
                      {CONTACT_INFO.address}
                    </div>
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
