import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export function Header() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const isBlog = router.pathname.startsWith('/blog')

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                isHome ? 'text-blue-500' : 'text-muted-foreground'
              )}
            >
              Início
            </Link>
            <Link
              href="/blog"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                isBlog ? 'text-blue-500' : 'text-muted-foreground'
              )}
            >
              Blog
            </Link>
            <Button type="button" variant="secondary">
              Começar
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
