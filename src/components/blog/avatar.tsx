import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

function AvatarContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3">{children}</div>
}

function AvatarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

function AvatarDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-gray-300 text-body-xs">{children}</div>
}

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize
}

const avatarSize: Record<AvatarSize, string> = {
  xs: 'size-5',
  sm: 'size-9'
}

function AvatarImage({ src, alt, size = 'xs', className, ...props }: AvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-blue-200 border-[1px]',
        avatarSize[size]
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        draggable="false"
        className={cn('object-cover', className)}
        {...props}
      />
    </div>
  )
}

function AvatarTitle({ children }: { children: React.ReactNode }) {
  return <strong className="text-body-sm text-gray-200">{children}</strong>
}

export const Avatar = {
  Container: AvatarContainer,
  Content: AvatarContent,
  Description: AvatarDescription,
  Image: AvatarImage,
  Title: AvatarTitle
}
