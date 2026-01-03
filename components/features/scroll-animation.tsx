"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fade-up" | "fade-in" | "scale" | "slide-left" | "slide-right"
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      // use a smaller rootMargin to reduce premature intersection triggers
      { threshold: 0.15, rootMargin: "20px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, prefersReducedMotion])

  const getAnimationClasses = () => {
    if (prefersReducedMotion) return ""

    const variants = {
      "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      "fade-in": isVisible ? "opacity-100" : "opacity-0",
      scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
      "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
      "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    }
    return variants[variant]
  }

  return (
    <div
      ref={ref}
      // limit transitions to transform and opacity to avoid layout recalculations
      className={`transition-opacity transition-transform duration-700 ease-out ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}
