import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Echelon Mechanics | Quantitative Execution Infrastructure',
  description: 'Systematic execution infrastructure engineered by quantitative traders. Deterministic signal generation and direct exchange API routing.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080C14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-canvas text-textMain font-sans antialiased selection:bg-emeraldAccent/20 selection:text-emeraldAccent min-h-screen">
        {children}
      </body>
    </html>
  );
}
