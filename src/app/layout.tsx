import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Associação Amigos do Rim - AAR',
  description:
    'Organização voluntária dedicada ao apoio e cuidado de pessoas com doenças renais. Juntos pelos renais desde 2010.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Associação Amigos do Rim - AAR',
    description:
      'Organização voluntária dedicada ao apoio e cuidado de pessoas com doenças renais. Juntos pelos renais desde 2010.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Associação Amigos do Rim',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo da Associação Amigos do Rim',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
