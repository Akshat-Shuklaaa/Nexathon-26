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
      "We are updating the site",
     
  },
  {
    question: "Is there a registration fee?",
    answer:
      "We are updating the site",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
     "We are updating the site",
  },
  {
    question: "Can I participate without a team?",
    answer:
     "We are updating the site",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "We are updating the site",
  },
  {
    question: "Can I work on a pre-existing project?",
    answer:
      "We are updating the site",
  },
  {
    question: "Will there be mentors available?",
    answer:
      "We are updating the site",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "We are updating the site",
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
      </div>
    </section>
  )
}
