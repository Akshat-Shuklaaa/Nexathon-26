"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import TiltCard from "@/components/features/tilt-card"
import Link from "next/link"

const faqs = [
  {
    question: "Who can participate in NEXATHON?",
    answer:
      "NEXATHON is open to all students and professionals passionate about technology. Whether you're a beginner or an experienced developer, everyone is welcome! Teams can consist of 2-4 members from any college or professional background.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a nominal registration fee of ₹500 per team (not per person). This covers meals, swag, and access to all workshops and mentoring sessions. Early bird registrations get a 20% discount!",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, and any hardware you might need for your project. We'll provide WiFi, power outlets, food, and beverages. Don't forget your student ID for verification!",
  },
  {
    question: "Can I participate without a team?",
    answer:
      "Yes! We have a team matching session before the hackathon where solo participants can find teammates. You can also join our Discord server to connect with potential team members.",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects are judged on Innovation & Creativity (25%), Technical Complexity (25%), Design & User Experience (20%), Practical Applicability (20%), and Presentation (10%). Our panel includes industry experts and tech leaders.",
  },
  {
    question: "Can I work on a pre-existing project?",
    answer:
      "No, all projects must be built from scratch during the hackathon. However, you can use open-source libraries, APIs, and pre-existing tools. Any code written before the hackathon is not allowed.",
  },
  {
    question: "Will there be mentors available?",
    answer:
      "We have 50+ mentors from leading tech companies who will be available throughout the event to guide you. Mentors cover various domains including AI/ML, Web Development, Blockchain, and Design.",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "The venue is equipped for overnight stay with rest areas. For participants needing formal accommodation, we have partnered with nearby hotels offering special discounts. Details will be shared upon registration confirmation.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-muted/20">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="FAQs" subtitle="Got questions? We've got answers" highlight="// FAQ" />

        <div className="space-y-4 perspective-2000">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={0}>
              <div
                className={`bg-card/60 border rounded-2xl overflow-hidden transition-all duration-150 ${
                  openIndex === index
                    ? "border-primary/40 shadow-[0_0_40px_oklch(0.78_0.22_145/0.15)] scale-[1.02]"
                    : "border-border hover:border-primary/20 hover:scale-[1.01]"
                }`}
                style={{
                  transform: openIndex === index ? "translateZ(20px)" : "translateZ(0)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-[var(--font-rajdhani)] text-lg font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      openIndex === index ? "bg-primary/20 rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </div>
                </button>
  <div
  className={`overflow-hidden ${
    openIndex === index ? "opacity-100" : "opacity-0"
  } transition-opacity duration-120`}
>
  {openIndex === index && (
    <div className="px-6 pb-5 border-t border-border/50 pt-4">
      <p className="font-[var(--font-sans)] text-muted-foreground leading-relaxed">
        {faq.answer}
      </p>
    </div>
  )}
</div>

              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={500} className="mt-20">
          <TiltCard tiltAmount={8}>
            <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-3xl p-10 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute inset-0 holographic opacity-20" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-6 float-3d">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-[var(--font-rajdhani)] text-3xl font-bold text-foreground mb-4">
                  Still have questions?
                </h3>
                <p className="font-[var(--font-sans)] text-muted-foreground mb-8 max-w-md mx-auto">
                  {"Can't"} find what {"you're"} looking for? Our team is here to help you with any queries about
                  NEXATHON 2025.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#contact"
                    className="group px-8 py-4 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.78_0.22_145/0.6)] hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center gap-2 shimmer"
                  >
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Contact Us
                  </Link>
                  {/* <a
                    href="mailto:hello@nexathon.tech"
                    className="px-8 py-4 border-2 border-primary/50 text-primary font-[var(--font-rajdhani)] font-bold rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center"
                  >
                    hello@nexathon.tech
                  </a> */}
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollAnimation>
      </div>
    </section>
  )
}
