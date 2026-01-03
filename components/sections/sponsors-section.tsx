"use client"

import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import { ContactCTA } from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

const sponsors = [
  { name: "Sponsor 1", logo: "S1" },
  { name: "Sponsor 2", logo: "S2" },
  { name: "Sponsor 3", logo: "S3" }
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Sponsors"
          subtitle="Proudly supported by industry leaders"
          highlight="// SPONSORS"
        />

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 perspective-2000 my-12">
          {sponsors.map((sponsor, index) => (
            <ScrollAnimation key={sponsor.name} delay={100 * index}>
              <TiltCard tiltAmount={15}>
                <div className="group w-48 h-48 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]">
                  <div className="text-center">
                    <div className="font-[var(--font-orbitron)] text-3xl text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                      {sponsor.logo}
                    </div>
                    <div className="font-[var(--font-sans)] text-sm text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {sponsor.name}
                    </div>
                  </div>
                </div>
              </TiltCard>
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
              <p className="font-[var(--font-sans)] text-muted-foreground mb-6 max-w-md mx-auto relative z-10">
                Partner with us to connect with talented developers and innovators
              </p>
              <a
                onClick={() => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }}
                className="relative z-10 inline-flex px-6 py-3 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:scale-105"
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
