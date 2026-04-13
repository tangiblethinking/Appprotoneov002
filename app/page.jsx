import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { MetricsBar } from '../components/MetricsBar'
import { AboutTeaser } from '../components/AboutTeaser'
import { WorkPreview } from '../components/WorkPreview'
import { CapabilitiesSection } from '../components/CapabilitiesSection'
import { CTASection } from '../components/CTASection'
import { Cursor } from '../components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <HeroSection />
        <MetricsBar />
        <AboutTeaser />
        <WorkPreview />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
