import { useCallback, useMemo } from 'react'
import {
  type ShareConfig,
  SOCIAL_PROVIDERS,
  type SocialProviderType
} from '@/utils/social-providers'
import { useClipboard } from './use-clipboard'

interface UseShareProps extends ShareConfig {
  text?: string
  clipboardTimeout?: number
}

export function useShare({ url, title, text, clipboardTimeout }: UseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })

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
      if (provider === 'clipboard') {
        return handleCopy(url)
      }

      const providerConfig = SOCIAL_PROVIDERS[provider]

      const shareUrl = providerConfig.shareUrl(shareConfig)
      const shareWindow = window.open(
        shareUrl,
        '_blank',
        'width=600,height=600,location=yes,status=yes'
      )

      return shareWindow !== null
    },
    [shareConfig, handleCopy, url]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => {
        let providerName: string | undefined
        if (key === 'clipboard') {
          providerName = isCopied ? 'Link copiado!' : 'Copiar link'
        }

        return {
          provider: key,
          name: providerName ?? provider.name,
          icon: provider.icon,
          action: () => share(key as SocialProviderType)
        }
      })
    ],
    [share, isCopied]
  )

  return {
    shareButtons
  }
}
