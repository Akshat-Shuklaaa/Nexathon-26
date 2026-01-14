"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import TiltCard from "@/components/features/tilt-card"

const venueInfo = {
  name: "Vellore Institute of Technology, Chennai",
  address: "Kelambakkam - Vandalur Road, Rajan Nagar",
  city: "Chennai, Tamil Nadu 600127",
  date: "First week of March, 2026",
  time: "10:00 AM onwards",
  mapLink:
    "https://www.google.com/maps/place/Vellore+Institute+of+Technology,+Chennai/",
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Event Schedule"
          subtitle="24 hours of non-stop innovation, learning, and creation"
          highlight="// SCHEDULE"
        />

        <ScrollAnimation className="mb-12">
          <TiltCard tiltAmount={6}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-50" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                
                {/* Venue Details */}
                <div className="space-y-4">
                  <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground">
                    {venueInfo.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-[var(--font-sans)]">
                        {venueInfo.address}, {venueInfo.city}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-[var(--font-sans)]">
                        {venueInfo.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-[var(--font-sans)]">
                        {venueInfo.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="flex-shrink-0 w-full md:w-64 h-40 md:h-32 rounded-xl overflow-hidden border border-primary/30 shadow-lg hover:scale-[1.02] transition-transform">
                  <iframe
                    title="VIT Chennai Location"
                    src="https://www.google.com/maps?q=Vellore+Institute+of+Technology+Chennai&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </div>
          </TiltCard>
        {/* Schedule Coming Soon */}
        <div className="relative py-16 overflow-hidden">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-foreground mb-3">
              Schedule Coming Soon
            </h3>

            <p className="text-muted-foreground max-w-lg mx-auto font-[var(--font-sans)]">
              We're working hard to finalize an amazing schedule for NEXATHON 2026.
              Check back soon for updates on workshops, talks, and events!
            </p>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Stay Tuned</span>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}