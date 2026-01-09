"use client"

import { useState, useEffect } from "react"

type CatState = "asking" | "happy" | "angry" | "hidden"

export default function KnifeCat() {
  const [isVisible, setIsVisible] = useState(false)
  const [catState, setCatState] = useState<CatState>("asking")
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if permanently dismissed
    if (typeof window !== "undefined") {
      const wasDismissed = localStorage.getItem("knifeCatDismissed")
      if (wasDismissed === "true") {
        setDismissed(true)
        return
      }
    }

    // show after 5s, then every 30s
    const initial = setTimeout(() => {
      setCatState("asking")
      setIsVisible(true)
    }, 5000)
    const interval = setInterval(() => {
      if (!dismissed) {
        setCatState("asking")
        setIsVisible(true)
      }
    }, 30000)
    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [dismissed])

  // Auto-hide after 8 seconds only in asking state
  useEffect(() => {
    if (!isVisible || catState !== "asking") return
    const t = setTimeout(() => setIsVisible(false), 8000)
    return () => clearTimeout(t)
  }, [isVisible, catState])

  const handleYes = () => {
    setCatState("happy")
    if (typeof window !== "undefined") {
      localStorage.setItem("knifeCatDismissed", "true")
    }
    setDismissed(true)
    setTimeout(() => setIsVisible(false), 2000)
  }

  const handleNo = () => {
    setCatState("angry")
  }

  const handleRegister = () => {
    window.open("https://eventhubcc.vit.ac.in/EventHub/", "_blank")
    setCatState("happy")
    if (typeof window !== "undefined") {
      localStorage.setItem("knifeCatDismissed", "true")
    }
    setDismissed(true)
    setTimeout(() => setIsVisible(false), 2000)
  }

  if (dismissed && !isVisible) return null

  const isAngry = catState === "angry"
  const isHappy = catState === "happy"

  return (
    <div
      className="fixed bottom-0 right-0 z-[9999] hidden md:flex flex-col items-end origin-bottom-right transition-all duration-700 ease-out"
      style={{
        transform: isVisible
          ? "translateY(0) translateX(0) rotate(-12deg)"
          : "translateY(60%) translateX(30%) rotate(25deg)",
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden={!isVisible}
    >
      {/* Speech bubble */}
      <div
        className={`relative mb-2 mr-8 px-5 py-3 rounded-2xl shadow-xl border-2 transition-all duration-300 ${
          isAngry 
            ? "bg-gradient-to-br from-red-100 to-red-200 border-red-500" 
            : "bg-gradient-to-br from-white to-gray-100 border-primary"
        } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        <p className={`font-[var(--font-rajdhani)] font-extrabold text-base whitespace-nowrap drop-shadow-sm mb-2 ${isAngry ? "text-red-700" : "text-gray-900"}`}>
          {catState === "asking" && "Registered yet?"}
          {catState === "happy" && "Good choice! 😸"}
          {catState === "angry" && "Wrong answer... 😾"}
        </p>
        
        {/* Buttons */}
        {catState === "asking" && (
          <div className="flex gap-2">
            <button
              onClick={handleYes}
              className="px-3 py-1 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:scale-105 transition-transform"
            >
              Yes ✓
            </button>
            <button
              onClick={handleNo}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:scale-105 transition-transform"
            >
              No ✗
            </button>
          </div>
        )}
        
        {catState === "angry" && (
          <button
            onClick={handleRegister}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 hover:scale-105 transition-all animate-pulse"
          >
            Register NOW 🔪
          </button>
        )}

        <div className={`absolute -bottom-2 right-8 w-4 h-4 border-r-2 border-b-2 transform rotate-45 ${
          isAngry ? "bg-red-100 border-red-500" : "bg-white border-primary"
        }`} />
      </div>

      {/* Cat */}
      <div className="relative w-24 h-28 mr-4 transition-transform duration-200">
        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
          {/* Body */}
          <ellipse cx="50" cy="95" rx="35" ry="25" fill="#FFB347" />
          {/* Head */}
          <circle cx="50" cy="55" r="30" fill="#FFB347" />
          {/* Ears */}
          <polygon points="25,35 15,10 35,25" fill="#FFB347" />
          <polygon points="75,35 85,10 65,25" fill="#FFB347" />
          <polygon points="27,32 20,15 33,27" fill="#FFB6C1" />
          <polygon points="73,32 80,15 67,27" fill="#FFB6C1" />
          {/* Eyes */}
          <ellipse cx="38" cy="50" rx="8" ry="10" fill="white" />
          <ellipse cx="62" cy="50" rx="8" ry="10" fill="white" />
          <circle cx="40" cy="52" r="5" fill={isAngry ? "#FF0000" : "#333"} className={isAngry ? "animate-pulse" : ""} />
          <circle cx="64" cy="52" r="5" fill={isAngry ? "#FF0000" : "#333"} className={isAngry ? "animate-pulse" : ""} />
          <circle cx="42" cy="50" r="2" fill="white" />
          <circle cx="66" cy="50" r="2" fill="white" />
          {/* Angry eyebrows */}
          {isAngry && (
            <>
              <line x1="30" y1="40" x2="46" y2="44" stroke="#333" strokeWidth="3" strokeLinecap="round" />
              <line x1="70" y1="40" x2="54" y2="44" stroke="#333" strokeWidth="3" strokeLinecap="round" />
            </>
          )}
          {/* Nose */}
          <ellipse cx="50" cy="62" rx="4" ry="3" fill="#FF6B6B" />
          {/* Mouth */}
          {isAngry ? (
            <path d="M 40 72 Q 50 65 60 72" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          ) : isHappy ? (
            <path d="M 40 68 Q 50 78 60 68" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M 50 65 Q 45 72 40 68" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              <path d="M 50 65 Q 55 72 60 68" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
          {/* Whiskers */}
          <line x1="30" y1="58" x2="10" y2="55" stroke="#333" strokeWidth="1.5" />
          <line x1="30" y1="62" x2="10" y2="65" stroke="#333" strokeWidth="1.5" />
          <line x1="70" y1="58" x2="90" y2="55" stroke="#333" strokeWidth="1.5" />
          <line x1="70" y1="62" x2="90" y2="65" stroke="#333" strokeWidth="1.5" />
          {/* Blush */}
          {!isAngry && (
            <>
              <ellipse cx="30" cy="60" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
              <ellipse cx="70" cy="60" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
            </>
          )}
          {/* Paw */}
          <ellipse cx="20" cy="85" rx="10" ry="8" fill="#FFB347" />
          <circle cx="14" cy="82" r="3" fill="#FFCC80" />
          <circle cx="20" cy="80" r="3" fill="#FFCC80" />
          <circle cx="26" cy="82" r="3" fill="#FFCC80" />
          {/* Knife - only when angry */}
          {isAngry && (
            <g className="animate-pulse">
              <rect x="8" y="65" width="8" height="20" rx="2" fill="#8B4513" />
              <rect x="9" y="67" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="72" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="77" width="6" height="3" fill="#A0522D" />
              <path d="M 8 65 L 12 30 L 16 65 Z" fill="#C0C0C0" />
              <path d="M 10 65 L 12 35 L 12 65 Z" fill="#E8E8E8" />
              {/* Blood drops */}
              <circle cx="12" cy="38" r="2" fill="#8B0000" />
              <ellipse cx="14" cy="45" rx="1.5" ry="3" fill="#8B0000" />
              <circle cx="10" cy="50" r="1.5" fill="#8B0000" />
            </g>
          )}
        </svg>
        {/* Sparkles on happy */}
        {isHappy && (
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-2 left-2 text-yellow-400 animate-ping">✨</span>
            <span className="absolute top-4 right-4 text-yellow-400 animate-ping" style={{ animationDelay: "0.2s" }}>✨</span>
            <span className="absolute bottom-8 left-4 text-yellow-400 animate-ping" style={{ animationDelay: "0.4s" }}>✨</span>
          </div>
        )}
      </div>
    </div>
  )
}