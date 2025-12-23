"use client"

import { Calendar, Clock, MapPin, Coffee, Code, Presentation, Award } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

const scheduleData = [
  {
    day: "Hackathon Day - March 8",
    events: [
      { time: "09:00 AM", title: "Registration & Check-in", icon: Calendar, description: "Get your badges and swag" },
      { time: "10:00 AM", title: "Opening Ceremony", icon: Presentation, description: "Keynote & rules announcement" },
      { time: "11:00 AM", title: "Hacking Begins!", icon: Code, description: "Start building your projects" },
      { time: "01:00 PM", title: "Lunch Break", icon: Coffee, description: "Networking lunch" },
      { time: "03:00 PM", title: "Workshop 1: Tech Stack Deep Dive", icon: Presentation, description: "Hands-on workshop" },
      { time: "07:00 PM", title: "Dinner", icon: Coffee, description: "Evening refreshments" },
      { time: "10:00 PM", title: "Midnight Snacks", icon: Coffee, description: "Late night coding fuel" },
      { time: "02:00 AM", title: "Night Owl Check-in", icon: Code, description: "Progress updates" },
    ],
  },
  {
    day: "Finale - March 9",
    events: [
      { time: "07:00 AM", title: "Sunrise Breakfast", icon: Coffee, description: "Fuel up for the final stretch" },
      { time: "10:00 AM", title: "Hacking Ends", icon: Code, description: "Final code submission" },
      { time: "10:30 AM", title: "Project Demos", icon: Presentation, description: "Show what you built" },
      { time: "12:30 PM", title: "Lunch & Judging", icon: Coffee, description: "Enjoy lunch while judges deliberate" },
      { time: "02:30 PM", title: "Final Presentations", icon: Presentation, description: "Top projects present" },
      { time: "04:00 PM", title: "Closing Ceremony", icon: Award, description: "Winners announcement" },
    ],
  },
]

const venueInfo = {
  name: "Vellore Institute of Technology",
  address: "Kelambakkam - Vandalur Road, Rajan Nagar",
  city: "Chennai, Tamil Nadu 600127",
  date: "First week of March 2026",
  time: "10:00 AM onwards",
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-20 md:py-32 bg-muted/30">
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
                <div className="space-y-4">
                  <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground">{venueInfo.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">
                        {venueInfo.address}, {venueInfo.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">{venueInfo.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-[var(--font-sans)] text-sm">{venueInfo.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center pulse-glow">
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-6 perspective-2000">
          {scheduleData.map((day, dayIndex) => (
            <ScrollAnimation key={day.day} delay={100 * (dayIndex + 1)}>
              <TiltCard tiltAmount={8} className="h-full">
                <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                  <div className="bg-primary/10 border-b border-border px-6 py-4">
                    <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-primary neon-flicker">
                      {day.day}
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                        style={{ animationDelay: `${eventIndex * 0.1}s` }}
                      >
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <event.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-[var(--font-jetbrains)] text-xs text-primary mb-1">{event.time}</div>
                          <div className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">
                            {event.title}
                          </div>
                          <div className="font-[var(--font-sans)] text-xs text-muted-foreground">
                            {event.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
