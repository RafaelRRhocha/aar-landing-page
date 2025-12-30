'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Heart, Menu, Star, Users, X } from 'lucide-react';

import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { Container } from '../ui/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-cream/98 shadow-md backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between sm:h-20">
            <a
              href="#"
              className="relative z-50 flex items-center gap-2 sm:gap-3"
            >
              <Image
                src="/logo.png"
                alt="Associação Amigos do Rim"
                width={56}
                height={56}
                className={`desktop:w-14 desktop:h-14 h-10 w-10 transition-all duration-300 sm:h-12 sm:w-12 ${
                  !isScrolled && !isMobileMenuOpen ? 'brightness-0 invert' : ''
                }`}
              />
              <div className="hidden sm:block">
                <span
                  className={`desktop:text-lg block text-base leading-tight font-bold transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen
                      ? 'text-burgundy'
                      : 'text-white'
                  }`}
                >
                  Amigos do Rim
                </span>
                <span
                  className={`block text-xs transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen
                      ? 'text-foreground/60'
                      : 'text-white/70'
                  }`}
                >
                  Juntos pelos renais desde 2010
                </span>
              </div>
            </a>

            <NavigationMenu.Root className="desktop:block hidden">
              <NavigationMenu.List className="flex list-none items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link
                      href={link.href}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        isScrolled
                          ? 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`desktop:hidden relative z-50 rounded-lg p-2 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? 'text-burgundy hover:bg-burgundy/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="desktop:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="from-cream to-cream-dark desktop:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm overflow-x-hidden overflow-y-auto bg-linear-to-br via-white shadow-2xl"
            >
              <div className="flex h-full flex-col">
                <div className="border-cream-dark/50 flex items-center justify-between border-b p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Associação Amigos do Rim"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                    <div>
                      <span className="text-burgundy block text-base leading-tight font-bold">
                        Amigos do Rim
                      </span>
                      <span className="text-foreground/60 block text-xs">
                        Menu de navegação
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-burgundy hover:bg-burgundy/10 rounded-lg p-2 transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-5 py-8">
                  <div className="space-y-2">
                    {NAV_LINKS.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        className="hover:bg-primary text-foreground group flex items-center gap-4 rounded-xl bg-white/80 px-5 py-4 font-medium shadow-sm transition-all duration-300 hover:text-white hover:shadow-md"
                      >
                        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-white/20">
                          {index === 0 && (
                            <Heart
                              size={20}
                              className="text-primary transition-colors group-hover:text-white"
                            />
                          )}
                          {index === 1 && (
                            <Users
                              size={20}
                              className="text-primary transition-colors group-hover:text-white"
                            />
                          )}
                          {index === 2 && (
                            <Calendar
                              size={20}
                              className="text-primary transition-colors group-hover:text-white"
                            />
                          )}
                          {index === 3 && (
                            <Star
                              size={20}
                              className="text-primary transition-colors group-hover:text-white"
                            />
                          )}
                          {index > 3 && (
                            <div className="bg-primary h-2 w-2 rounded-full transition-colors group-hover:bg-white" />
                          )}
                        </div>
                        <span className="flex-1 text-base">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                <div className="border-cream-dark/50 border-t p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="from-burgundy to-primary rounded-2xl bg-linear-to-br p-4 text-white"
                  >
                    <Heart size={20} className="mb-2 opacity-80" />
                    <h3 className="mb-2 text-sm leading-tight font-bold">
                      Faça Parte
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-white/90">
                      Juntos podemos transformar vidas e apoiar pacientes
                      renais.
                    </p>
                    <a
                      href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="text-primary flex w-full items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-medium transition-colors hover:bg-white/90"
                    >
                      Entre em Contato
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
