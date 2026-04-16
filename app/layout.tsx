import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-title',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Castelo Forte — Finanças Alinhadas ao Seu Propósito',
  description: 'Consultoria de planejamento financeiro com Método VIPE. Diagnóstico comportamental, gestão patrimonial e alinhamento de finanças com seus valores. Agende seu diagnóstico gratuito.',
  openGraph: {
    title: 'Castelo Forte — Finanças Alinhadas ao Seu Propósito',
    description: 'Consultoria de planejamento financeiro com Método VIPE.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}