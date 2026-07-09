import Image, { type ImageProps } from 'next/image'

function AvatarContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3">{children}</div>
}

function AvatarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

function AvatarDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-gray-300 text-body-xs">{children}</div>
}

function AvatarImage({ src, alt, width = 40, height = 40, ...props }: ImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />
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
