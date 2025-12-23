"use client"

import { Trophy, Medal, Award, Gift, Star, Zap } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"
import AnimatedCounter from "@/components/features/animated-counter"

const mainPrizes = [
  {
    position: "1st Place",
    prize: 200000,
    icon: Trophy,
    color: "from-yellow-500 to-amber-600",
    benefits: ["Cash Prize", "Internship Opportunities", "Goodies & Swag", "Certificate"],
  },
  {
    position: "2nd Place",
    prize: 100000,
    icon: Medal,
    color: "from-gray-300 to-gray-400",
    benefits: ["Cash Prize", "Mentorship Sessions", "Goodies & Swag", "Certificate"],
  },
  {
    position: "3rd Place",
    prize: 50000,
    icon: Award,
    color: "from-amber-600 to-orange-700",
    benefits: ["Cash Prize", "Course Vouchers", "Goodies & Swag", "Certificate"],
  },
]

const specialPrizes = [
  { title: "Best AI/ML Project", prize: "₹25,000", icon: Zap },
  { title: "Best Web3 Project", prize: "₹25,000", icon: Star },
  { title: "Best UI/UX Design", prize: "₹15,000", icon: Gift },
  { title: "Best First-Time Hackers", prize: "₹15,000", icon: Award },
  { title: "Best Social Impact", prize: "₹20,000", icon: Trophy },
  { title: "People's Choice Award", prize: "₹10,000", icon: Medal },
]

const benefits = [
  "Free meals and refreshments throughout the event",
  "Access to premium APIs and cloud credits",
  "Networking with industry professionals",
  "Exclusive swag and goodies for all participants",
  "Certificate of participation",
  "Interview opportunities with sponsor companies",
]

export default function RewardsSection() {
  return (
    <section id="rewards" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Rewards & Benefits"
          subtitle="Compete for prizes worth ₹5,00,000+ and unlock amazing opportunities"
          highlight="// REWARDS"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16 perspective-2000">
          {mainPrizes.map((prize, index) => (
            <ScrollAnimation key={prize.position} delay={100 * (index + 1)}>
              <TiltCard tiltAmount={12} className={index === 0 ? "md:-translate-y-4" : ""}>
                <div className="relative group p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(0,255,136,0.2)]">
                  {index === 0 && (
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-sm -z-10 animate-pulse" />
                  )}

                  <div className="text-center">
                    <div
                      className={`inline-flex w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 preserve-3d`}
                    >
                      <prize.icon className="w-10 h-10 text-background" />
                    </div>
                    <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-foreground mb-2">
                      {prize.position}
                    </h3>
                    <div className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-primary mb-4">
                      <AnimatedCounter end={prize.prize} prefix="₹" className="glow-text" />
                    </div>
                    <ul className="space-y-2 stagger-children">
                      {prize.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="font-[var(--font-sans)] text-sm text-muted-foreground flex items-center justify-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* Special Category Prizes */}
        <ScrollAnimation className="mb-16">
          <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-center text-foreground mb-8">
            Special Category Prizes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialPrizes.map((prize, index) => (
              <TiltCard key={prize.title} tiltAmount={8}>
                <div className="group flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl hover:border-primary/30 transition-all duration-300 hover:bg-card shimmer">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <prize.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-[var(--font-rajdhani)] font-semibold text-foreground">{prize.title}</h4>
                    <p className="font-[var(--font-orbitron)] text-primary font-bold">{prize.prize}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Benefits for All */}
        <ScrollAnimation>
          <TiltCard tiltAmount={5}>
            <div className="bg-card border border-border rounded-2xl p-8 holographic">
              <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-center text-foreground mb-8">
                Benefits for All Participants
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-[var(--font-sans)] text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </ScrollAnimation>
      </div>
    </section>
  )
}
