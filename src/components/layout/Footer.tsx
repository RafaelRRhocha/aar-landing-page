import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";
import { Container } from "../ui/Container";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-burgundy-dark text-white overflow-hidden">
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2 desktop:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Associação Amigos do Rim"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 brightness-0 invert"
              />
              <span className="text-lg sm:text-xl font-bold">Amigos do Rim</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Associação sem fins lucrativos dedicada ao apoio e cuidado de
              pacientes renais crônicos e seus familiares desde 2010.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white/60 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white/60 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white/60 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Apoie Nossa Causa</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Sua contribuição ajuda a manter nossos serviços e ampliar o
              atendimento aos pacientes renais.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              <Heart size={16} />
              Fazer Doação
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Associação Amigos do Rim. Todos os direitos
              reservados.
            </p>
            <p className="text-white/50 text-xs sm:text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-primary" /> para quem
              cuida
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

