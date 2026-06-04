import { FeatureSection } from '@/components/base/feature-section'
import { HeroSection } from '@/components/base/hero-section'
import { SupportSection } from '@/components/base/support-section'

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
    </article>
  )
}
