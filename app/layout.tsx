import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileStickyCta from '@/components/layout/MobileStickyCta';
import { AiAssistantProvider } from '@/components/ai/AiAssistantContext';
import AiChatDrawer from '@/components/ai/AiChatDrawer';
import AiVoiceCallModal from '@/components/ai/AiVoiceCallModal';
import AiFloatingTrigger from '@/components/ai/AiFloatingTrigger';
import { SITE_CONFIG } from '@/constants/data';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'EliteMetal Roofing | Premium Architectural Metal Roofing',
    template: '%s | EliteMetal Roofing',
  },
  description:
    'Roofing designed to last. Crafted to be seen. Precision-engineered standing seam, architectural zinc, copper, and commercial metal roofing systems.',
  keywords: [
    'Metal Roofing',
    'Standing Seam',
    'Architectural Metal',
    'Residential Metal Roofing',
    'Commercial Metal Roofing',
    'Copper Roofing',
    'Zinc Roofing',
    'Luxury Roofing Contractor',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: 'EliteMetal Roofing | Premium Architectural Metal Roofing',
    description:
      'Roofing designed to last. Crafted to be seen. Precision-engineered standing seam, zinc, copper, and commercial metal envelopes.',
    type: 'website',
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EliteMetal Roofing | Premium Architectural Metal Roofing',
    description:
      'Roofing designed to last. Crafted to be seen. Precision-engineered standing seam, zinc, copper, and commercial metal envelopes.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${manrope.variable}`}>
      <body className="bg-background text-on-surface antialiased selection:bg-tertiary-container selection:text-tertiary min-h-screen flex flex-col font-sans">
        <AiAssistantProvider>
          <Header />
          <main className="flex-1 w-full pt-20 bg-background">{children}</main>
          <Footer />
          <MobileStickyCta />
          <AiChatDrawer />
          <AiVoiceCallModal />
          <AiFloatingTrigger />
        </AiAssistantProvider>
      </body>
    </html>
  );
}
