import { useCallback, useMemo } from 'react'
import {
  type ShareConfig,
  SOCIAL_PROVIDERS,
  type SocialProviderType
} from '@/utils/social-providers'

interface UseShareProps extends ShareConfig {
  text?: string
}

export function useShare({ url, title, text }: UseShareProps) {
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text })
    }),
    [url, title, text]
  )

  const share = useCallback(
    (provider: SocialProviderType) => {
      const providerConfig = SOCIAL_PROVIDERS[provider]

      const shareUrl = providerConfig.shareUrl(shareConfig)
      const shareWindow = window.open(
        shareUrl,
        '_blank',
        'width=600,height=600,location=yes,status=yes'
      )

      return shareWindow !== null
    },
    [shareConfig]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProviderType)
      }))
    ],
    [share]
  )

  return {
    shareButtons
  }
}
