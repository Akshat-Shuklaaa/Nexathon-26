"use client"

import { Calendar, Clock, MapPin, Coffee, Code, Presentation, Award } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import { SimpleContactCta } from "@/components/features/simple-contact-cta"
import TiltCard from "@/components/features/tilt-card"

// const scheduleData = [
//   {
//     day: "Hackathon Day - March 8",
//     events: [
//       { time: "09:00 AM", title: "Registration & Check-in", icon: Calendar, description: "Get your badges and swag" },
//       { time: "10:00 AM", title: "Opening Ceremony", icon: Presentation, description: "Keynote & rules announcement" },
//       { time: "11:00 AM", title: "Hacking Begins!", icon: Code, description: "Start building your projects" },
//       { time: "01:00 PM", title: "Lunch Break", icon: Coffee, description: "Networking lunch" },
//       { time: "03:00 PM", title: "Workshop 1: Tech Stack Deep Dive", icon: Presentation, description: "Hands-on workshop" },
//       { time: "07:00 PM", title: "Dinner", icon: Coffee, description: "Evening refreshments" },
//       { time: "10:00 PM", title: "Midnight Snacks", icon: Coffee, description: "Late night coding fuel" },
//       { time: "02:00 AM", title: "Night Owl Check-in", icon: Code, description: "Progress updates" },
//     ],
//   },
//   {
//     day: "Finale - March 9",
//     events: [
//       { time: "07:00 AM", title: "Sunrise Breakfast", icon: Coffee, description: "Fuel up for the final stretch" },
//       { time: "10:00 AM", title: "Hacking Ends", icon: Code, description: "Final code submission" },
//       { time: "10:30 AM", title: "Project Demos", icon: Presentation, description: "Show what you built" },
//       { time: "12:30 PM", title: "Lunch & Judging", icon: Coffee, description: "Enjoy lunch while judges deliberate" },
//       { time: "02:30 PM", title: "Final Presentations", icon: Presentation, description: "Top projects present" },
//       { time: "04:00 PM", title: "Closing Ceremony", icon: Award, description: "Winners announcement" },
//     ],
//   },
// ]

const venueInfo = {
  name: "Vellore Institute of Technology",
  address: "Kelambakkam - Vandalur Road, Rajan Nagar",
  city: "Chennai, Tamil Nadu 600127",
  date: "First week of March, 2026",
  time: "10:00 AM onwards",
}

export default function ScheduleSection() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Event Schedule"
          subtitle="24 hours of non-stop innovation, learning, and creation"
          highlight="// SCHEDULE"
        />

        <div className="mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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

        <div className="text-center p-0">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
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
            <SimpleContactCta>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
                <Clock className="w-4 h-4" />
                <span>Stay Tuned</span>
              </button>
            </SimpleContactCta>
          </div>
        </div>
      </div>
    </section>
  )
}
