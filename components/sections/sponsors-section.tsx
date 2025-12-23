"use client"

import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

const sponsorTiers = [
  {
    tier: "Platinum Partners",
    sponsors: [
      { name: "Sponsor 1", logo: "S1" },
      { name: "Sponsor 2", logo: "S2" },
    ],
    size: "large",
  },
  {
    tier: "Gold Partners",
    sponsors: [
      { name: "Sponsor 3", logo: "S3" },
      { name: "Sponsor 4", logo: "S4" },
      { name: "Sponsor 5", logo: "S5" },
    ],
    size: "medium",
  },
  {
    tier: "Silver Partners",
    sponsors: [
      { name: "Sponsor 6", logo: "S6" },
      { name: "Sponsor 7", logo: "S7" },
      { name: "Sponsor 8", logo: "S8" },
      { name: "Sponsor 9", logo: "S9" },
    ],
    size: "small",
  },
  {
    tier: "Community Partners",
    sponsors: [
      { name: "Partner 1", logo: "P1" },
      { name: "Partner 2", logo: "P2" },
      { name: "Partner 3", logo: "P3" },
      { name: "Partner 4", logo: "P4" },
      { name: "Partner 5", logo: "P5" },
    ],
    size: "small",
  },
]

export default function SponsorsSection() {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "w-40 h-40 md:w-48 md:h-48"
      case "medium":
        return "w-32 h-32 md:w-40 md:h-40"
      default:
        return "w-24 h-24 md:w-32 md:h-32"
    }
  }

  return (
    <section id="sponsors" className="relative py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Sponsors"
          subtitle="Powered by industry leaders who believe in fostering innovation"
          highlight="// SPONSORS"
        />

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <ScrollAnimation key={tier.tier} delay={100 * (tierIndex + 1)}>
              <div className="text-center">
                <h3 className="font-[var(--font-rajdhani)] text-xl font-semibold text-primary mb-8 neon-flicker">
                  {tier.tier}
                </h3>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 perspective-2000">
                  {tier.sponsors.map((sponsor, index) => (
                    <TiltCard key={sponsor.name} tiltAmount={15}>
                      <div
                        className={`group ${getSizeClasses(tier.size)} bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] holographic`}
                      >
                        <div className="text-center preserve-3d">
                          <div className="font-[var(--font-orbitron)] text-2xl md:text-3xl text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                            {sponsor.logo}
                          </div>
                          <div className="font-[var(--font-sans)] text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {sponsor.name}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <ScrollAnimation delay={500} className="mt-16 text-center">
          <TiltCard tiltAmount={8}>
            <div className="inline-block p-8 bg-card border border-border rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-foreground mb-4 relative z-10">
                Become a Sponsor
              </h3>
              <p className="font-[var(--font-sans)] text-muted-foreground mb-6 max-w-md relative z-10">
                Partner with us to connect with 500+ talented developers and innovators
              </p>
              <a
                href="#contact"
                className="relative z-10 inline-flex px-6 py-3 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:scale-105 shimmer"
              >
                Get Sponsorship Deck
              </a>
            </div>
          </TiltCard>
        </ScrollAnimation>
      </div>
    </section>
  )
}
