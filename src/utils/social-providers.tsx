import { FacebookIcon, LinkedinIcon, SlackIcon, TwitterIcon } from 'lucide-react'

export interface ShareConfig {
  title?: string
  url: string
}

export type SocialProviderType = 'linkedin' | 'facebook' | 'slack' | 'twitter'
export type SocialProviderData = {
  name: string
  icon: React.ReactNode
  shareUrl: (data: ShareConfig) => string
}

export const SOCIAL_PROVIDERS: Record<SocialProviderType, SocialProviderData> = {
  linkedin: {
    name: 'LinkedIn',
    icon: <LinkedinIcon className="size-4" />,
    shareUrl: ({ url }: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  },
  facebook: {
    name: 'Facebook',
    icon: <FacebookIcon className="size-4" />,
    shareUrl: ({ url }: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  slack: {
    name: 'Slack',
    icon: <SlackIcon className="size-4" />,
    shareUrl: ({ url, title }: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title ?? '')}`
  },
  twitter: {
    name: 'Twitter',
    icon: <TwitterIcon className="size-4" />,
    shareUrl: ({ url, title }: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title ?? '')}`
  }
}
