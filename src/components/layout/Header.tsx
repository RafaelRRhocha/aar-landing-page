"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Users, Calendar, Star } from "lucide-react";
import { Container } from "../ui/Container";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-cream/98 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-2 sm:gap-3 relative z-50">
              <Image
                src="/logo.png"
                alt="Associação Amigos do Rim"
                width={56}
                height={56}
                className={`w-10 h-10 sm:w-12 sm:h-12 desktop:w-14 desktop:h-14 transition-all duration-300 ${
                  !isScrolled && !isMobileMenuOpen ? "brightness-0 invert" : ""
                }`}
              />
              <div className="hidden sm:block">
                <span
                  className={`block text-base desktop:text-lg font-bold leading-tight transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen ? "text-burgundy" : "text-white"
                  }`}
                >
                  Amigos do Rim
                </span>
                <span
                  className={`block text-xs transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen ? "text-foreground/60" : "text-white/70"
                  }`}
                >
                  Juntos pelos renais desde 2010
                </span>
              </div>
            </a>

            <NavigationMenu.Root className="hidden desktop:block">
              <NavigationMenu.List className="flex items-center gap-1 list-none">
                {NAV_LINKS.map((link) => (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                        isScrolled
                          ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
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
              className={`desktop:hidden relative z-50 p-2 rounded-lg transition-all duration-300 ${
                isScrolled || isMobileMenuOpen 
                  ? "text-burgundy hover:bg-burgundy/10" 
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 desktop:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-linear-to-br from-cream via-white to-cream-dark z-50 desktop:hidden shadow-2xl overflow-y-auto overflow-x-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-cream-dark/50">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Associação Amigos do Rim"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <div>
                      <span className="block text-base font-bold text-burgundy leading-tight">
                        Amigos do Rim
                      </span>
                      <span className="block text-xs text-foreground/60">
                        Menu de navegação
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-burgundy hover:bg-burgundy/10 transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 px-5 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    {NAV_LINKS.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                        className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/80 hover:bg-primary hover:text-white text-foreground font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                          {index === 0 && <Heart size={20} className="text-primary group-hover:text-white transition-colors" />}
                          {index === 1 && <Users size={20} className="text-primary group-hover:text-white transition-colors" />}
                          {index === 2 && <Calendar size={20} className="text-primary group-hover:text-white transition-colors" />}
                          {index === 3 && <Star size={20} className="text-primary group-hover:text-white transition-colors" />}
                          {index > 3 && <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors" />}
                        </div>
                        <span className="text-base flex-1">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                <div className="p-5 border-t border-cream-dark/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-linear-to-br from-burgundy to-primary rounded-2xl text-white"
                  >
                    <Heart size={20} className="mb-2 opacity-80" />
                    <h3 className="font-bold text-sm mb-2 leading-tight">Faça Parte</h3>
                    <p className="text-xs text-white/90 leading-relaxed mb-3">
                      Juntos podemos transformar vidas e apoiar pacientes renais.
                    </p>
                    <a
                      href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"  
                      onClick={handleLinkClick}
                      className="flex items-center justify-center w-full px-3 py-2 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors text-xs"
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
