"use client"

import { Calendar, Clock } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import { ContactCTA } from "@/components/features/contact-cta"
import { SimpleContactCta } from "@/components/features/simple-contact-cta"
import Link from "next/link"

// Timeline data is temporarily commented out until the schedule is finalized
// To uncomment, remove the /* and */ at the start and end of this block
/*
const timelineData = [
  // ... timeline data items ...
]
*/

// Countdown component (commented out for now)
/*
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
*/

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Event Timeline"
          subtitle="We're currently finalizing the schedule for NEXATHON 2026"
          highlight="// TIMELINE"
        />

        <div className="relative py-16 overflow-hidden">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-foreground mb-3">
              Timeline Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto font-[var(--font-sans)] mb-8">
              We're working on an exciting schedule for NEXATHON 2026. 
              Check back soon for updates on key dates, workshops, and important milestones!
            </p>
            <div className="mt-6">
              <SimpleContactCta>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Stay Updated</span>
                </button>
              </SimpleContactCta>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ContactCTA>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Interested in NEXATHON 2026?</h3>
            <p className="text-muted-foreground mb-6">Be the first to know when registration opens and the schedule is released.</p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Notified
            </button>
          </ContactCTA>
        </div>
      </div>
    </section>
  )
}
