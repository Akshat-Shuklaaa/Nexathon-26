"use client"

import { useState, useEffect } from "react"
import { useLenis } from "@/components/providers/smooth-scroll-provider"

// About subsections to track (match app/page order)
const aboutSubsections = [
  { id: "about", label: "Overview" },
  { id: "themes", label: "Themes" },
  { id: "schedule", label: "Schedule" },
  { id: "timeline", label: "Timeline" },
  { id: "sponsors", label: "Sponsors" },
]

// First section after About umbrella (to know when to hide the pill)
const endSectionId = "rewards"

export default function FloatingSectionPill() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      const firstSection = document.getElementById(aboutSubsections[0].id)
      const endSection = document.getElementById(endSectionId)
      if (!firstSection) return

      const firstSectionTop = firstSection.getBoundingClientRect().top + scrollY
      const endSectionTop = endSection ? endSection.getBoundingClientRect().top + scrollY : Infinity

      // Show pill when in the About umbrella region (with buffer)
      const inAboutRegion = scrollY >= firstSectionTop - viewportHeight * 0.3 && scrollY < endSectionTop - viewportHeight * 0.5
      setIsVisible(inAboutRegion)

      if (!inAboutRegion) {
        setActiveSection(null)
        return
      }

      // Determine active subsection (the last one whose top is <= 40% viewport)
      let current: string | null = null
      for (const section of aboutSubsections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= viewportHeight * 0.4) current = section.id
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const href = `#${id}`
    const durationSec = 1.2
    const easeInOutSine = (t: number) => 0.5 * (1 - Math.cos(Math.PI * t))

    if (lenis && typeof (lenis as any).scrollTo === "function") {
      try { (lenis as any).scrollTo(href, { duration: durationSec, easing: easeInOutSine }); return } catch { }
    }

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`
        fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end pl-32 py-10
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-20 pointer-events-none"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main container with glass effect */}
      <div className="relative">
        {/* Subtle glow backdrop */}
        <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl -z-10" />
        
        <div className="bg-background/70 backdrop-blur-2xl border border-border/30 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-2">
          <div className="flex flex-col items-center gap-1">
            {aboutSubsections.map((section, idx) => {
              const isActive = activeSection === section.id
              return (
                <div key={section.id} className="relative flex items-center">
                  {/* Label - positioned to the left with staggered animation */}
                  <div
                    className={`
                      absolute right-full pr-4 flex items-center justify-end
                      transition-all duration-300 ease-out h-full
                      ${isHovered || isActive 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-3 pointer-events-none"
                      }
                    `}
                    style={{ transitionDelay: isHovered ? `${idx * 50}ms` : "0ms" }}
                  >
                    <button
                      onClick={() => handleClick(section.id)}
                      className={`
                        whitespace-nowrap text-sm font-[var(--font-rajdhani)] font-semibold
                        px-4 py-2 rounded-xl
                        transition-all duration-200
                        ${isActive 
                          ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(99,102,241,0.35)]" 
                          : "bg-card/90 text-muted-foreground hover:text-foreground hover:bg-card border border-border/40 shadow-sm"
                        }
                      `}
                    >
                      {section.label}
                    </button>
                  </div>

                  {/* Dot button - larger clickable area */}
                  <button
                    onClick={() => handleClick(section.id)}
                    className="
                      relative w-10 h-10 flex items-center justify-center
                      rounded-full transition-all duration-200
                      hover:bg-primary/10 cursor-pointer
                    "
                    aria-label={`Go to ${section.label}`}
                  >
                    {/* Ping animation for active */}
                    {isActive && (
                      <span className="absolute w-5 h-5 rounded-full bg-primary/30 animate-ping" />
                    )}
                    
                    {/* Main dot */}
                    <span
                      className={`
                        relative rounded-full transition-all duration-300
                        ${isActive 
                          ? "w-4 h-4 bg-primary shadow-[0_0_14px_rgba(99,102,241,0.5)]" 
                          : "w-2.5 h-2.5 bg-muted-foreground/40 hover:bg-muted-foreground hover:scale-150"
                        }
                      `}
                    />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vertical connecting line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-border/0 via-border/30 to-border/0 -z-10" />
      </div>
    </div>
  )
}