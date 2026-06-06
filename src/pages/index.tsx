import { CallToAction } from './_components/call-to-action'
import { CustomerStorySection } from './_components/customer-story-section'
import { FeatureSection } from './_components/feature-section'
import { HeroSection } from './_components/hero-section'
import { SupportSection } from './_components/support-section'

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}
