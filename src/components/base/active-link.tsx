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
        'text-action-sm transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
