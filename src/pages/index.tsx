import { HeroSection } from '@/components/base/hero-section'
import { FeatureSection } from '@/components/feature-section'

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
    </article>
  )
}
