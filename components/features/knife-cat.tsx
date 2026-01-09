"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function KnifeCat() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // show after 5s, then every 30s
    const initial = setTimeout(() => setIsVisible(true), 5000)
    const interval = setInterval(() => setIsVisible(true), 30000)
    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const t = setTimeout(() => setIsVisible(false), 6000)
    return () => clearTimeout(t)
  }, [isVisible])

  const handleClick = () => {
    setHasInteracted(true)
    setIsVisible(false)
  }

  return (
    <>
      <div
        className={`fixed bottom-0 right-8 z-[9999] hidden md:flex flex-col items-end transition-transform duration-500 ease-out ${isVisible ? "translate-y-0" : "translate-y-full"}`}
        aria-hidden={!isVisible}
      >
        <div className={`relative mb-2 px-4 py-2 bg-white rounded-2xl shadow-lg border-2 border-primary/50 transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <p className="font-[var(--font-rajdhani)] font-bold text-foreground text-sm whitespace-nowrap">
            {hasInteracted ? "Good choice! 😸" : "Registered yet? 🔪"}
          </p>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-primary/50 transform rotate-45" />
        </div>

        <Link href="https://eventhubcc.vit.ac.in/EventHub/" target="_blank" rel="noopener noreferrer" onClick={handleClick} className="group cursor-pointer">
          <div className="relative w-24 h-28 transition-transform duration-200 group-hover:scale-110">
            <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
              <ellipse cx="50" cy="95" rx="35" ry="25" fill="#FFB347" />
              <circle cx="50" cy="55" r="30" fill="#FFB347" />
              <polygon points="25,35 15,10 35,25" fill="#FFB347" />
              <polygon points="75,35 85,10 65,25" fill="#FFB347" />
              <polygon points="27,32 20,15 33,27" fill="#FFB6C1" />
              <polygon points="73,32 80,15 67,27" fill="#FFB6C1" />
              <ellipse cx="38" cy="50" rx="8" ry="10" fill="white" />
              <ellipse cx="62" cy="50" rx="8" ry="10" fill="white" />
              <circle cx="40" cy="52" r="5" fill="#333" className="animate-pulse" />
              <circle cx="64" cy="52" r="5" fill="#333" className="animate-pulse" />
              <circle cx="42" cy="50" r="2" fill="white" />
              <circle cx="66" cy="50" r="2" fill="white" />
              <ellipse cx="50" cy="62" rx="4" ry="3" fill="#FF6B6B" />
              <path d="M 50 65 Q 45 72 40 68" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              <path d="M 50 65 Q 55 72 60 68" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="58" x2="10" y2="55" stroke="#333" strokeWidth="1.5" />
              <line x1="30" y1="62" x2="10" y2="65" stroke="#333" strokeWidth="1.5" />
              <line x1="70" y1="58" x2="90" y2="55" stroke="#333" strokeWidth="1.5" />
              <line x1="70" y1="62" x2="90" y2="65" stroke="#333" strokeWidth="1.5" />
              <ellipse cx="30" cy="60" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
              <ellipse cx="70" cy="60" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
              <ellipse cx="20" cy="85" rx="10" ry="8" fill="#FFB347" />
              <circle cx="14" cy="82" r="3" fill="#FFCC80" />
              <circle cx="20" cy="80" r="3" fill="#FFCC80" />
              <circle cx="26" cy="82" r="3" fill="#FFCC80" />
              <rect x="8" y="65" width="8" height="20" rx="2" fill="#8B4513" />
              <rect x="9" y="67" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="72" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="77" width="6" height="3" fill="#A0522D" />
              <path d="M 8 65 L 12 30 L 16 65 Z" fill="#C0C0C0" />
              <path d="M 10 65 L 12 35 L 12 65 Z" fill="#E8E8E8" />
            </svg>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="absolute top-2 left-2 text-yellow-400 animate-ping">✨</span>
              <span className="absolute top-4 right-4 text-yellow-400 animate-ping" style={{ animationDelay: "0.2s" }}>✨</span>
              <span className="absolute bottom-8 left-4 text-yellow-400 animate-ping" style={{ animationDelay: "0.4s" }}>✨</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
