import { Inter, PT_Sans_Caption } from 'next/font/google'
import { CallToAction } from '../landing-page/call-to-action'
import { Footer } from './footer'
import { Header } from './header'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--pt-sans-caption'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--inter'
})

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.variable} ${ptSansCaption.variable} font-inter relative flex flex-col min-h-screen bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  )
}
