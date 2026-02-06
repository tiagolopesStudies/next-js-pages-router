import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export function ActiveLink({ children, href, className, ...props }: ActiveLinkProps) {
  const router = useRouter()
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === props.as ||
    router.asPath.startsWith(String(props.as))

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
