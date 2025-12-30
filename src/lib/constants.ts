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
  Stethoscope,
  Calendar,
  Droplets,
  Gift,
  Theater,
  Music,
  Palette,
  Award,
  Medal,
  Trophy,
  Star,
  LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#nossa-atuacao", label: "Nossa Atuação" },
  { href: "#atividades", label: "Atividades" },
  { href: "#arte-cultura", label: "Arte e Cultura" },
  { href: "#reconhecimentos", label: "Reconhecimentos" },
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
      "Suporte emocional e psicológico para pacientes e familiares, promovendo bem-estar mental durante o tratamento.",
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
      "Assistência social para garantir acesso a direitos e benefícios, apoiando pacientes e suas famílias.",
  },
  {
    icon: Scale,
    title: "Apoio Jurídico",
    description:
      "Orientação jurídica gratuita sobre direitos dos pacientes renais crônicos.",
  },
  {
    icon: BookOpen,
    title: "Educação em Saúde",
    description:
      "Palestras e oficinas educativas sobre prevenção, tratamento e qualidade de vida.",
  },
];

export const IMPACT_AREAS = [
  {
    icon: Heart,
    title: "Mobilização Social",
    description:
      "Campanhas de conscientização e engajamento da comunidade em prol da saúde renal.",
  },
  {
    icon: Megaphone,
    title: "Atuação Política",
    description:
      "Representação institucional e advocacy pelos direitos dos pacientes renais.",
  },
  {
    icon: Building2,
    title: "Parcerias Institucionais",
    description:
      "Colaboração com órgãos públicos, hospitais e entidades para ampliar o impacto social.",
  },
];

export interface Activity {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: "medical-care",
    icon: Stethoscope,
    title: "Atendimentos",
    description:
      "Consultas multidisciplinares gratuitas com profissionais voluntários de diversas especialidades.",
  },
  {
    id: "world-kidney-day",
    icon: Calendar,
    title: "Dia Mundial do Rim",
    description:
      "Evento anual de conscientização com ações de prevenção, exames gratuitos e palestras educativas.",
  },
  {
    id: "prevention-campaigns",
    icon: Droplets,
    title: "Campanhas de Prevenção e Doação de Sangue",
    description:
      "Iniciativas regulares para conscientização sobre doenças renais e incentivo à doação de sangue.",
  },
  {
    id: "organ-donation-day",
    icon: Heart,
    title: "Dia Nacional da Doação de Órgãos",
    description:
      "Celebração e conscientização sobre a importância da doação de órgãos para salvar vidas.",
  },
  {
    id: "charity-events",
    icon: Gift,
    title: "Eventos Beneficentes",
    description:
      "Bailes, jantares e eventos culturais para arrecadação de fundos e integração da comunidade.",
  },
  {
    id: "teatro-trianon",
    icon: Theater,
    title: "Teatro Trianon",
    description:
      "Apresentações teatrais beneficentes que unem arte, cultura e solidariedade.",
  },
  {
    id: "craft-classes",
    icon: Palette,
    title: "Oficinas de Artesanato",
    description:
      "Aulas de artesanato que promovem integração, terapia ocupacional e geração de renda.",
  },
  {
    id: "pilates",
    icon: Dumbbell,
    title: "Pilates",
    description:
      "Aulas de pilates adaptadas para pacientes renais, promovendo saúde física e bem-estar.",
  },
  {
    id: "honors-awards",
    icon: Award,
    title: "Honrarias e Prêmios",
    description:
      "Reconhecimentos recebidos pela associação por seu trabalho social e comunitário.",
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
    icon: Award,
    title: "Moções de Aplausos",
    description:
      "Reconhecimento da Câmara Municipal pelo trabalho social desenvolvido junto à comunidade.",
  },
  {
    icon: Medal,
    title: "Medalha Benta Pereira",
    description:
      "Honraria concedida a cidadãos e instituições que se destacam por serviços prestados à sociedade.",
  },
  {
    icon: Building2,
    title: "Clínica Regional de Hemodiálise Amigos do Rim",
    description:
      "Conquista de uma clínica de hemodiálise que atende pacientes da região com excelência.",
  },
  {
    icon: Trophy,
    title: "Utilidade Pública",
    description:
      "Reconhecimento oficial como entidade de utilidade pública municipal e estadual.",
  },
];

export const ART_CULTURE_ITEMS = [
  {
    icon: Music,
    title: "Dança",
    description: "Aulas e apresentações de dança como forma de expressão e terapia.",
  },
  {
    icon: Palette,
    title: "Pintura",
    description: "Oficinas de pintura e artes visuais para desenvolvimento criativo.",
  },
  {
    icon: Theater,
    title: "Teatro",
    description: "Apresentações e oficinas teatrais que promovem cultura e integração.",
  },
];

export const MISSION_VISION_VALUES = {
  mission:
    "Promover qualidade de vida e dignidade aos pacientes renais crônicos e seus familiares através de apoio multidisciplinar, educação em saúde e mobilização social.",
  vision:
    "Ser referência no apoio a pacientes renais, contribuindo para uma sociedade mais consciente e solidária em relação às doenças renais.",
  values: [
    { icon: Heart, label: "Humanidade" },
    { icon: Users, label: "Solidariedade" },
    { icon: Star, label: "Compromisso" },
    { icon: Scale, label: "Ética" },
  ],
};

export const CONTACT_INFO = {
  address: "Rua Exemplo, 123 - Centro, Campos dos Goytacazes - RJ",
  phone: "(22) 9999-9999",
  email: "contato@amigasdorim.org.br",
  socialMedia: {
    facebook: "https://facebook.com/amigasdorim",
    instagram: "https://instagram.com/amigasdorim",
    youtube: "https://youtube.com/@amigasdorim",
  },
};

