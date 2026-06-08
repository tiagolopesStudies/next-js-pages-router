import { CallToAction } from './call-to-action'
import { CustomerStorySection } from './customer-story-section'
import { FeatureSection } from './feature-section'
import { HeroSection } from './hero-section'
import { SupportSection } from './support-section'

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}
