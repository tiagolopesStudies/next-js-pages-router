import Link from 'next/link'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/terms" className="hover:text-blue-200">
              Termos de uso
            </Link>
            <Link href="/privacy" className="hover:text-blue-200">
              Políticas de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
