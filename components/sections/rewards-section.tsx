"use client"

import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"

export default function RewardsSection() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Rewards & Benefits"
          subtitle="Exciting prizes and opportunities coming soon"
          highlight="// REWARDS"
        />

        <ScrollAnimation>
          <div className="flex items-center justify-center py-24">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold text-primary glow-text tracking-wide text-center">
              To be revealed
            </h2>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
