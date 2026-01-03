"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  { src: "/img6.jpg", alt: "Coding Session" },
  { src: "/img7.jpg", alt: "Workshop" },
  { src: "/img5.jpg", alt: "Team Collaboration" },
  { src: "/img1.jpg", alt: "Award Ceremony" },
  { src: "/img2.jpg", alt: "Networking" },
  { src: "/img3.jpg", alt: "Project Demo" },
  { src: "/img4.jpg", alt: "Mentoring" },
  { src: "/img10.jpg", alt: "Late Night Coding" },
  { src: "/img8.jpg", alt: "Food & Fun" },
  { src: "/img9.jpg", alt: "Celebration" },
]

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  // autoplay will start only after a period of inactivity
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lightboxOpenRef = useRef(false)

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  // Auto-rotation
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(handleNext, 5000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, handleNext])

  // Idle timer helpers: start autoplay only after no interaction for a delay
  const clearIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
      idleTimerRef.current = null
    }
  }, [])

  const startIdleTimer = useCallback((delay = 3000) => {
    clearIdleTimer()
    // Do not start the idle timer while the lightbox is open
    if (lightboxOpenRef.current) return
    idleTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, delay)
  }, [clearIdleTimer])

  const recordInteraction = useCallback(() => {
    // An interaction pauses autoplay and restarts the idle timer
    setIsAutoPlaying(false)
    clearIdleTimer()
    // Don't restart the idle timer while the lightbox is open
    if (lightboxOpenRef.current) return
    // restart the idle timer so autoplay will resume after no interaction
    idleTimerRef.current = setTimeout(() => setIsAutoPlaying(true), 3000)
  }, [clearIdleTimer])

  // start the idle timer on mount so autoplay begins after initial inactivity
  useEffect(() => {
    startIdleTimer()
    return () => clearIdleTimer()
  }, [startIdleTimer, clearIdleTimer])

  // Lightbox handlers
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = useCallback(() => {
    setLightboxOpen(true)
    setIsAutoPlaying(false)
    clearIdleTimer()
  }, [clearIdleTimer])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    startIdleTimer()
  }, [startIdleTimer])

  // keep a ref in sync with the state so callbacks defined earlier can read it
  useEffect(() => {
    lightboxOpenRef.current = lightboxOpen
    if (lightboxOpen) {
      // ensure autoplay is paused while in lightbox
      setIsAutoPlaying(false)
      clearIdleTimer()
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
    }
  }, [lightboxOpen, clearIdleTimer])

  // Close lightbox on Escape key and navigate with arrows when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxOpen) closeLightbox()
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") handlePrev()
        if (e.key === "ArrowRight") handleNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, handlePrev, handleNext])

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    recordInteraction()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrev()

    touchStartX.current = null
    touchEndX.current = null
    // mark this as an interaction and restart idle timer
    recordInteraction()
  }

  const getCardStatus = (index: number) => {
    if (index === activeIndex) return "active"
    const nextIndex = (activeIndex + 1) % galleryImages.length
    const prevIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length
    if (index === nextIndex) return "next"
    if (index === prevIndex) return "prev"
    return "hidden"
  }

  return (
    <section id="gallery" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          title="Gallery"
          subtitle="Glimpses from our previous hackathons"
          highlight="// GALLERY"
        />
      </div>

      <ScrollAnimation>
        <div 
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-[1000px] transform-gpu"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={recordInteraction}
          onMouseLeave={() => startIdleTimer()}
        >
          {galleryImages.map((image, index) => {
            const status = getCardStatus(index)
            const isActive = status === "active"
            const isPrev = status === "prev"
            const isNext = status === "next"
            const isHidden = status === "hidden"

            return (
              <div
                key={index}
                role={isPrev || isNext ? "button" : undefined}
                tabIndex={isPrev || isNext ? 0 : -1}
                aria-label={isPrev ? "Previous image" : isNext ? "Next image" : undefined}
                className={cn(
                  "absolute",
                  "w-[280px] h-[200px] md:w-[500px] md:h-[350px]",
                  isHidden && "pointer-events-none"
                )}
                style={{
                  transform: isActive 
                    ? "translateX(0) scale(1) rotateY(0deg)" 
                    : isPrev 
                      ? "translateX(-60%) scale(0.85) rotateY(25deg)" 
                      : isNext 
                        ? "translateX(60%) scale(0.85) rotateY(-25deg)" 
                        : "scale(0.5)",
                  zIndex: isActive ? 20 : isNext || isPrev ? 10 : 5,
                  filter: isActive ? "none" : "brightness(0.5) blur(1px)",
                  opacity: isHidden ? 0 : isActive ? 1 : 0.6,
                  transition: "transform 500ms cubic-bezier(0.23,1,0.32,1), opacity 500ms ease, filter 500ms ease, box-shadow 500ms ease",
                  willChange: "transform, opacity, filter, box-shadow",
                  boxShadow: isActive ? "0 0 50px rgba(var(--primary-rgb),0.25)" : "0 10px 30px rgba(2,6,23,0.2)"
                }}
                onClick={() => {
                  if (isPrev) handlePrev()
                  if (isNext) handleNext()
                  if (isActive) openLightbox()
                }}
              >
                <div className={cn(
                  "w-full h-full rounded-2xl overflow-hidden border-2 relative shadow-2xl transition-all duration-700",
                  isActive ? "border-primary/50 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]" : "border-border"
                )}>
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={isActive || isPrev || isNext ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={isActive || isPrev || isNext ? "high" : "low"}
                    width={isActive ? 500 : 500}
                    height={isActive ? 350 : 350}
                  />
                  
                  {/* Overlay Content - Only visible on active card */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-6",
                    isActive ? "opacity-100" : "opacity-0"
                  )}>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-[var(--font-rajdhani)] translate-y-0 transition-transform duration-500">
                      {image.alt}
                    </h3>
                    <div className="h-1 w-12 bg-primary mt-2 rounded-full" />
                  </div>

                  {/* Tech decorations */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-white/20" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-white/20" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-background/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "w-8 bg-primary shadow-[0_0_10px_oklch(0.78_0.22_145/0.5)]" 
                    : "bg-muted-foreground/30 hover:bg-primary/50"
                )}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-background/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </ScrollAnimation>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            style={{
              animation: "fadeIn 300ms ease-out forwards"
            }}
          />
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev() }}
            className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handleNext() }}
            className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Image container */}
          <div 
            className="relative z-10 w-[90vw] h-[80vh] max-w-6xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 400ms cubic-bezier(0.23,1,0.32,1) forwards"
            }}
          >
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              style={{
                boxShadow: "0 0 80px rgba(var(--primary-rgb),0.3)"
              }}
            />
            
            {/* Image caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
              <p className="text-white font-[var(--font-rajdhani)] font-bold text-lg">
                {galleryImages[activeIndex].alt}
              </p>
            </div>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(idx) }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "w-8 bg-primary shadow-[0_0_10px_oklch(0.78_0.22_145/0.5)]" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx>{` 
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
