import { Inter, PT_Sans_Caption } from 'next/font/google'
import { Footer } from './footer'
import { Header } from './header'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--pt-sans-caption'
})

interface LayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.variable} relative flex flex-col min-h-screen bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
      <Footer />
    </div>
  )
}
