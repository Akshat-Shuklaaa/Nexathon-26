"use client"

import { useEffect, useState } from "react"
import { Calendar, CheckCircle, Clock, Rocket, Users, Trophy, Zap } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"
import { Timeline } from "@/components/ui/timeline"

const timelineData = [
  {
    title: "Feb 1",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Rocket className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">Registration Opens</h4>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          Early bird registration begins with special perks for first 100 teams. Secure your spot and get exclusive
          merchandise!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.78_0.22_145/0.15)]">
            <CheckCircle className="w-5 h-5 text-primary mb-2" />
            <p className="text-sm text-foreground font-[var(--font-rajdhani)] font-semibold">Early Bird Discount</p>
            <p className="text-xs text-muted-foreground">Save 30% on registration</p>
          </div>
          <div className="p-4 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.78_0.22_145/0.15)]">
            <Trophy className="w-5 h-5 text-secondary mb-2" />
            <p className="text-sm text-foreground font-[var(--font-rajdhani)] font-semibold">Bonus Swag</p>
            <p className="text-xs text-muted-foreground">Exclusive merch pack</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Feb 15",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-secondary/20 rounded-lg">
            <Clock className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">Early Bird Deadline</h4>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          Last day for early bird discounts and bonus swag packages. Don&apos;t miss out on these exclusive benefits!
        </p>
        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-[var(--font-rajdhani)] font-semibold text-foreground">
              Limited Time Offer
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Teams registering before this date receive priority workshop access and mentor matching.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Mar 1",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/20 rounded-lg animate-pulse">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">Team Formation Deadline</h4>
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-[var(--font-rajdhani)]">
              Current Phase
            </span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          Finalize your team of 2-4 members or join the team matching pool. We&apos;ll help solo participants find their
          perfect team!
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Team size: 2-4 members</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Solo participants can use team matching</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Cross-college teams allowed</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mar 10",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-destructive/20 rounded-lg">
            <Calendar className="w-5 h-5 text-destructive" />
          </div>
          <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">Registration Closes</h4>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          Last day to register your team for NEXATHON 2026. No late registrations will be accepted after this date.
        </p>
        <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
          <p className="text-sm text-destructive font-[var(--font-rajdhani)] font-semibold">Important Notice</p>
          <p className="text-xs text-muted-foreground mt-1">
            All team members must verify their registration via email before the deadline.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Mar 14",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-secondary/20 rounded-lg">
            <Zap className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">Pre-Event Briefing</h4>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          Online session covering rules, themes, judging criteria, and logistics. Mandatory for all team leads.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="text-sm font-[var(--font-jetbrains)] text-foreground">7:00 PM IST</p>
          </div>
          <div className="p-3 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground">Platform</p>
            <p className="text-sm font-[var(--font-jetbrains)] text-foreground">Google Meet</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mar 15-17",
    content: (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
            <Trophy className="w-5 h-5 text-background" />
          </div>
          <h4 className="text-xl font-bold text-foreground font-[var(--font-rajdhani)]">NEXATHON 2026</h4>
        </div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 font-[var(--font-sans)]">
          24 hours of hacking, building, and innovating! The main event where dreams become reality.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl shadow-[0_0_30px_oklch(0.78_0.22_145/0.1)]">
            <p className="text-2xl font-bold text-primary font-[var(--font-orbitron)]">24</p>
            <p className="text-xs text-muted-foreground">Hours of Hacking</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-xl shadow-[0_0_30px_oklch(0.78_0.18_195/0.1)]">
            <p className="text-2xl font-bold text-secondary font-[var(--font-orbitron)]">500+</p>
            <p className="text-xs text-muted-foreground">Participants</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-xl shadow-[0_0_30px_oklch(0.78_0.20_170/0.1)]">
            <p className="text-2xl font-bold text-accent font-[var(--font-orbitron)]">50+</p>
            <p className="text-xs text-muted-foreground">Mentors</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl shadow-[0_0_30px_oklch(0.78_0.22_145/0.1)]">
            <p className="text-2xl font-bold text-primary font-[var(--font-orbitron)]">₹5L+</p>
            <p className="text-xs text-muted-foreground">Prize Pool</p>
          </div>
        </div>
      </div>
    ),
  },
]

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_oklch(0.78_0.22_145/0.3)]">
        <span className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-primary relative z-10">
          {value}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.22_145/0.15),transparent_70%)]" />
      </div>
      <span className="font-[var(--font-rajdhani)] text-xs md:text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export default function TimelineSection() {
  const [countdown, setCountdown] = useState({ days: "84", hours: "12", minutes: "45", seconds: "30" })

  useEffect(() => {
    const targetDate = new Date("2026-02-07T23:59:59").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        })
      }
    }

    const interval = setInterval(updateCountdown, 1000)
    updateCountdown()

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="timeline" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Registration Timeline"
          subtitle="Important dates you don't want to miss"
          highlight="// TIMELINE"
        />

        {/* Countdown with 3D effect */}
        <ScrollAnimation className="mb-16">
          <TiltCard tiltAmount={6}>
            <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-30" />
              <div className="absolute inset-0 scanlines opacity-20" />
              <h3 className="font-[var(--font-rajdhani)] text-lg text-muted-foreground mb-4 relative z-10">
                Registration Closes In
              </h3>
              <div className="flex justify-center gap-4 md:gap-8 relative z-10">
                <CountdownUnit value={countdown.days} label="Days" />
                <CountdownUnit value={countdown.hours} label="Hours" />
                <CountdownUnit value={countdown.minutes} label="Minutes" />
                <CountdownUnit value={countdown.seconds} label="Seconds" />
              </div>
            </div>
          </TiltCard>
        </ScrollAnimation>

        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
