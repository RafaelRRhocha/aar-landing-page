import {
  Brain,
  Apple,
  Dumbbell,
  Users,
  Scale,
  BookOpen,
  Heart,
  Megaphone,
  Building2,
  Award,
  Medal,
  Trophy,
  Handshake,
  ShieldCheck,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#nossa-atuacao", label: "Nossa Atuação" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#arte-cultura", label: "Arte e Cultura" },
  { href: "#impacto", label: "Impacto" },
  { href: "#contato", label: "Contato" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Brain,
    title: "Psicologia",
    description:
      "Atendimento psicológico individual e em grupo para pacientes e familiares, promovendo bem-estar mental durante o tratamento.",
  },
  {
    icon: Apple,
    title: "Nutrição",
    description:
      "Orientação nutricional especializada para pacientes renais, com foco em qualidade de vida e saúde.",
  },
  {
    icon: Dumbbell,
    title: "Fisioterapia e Pilates",
    description:
      "Atividades físicas adaptadas para fortalecimento e manutenção da mobilidade dos pacientes.",
  },
  {
    icon: Users,
    title: "Serviço Social",
    description:
      "Atendimento social para garantir acesso a direitos e benefícios, apoiando pacientes e suas famílias.",
  },
  {
    icon: Scale,
    title: "Apoio Jurídico",
    description:
      "Suporte jurídico para garantia de direitos, como transporte gratuito para tratamento.",
  },
  {
    icon: BookOpen,
    title: "Educação em Saúde",
    description:
      "Jornadas de capacitação para estudantes e profissionais das universidades públicas como UENF e UFF.",
  },
];

export const IMPACT_AREAS = [
  {
    icon: Heart,
    title: "Mobilização Social",
    description:
      "Campanhas anuais pelo Dia Mundial do Rim e pelo Dia Nacional da Doação de Órgãos.",
  },
  {
    icon: Megaphone,
    title: "Atuação Política",
    description:
      "Articulações junto a órgãos públicos para garantir melhores condições de cuidado e tratamento.",
  },
  {
    icon: Building2,
    title: "Parcerias Institucionais",
    description:
      "Colaboração com hospitais, universidades e entidades para ampliar o impacto social.",
  },
];

export interface EventData {
  id: string;
  title: string;
  description: string;
  folder: string;
  featured?: boolean;
}

export const EVENTS_DATA: EventData[] = [
  {
    id: "baile",
    title: "Baile de Luzes",
    description: "Evento beneficente tradicional com música e dança, promovendo integração e arrecadação de fundos.",
    folder: "baile",
    featured: true,
  },
  {
    id: "trianon",
    title: "Teatro Trianon",
    description: "11 eventos promovidos no Teatro Trianon com cantores locais, unindo arte e solidariedade.",
    folder: "eventotrianon",
    featured: true,
  },
  {
    id: "dia-mundial-rim",
    title: "Dia Mundial do Rim 2025",
    description: "Campanha anual de conscientização com ações de prevenção e exames gratuitos.",
    folder: "diamundialdorim2025",
    featured: true,
  },
  {
    id: "confraternizacao",
    title: "Confraternização de Final de Ano",
    description: "Celebração de encerramento do ano com pacientes, familiares e voluntários.",
    folder: "confraternizaofinaldeano",
    featured: true,
  },
  {
    id: "doacao-orgaos",
    title: "Dia Nacional da Doação de Órgãos",
    description: "Campanha de incentivo à doação de órgãos realizada em 27 de setembro.",
    folder: "doeorgaos",
  },
  {
    id: "conscientizacao-doacao",
    title: "Campanha de Conscientização",
    description: "Ações de conscientização sobre a importância da doação de órgãos e tecidos.",
    folder: "campanhaconscientizaodianacionaldedoaodergos",
  },
];

export interface GalleryCategory {
  id: string;
  title: string;
  folder: string;
  description: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "atendimentos",
    title: "Atendimentos",
    folder: "atendimentos",
    description: "Consultas multidisciplinares com profissionais voluntários",
  },
  {
    id: "pilates",
    title: "Pilates e Fisioterapia",
    folder: "pilates_e_fisioterapia",
    description: "Atividades físicas adaptadas para pacientes renais",
  },
  {
    id: "pintura",
    title: "Oficinas de Arte",
    folder: "aulapinturaemtelaepinturaemtelha",
    description: "Aulas de pintura em tela e telha para expressão criativa",
  },
  {
    id: "aromaterapia",
    title: "Aromaterapia",
    folder: "aulaaromaterapia",
    description: "Sessões de aromaterapia para bem-estar e relaxamento",
  },
  {
    id: "uenf",
    title: "Parceria UENF",
    folder: "aulaparceriauenfcaminhosdebarro",
    description: "Oficinas em parceria com a UENF - Caminhos de Barro",
  },
  {
    id: "reunioes",
    title: "Reuniões",
    folder: "reunioes",
    description: "Encontros de planejamento e organização da associação",
  },
];

export interface Recognition {
  icon: LucideIcon;
  title: string;
  description: string;
  year?: string;
}

export const RECOGNITIONS: Recognition[] = [
  {
    icon: Building2,
    title: "Clínica Regional de Hemodiálise",
    description:
      "Criação da Clínica 'Amigos do Rim – Francisco Paes Filho – Nefro Campos', em anexo ao Hospital Geral de Guarus (HGG).",
    year: "2024",
  },
  {
    icon: Trophy,
    title: "Utilidade Pública Municipal",
    description:
      "Declaração de Utilidade Pública através da Lei nº 8.751, de 19 de maio de 2017.",
    year: "2017",
  },
  {
    icon: Award,
    title: "Moções de Aplausos",
    description:
      "Múltiplas homenagens da Câmara Municipal de Campos dos Goytacazes pelo trabalho social.",
  },
  {
    icon: Medal,
    title: "Prioridade na Vacinação COVID-19",
    description:
      "Conquista histórica: inclusão dos pacientes renais no grupo prioritário de vacinação durante a pandemia.",
    year: "2021",
  },
];

export const MISSION_VISION_VALUES = {
  mission:
    "Promover qualidade de vida, dignidade e inclusão social para pacientes renais crônicos e seus familiares, oferecendo atendimento humanizado e suporte multidisciplinar.",
  vision:
    "Ser referência regional no cuidado integral ao paciente renal, fortalecendo ações de prevenção, tratamento, apoio social e mobilização comunitária.",
  values: [
    { icon: Handshake, label: "Solidariedade" },
    { icon: ShieldCheck, label: "Ética" },
    { icon: Users, label: "Inclusão" },
    { icon: Heart, label: "Respeito à Vida" },
    { icon: Sparkles, label: "Compromisso Social" },
  ],
};

export const IMPACT_NUMBERS = {
  yearsOfOperation: 15,
  totalRegistered: 1039,
  activePatients: 250,
  trianonEvents: 11,
  tropicalNights: 4,
};

export const CONTACT_INFO = {
  address: "Rua Marechal Deodoro, 122, sala 01 - Centro, Campos dos Goytacazes - RJ",
  phone: "(22) 99929-7714",
  email: "presidenciaamigosdorim@gmail.com",
  socialMedia: {
    facebook: "https://facebook.com/amigosdorim",
    instagram: "https://instagram.com/amigosdorim",
    youtube: "https://youtube.com/@amigosdorim",
  },
};
