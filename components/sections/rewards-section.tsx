"use client"

import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import TiltCard from "@/components/features/tilt-card"

export default function RewardsSection() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Rewards & Benefits"
          subtitle="Exciting rewards and opportunities are on the way"
          highlight="// REWARDS"
        />

        {/* Main Placeholder */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((item) => (
              <TiltCard key={item} tiltAmount={10}>
                <div className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/40 transition-all duration-300">
                  <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-foreground mb-4">
                    To Be Announced
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Rewards will be revealed soon. Stay tuned!
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Special Category Placeholder */}
        <ScrollAnimation className="mb-16">
          <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-center text-foreground mb-8">
            Special Categories
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TiltCard key={item} tiltAmount={8}>
                <div className="p-6 bg-card/50 border border-border rounded-xl text-center hover:border-primary/30 transition-all duration-300">
                  <p className="text-muted-foreground text-sm">
                    Details will be announced soon
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Benefits Placeholder */}
        <ScrollAnimation>
          <TiltCard tiltAmount={5}>
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-foreground mb-4">
                Participant Benefits
              </h3>
              <p className="text-muted-foreground text-sm">
                Participant benefits will be disclosed shortly.  
                Follow us for updates!
              </p>
            </div>
          </TiltCard>
        </ScrollAnimation>
      </div>
    </section>
  )
}
