import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ScheduleSection from "@/components/sections/schedule-section"
import TimelineSection from "@/components/sections/timeline-section"
import SponsorsSection from "@/components/sections/sponsors-section"
import RewardsSection from "@/components/sections/rewards-section"
import RegisterSection from "@/components/sections/register-section"
import ThemeSection from "@/components/sections/theme-section"
import FaqSection from "@/components/sections/faq-section"
import GallerySection from "@/components/sections/gallery-section"
import ContactSection from "@/components/sections/contact-section"
import MatrixBackground from "@/components/features/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise-overlay scanlines">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ThemeSection />
        <ScheduleSection />
        <TimelineSection />
        <SponsorsSection />
        <RewardsSection />
        {/* <RegisterSection /> */}
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
