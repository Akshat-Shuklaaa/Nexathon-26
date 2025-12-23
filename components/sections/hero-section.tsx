"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Users, Terminal, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLenis } from "@/components/providers/smooth-scroll-provider"
import FloatingParticles from "@/components/features/floating-particles"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { heroData, eventInfo } from "@/lib/data"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollIndicatorSeen, setScrollIndicatorSeen] = useState(false)
const [hideScrollIndicator, setHideScrollIndicator] = useState(false)


const scrollIndicatorRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {
  if (!scrollIndicatorRef.current) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setScrollIndicatorSeen(true)
        observer.disconnect()
      }
    },
    { threshold: 0.6 } // 60% visible = seen
  )

  observer.observe(scrollIndicatorRef.current)

  return () => observer.disconnect()
}, [])
  const lenis = useLenis()

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroData.taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  useEffect(() => {
  if (!scrollIndicatorSeen) return

  const handleScroll = () => {
    setHideScrollIndicator(true)
    window.removeEventListener("scroll", handleScroll)
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [scrollIndicatorSeen])



  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ShaderAnimation />
      </div>

      <FloatingParticles count={40} />

      <div className="absolute inset-0 grid-pattern-animated" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.78_0.22_145/0.2),transparent)]" />

      {/* 3D Floating orbs with mouse parallax */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] morph"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] morph"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          animationDelay: "-2s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.2}px))`,
        }}
      />

      {/* Orbiting elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div
          className="orbit absolute w-4 h-4 bg-primary/40 rounded-full blur-sm"
          style={{ animationDuration: "25s" }}
        />
        <div
          className="orbit absolute w-3 h-3 bg-secondary/40 rounded-full blur-sm"
          style={{ animationDuration: "20s", animationDelay: "-5s" }}
        />
        <div
          className="orbit absolute w-2 h-2 bg-accent/40 rounded-full blur-sm"
          style={{ animationDuration: "30s", animationDelay: "-10s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-2000">
        {/* College Badge with 3D effect */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-primary/20 rounded-full bg-card/30 backdrop-blur-md hover:border-primary/40 transition-all duration-500 hover:scale-105 preserve-3d">
            <div className="w-9 h-9 border border-primary/40 rounded-full flex items-center justify-center bg-primary/10 float-3d">
              <span className="text-primary text-xs font-bold font-[var(--font-orbitron)]">{eventInfo.edition}</span>
            </div>
            <span className="font-[var(--font-space)] text-sm text-muted-foreground tracking-wide">
              {eventInfo.year} Edition
            </span>
          </div>
        </div>

        {/* Logo placeholder with 3D hover */}
        <div
          className={`mb-10 transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 holographic group perspective-1000">
            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-xl transition-transform duration-700 group-hover:scale-105 preserve-3d">
              <div className="w-28 h-28 md:w-36 md:h-36 border-2 border-dashed border-primary/40 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/60 transition-all duration-500 float-3d">
                <Terminal className="w-8 h-8 text-primary/60" />
                <span className="font-[var(--font-orbitron)] text-primary text-lg font-bold">{heroData.logo.text}</span>
                <span className="font-[var(--font-orbitron)] text-primary/60 text-xs">{heroData.logo.subtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main title with glitch effect */}
        <h1
          className={`font-[var(--font-orbitron)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-foreground inline-block hover:scale-105 transition-transform duration-500">NEXA</span>
          <span className="text-gradient-animated glow-text inline-block relative glitch" data-text="THON">
            THON
          </span>
        </h1>

        {/* Tagline with typewriter effect */}
        <div
          className={`h-12 mb-4 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-[var(--font-jetbrains)] text-lg sm:text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary neon-flicker">{">"}</span>
            <span className="text-primary/80"> $ </span>
            <span className="inline-block min-w-[200px] text-left">
              <span className="inline-block transition-all duration-700" key={currentText}>
                {heroData.taglines[currentText]}
              </span>
              <span className="animate-pulse text-primary ml-1">_</span>
            </span>
          </p>
        </div>

        {/* Description */}
        <p
          className={`font-[var(--font-sans)] text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {eventInfo.longDescription}
        </p>

        {/* Info badges with wave animation */}
        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-5 mb-12 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {heroData.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group flex items-center gap-2.5 px-5 py-3 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 hover:bg-card/60 transition-all duration-500 hover:scale-110 hover:-translate-y-1 perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-[var(--font-rajdhani)] text-sm md:text-base font-medium">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons with 3D effects */}
        <div
          className={`mb-40 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href={heroData.cta.primary.link}
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-[var(--font-orbitron)] font-bold rounded-xl text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-2 shimmer perspective-1000 shadow-[0_10px_40px_oklch(0.65_0.25_250/0.3)] hover:shadow-[0_20px_60px_oklch(0.65_0.25_250/0.5)] inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {heroData.cta.primary.text}
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* Scroll indicator */}
<div
  ref={scrollIndicatorRef}
  className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
    mounted && !hideScrollIndicator
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6 pointer-events-none"
  }`}
>
  <Link
    href="#about"
    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
  >
    <span className="font-[var(--font-space)] text-xs tracking-widest uppercase">
      Scroll to explore
    </span>
    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-primary transition-colors duration-300">
      <div className="w-1 h-2 bg-current rounded-full animate-bounce group-hover:bg-primary" />
    </div>
  </Link>
</div>


        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              if ((lenis as any)?.scrollTo) {
                ;(lenis as any).scrollTo("#about", { duration: 1.2 })
              } else {
                const target = document.getElementById("about")
                if (target) target.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="font-[var(--font-space)] text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-primary transition-colors duration-300">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce group-hover:bg-primary" />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  )
}
