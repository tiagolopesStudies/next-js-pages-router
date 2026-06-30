import { allPosts } from '.contentlayer/generated'
import { LandingPage } from '@/components/landing-page'

export default function HomePage() {
  console.log(allPosts)

  return <LandingPage />
}
