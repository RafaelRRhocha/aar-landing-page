import Image from 'next/image';
import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants';

import { Container } from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-burgundy-dark overflow-hidden text-white"
    >
      <Container>
        <div className="desktop:grid-cols-4 grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 sm:gap-12 sm:py-16">
          <div className="desktop:col-span-1 sm:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Associação Amigos do Rim"
                width={48}
                height={48}
                className="h-10 w-10 brightness-0 invert sm:h-12 sm:w-12"
              />
              <span className="text-lg font-bold sm:text-xl">
                Amigos do Rim
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Associação sem fins lucrativos dedicada ao apoio e cuidado de
              pacientes renais crônicos e seus familiares desde 2010 em Campos
              dos Goytacazes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
              Contato
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white/60" />
                <span className="text-sm text-white/70">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-white/60" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-white/60" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm break-all text-white/70 transition-colors hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
              Apoie Nossa Causa
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Sua contribuição ajuda a manter nossos serviços e ampliar o
              atendimento aos pacientes renais.
            </p>
            <a
              href={`https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            >
              <Heart size={16} />
              Entre em Contato
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 sm:py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <p className="text-center text-xs text-white/50 sm:text-left sm:text-sm">
              © {currentYear} Associação Amigos do Rim. Todos os direitos
              reservados.
            </p>
            <p className="flex items-center gap-1 text-xs text-white/50 sm:text-sm">
              Feito com <Heart size={14} className="text-primary" /> para quem
              cuida
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
