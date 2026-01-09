"use client"

import { useState, useEffect } from "react"

type CatState = "asking" | "happy" | "angry" | "knifeOut" | "hidden"

export default function KnifeCat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [catState, setCatState] = useState<CatState>("asking")
  const [dismissed, setDismissed] = useState(false)
  const [showKnife, setShowKnife] = useState(false)

  useEffect(() => {
    // Check if permanently dismissed
    if (typeof window !== "undefined") {
      const wasDismissed = localStorage.getItem("knifeCatDismissed")
      if (wasDismissed === "true") {
        setDismissed(true)
        return
      }
    }

    // Show after 5s and stay visible
    const initial = setTimeout(() => {
      setCatState("asking")
      setIsVisible(true)
    }, 5000)
    
    return () => clearTimeout(initial)
  }, [dismissed])

  // Helper to trigger exit animation then hide
  const triggerExit = (onComplete?: () => void) => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsExiting(false)
      if (onComplete) onComplete()
    }, 700) // match catExit animation duration
  }

  const handleYes = () => {
    setCatState("happy")
    if (typeof window !== "undefined") {
      localStorage.setItem("knifeCatDismissed", "true")
    }
    // Slide out after showing happy state
    setTimeout(() => {
      triggerExit(() => setDismissed(true))
    }, 1500)
  }

  const handleNo = () => {
    setCatState("angry")
    // Animate knife coming out after a brief delay
    setTimeout(() => setShowKnife(true), 300)
  }

  const handleRegister = () => {
    window.open("https://eventhubcc.vit.ac.in/EventHub/", "_blank")
    // First slide knife down
    setShowKnife(false)
    // Then show happy state
    setTimeout(() => {
      setCatState("happy")
    }, 400)
    // Then dismiss permanently with exit animation
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("knifeCatDismissed", "true")
      }
      triggerExit(() => setDismissed(true))
    }, 2000)
  }

  if (dismissed && !isVisible && !isExiting) return null

  const isAngry = catState === "angry"
  const isHappy = catState === "happy"

  return (
    <>
      <style jsx>{`
        @keyframes slideInKnife {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOutKnife {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        @keyframes catEnter {
          0% { transform: translateY(60%) translateX(30%) rotate(25deg); opacity: 0; }
          100% { transform: translateY(0) translateX(0) rotate(-12deg); opacity: 1; }
        }
        @keyframes catExit {
          0% { transform: translateY(0) translateX(0) rotate(-12deg); opacity: 1; }
          100% { transform: translateY(100%) translateX(20%) rotate(15deg); opacity: 0; }
        }
        @keyframes bubblePop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bloodDrip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes mouthChange {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes eyeGlow {
          0% { filter: drop-shadow(0 0 0px transparent); }
          50% { filter: drop-shadow(0 0 8px #ff0000); }
          100% { filter: drop-shadow(0 0 4px #ff0000); }
        }
        @keyframes sparkleIn {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
      
      <div
        className="fixed bottom-0 right-0 z-[9999] hidden md:flex flex-col items-end origin-bottom-right"
        style={{
          animation: isExiting 
            ? "catExit 700ms ease-in forwards"
            : isVisible 
              ? "catEnter 700ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
              : undefined,
        }}
        aria-hidden={!isVisible}
      >
        {/* Speech bubble */}
        <div
          className={`relative mb-2 mr-8 px-5 py-3 rounded-2xl shadow-xl border-2 transition-all duration-500 ${
            isAngry 
              ? "bg-gradient-to-br from-red-100 to-red-200 border-red-500" 
              : "bg-gradient-to-br from-white to-gray-100 border-primary"
          }`}
          style={{
            animation: isVisible ? "bubblePop 400ms ease-out 200ms both" : undefined,
          }}
        >
          <p className={`font-[var(--font-rajdhani)] font-extrabold text-base whitespace-nowrap drop-shadow-sm mb-2 transition-colors duration-300 ${isAngry ? "text-red-700" : "text-gray-900"}`}>
            {catState === "asking" && "Registered yet?"}
            {catState === "happy" && "Good choice! 😸"}
            {catState === "angry" && "Wrong life choice... 😾"}
          </p>
          
          {/* Buttons */}
          {catState === "asking" && (
            <div className="flex gap-2">
              <button
                onClick={handleYes}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
              >
                Yes ✓
              </button>
              <button
                onClick={handleNo}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
              >
                No ✗
              </button>
            </div>
          )}
          
          {catState === "angry" && (
            <button
              onClick={handleRegister}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 hover:scale-105 active:scale-95 transition-all animate-pulse"
            >
              Register NOW 🔪
            </button>
          )}

          <div className={`absolute -bottom-2 right-8 w-4 h-4 border-r-2 border-b-2 transform rotate-45 transition-colors duration-300 ${
            isAngry ? "bg-red-100 border-red-500" : "bg-white border-primary"
          }`} />
        </div>

        {/* Cat */}
        <div className="relative w-24 h-28 mr-4">
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
            {/* Eyes with animated color change */}
            <ellipse cx="38" cy="50" rx="8" ry="10" fill="white" />
            <ellipse cx="62" cy="50" rx="8" ry="10" fill="white" />
            <circle 
              cx="40" cy="52" r="5" 
              fill={isAngry ? "#FF0000" : "#333"} 
              style={{ 
                transition: "fill 400ms ease",
                animation: isAngry ? "eyeGlow 1s ease-out forwards" : undefined,
              }} 
            />
            <circle 
              cx="64" cy="52" r="5" 
              fill={isAngry ? "#FF0000" : "#333"} 
              style={{ 
                transition: "fill 400ms ease",
                animation: isAngry ? "eyeGlow 1s ease-out forwards" : undefined,
              }} 
            />
            <circle cx="42" cy="50" r="2" fill="white" />
            <circle cx="66" cy="50" r="2" fill="white" />
            {/* Angry eyebrows */}
            {isAngry && (
              <>
                <line x1="30" y1="40" x2="46" y2="44" stroke="#333" strokeWidth="3" strokeLinecap="round" style={{ animation: "fadeIn 300ms ease forwards" }} />
                <line x1="70" y1="40" x2="54" y2="44" stroke="#333" strokeWidth="3" strokeLinecap="round" style={{ animation: "fadeIn 300ms ease forwards" }} />
              </>
            )}
            {/* Nose */}
            <ellipse cx="50" cy="62" rx="4" ry="3" fill="#FF6B6B" />
            {/* Mouth - animated transitions between states */}
            <g style={{ animation: "mouthChange 300ms ease forwards" }} key={catState}>
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
            </g>
            {/* Whiskers */}
            <line x1="30" y1="58" x2="10" y2="55" stroke="#333" strokeWidth="1.5" />
            <line x1="30" y1="62" x2="10" y2="65" stroke="#333" strokeWidth="1.5" />
            <line x1="70" y1="58" x2="90" y2="55" stroke="#333" strokeWidth="1.5" />
            <line x1="70" y1="62" x2="90" y2="65" stroke="#333" strokeWidth="1.5" />
            {/* Blush - fades in/out based on state */}
            <g style={{ 
              opacity: isAngry ? 0 : 0.6, 
              transition: "opacity 400ms ease" 
            }}>
              <ellipse cx="30" cy="60" rx="5" ry="3" fill="#FFB6C1" />
              <ellipse cx="70" cy="60" rx="5" ry="3" fill="#FFB6C1" />
            </g>
            {/* Paw */}
            <ellipse cx="20" cy="85" rx="10" ry="8" fill="#FFB347" />
            <circle cx="14" cy="82" r="3" fill="#FFCC80" />
            <circle cx="20" cy="80" r="3" fill="#FFCC80" />
            <circle cx="26" cy="82" r="3" fill="#FFCC80" />
            
            {/* Knife with animation */}
            <g 
              style={{
                animation: showKnife 
                  ? "slideInKnife 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                  : isAngry && !showKnife 
                    ? "slideOutKnife 300ms ease-in forwards" 
                    : undefined,
                opacity: showKnife ? 1 : 0,
              }}
            >
              {/* Handle */}
              <rect x="8" y="65" width="8" height="20" rx="2" fill="#8B4513" />
              <rect x="9" y="67" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="72" width="6" height="3" fill="#A0522D" />
              <rect x="9" y="77" width="6" height="3" fill="#A0522D" />
              {/* Blade */}
              <path d="M 8 65 L 12 30 L 16 65 Z" fill="#C0C0C0" />
              <path d="M 10 65 L 12 35 L 12 65 Z" fill="#E8E8E8" />
              {/* Blood drops with drip animation */}
              <circle cx="12" cy="38" r="2" fill="#8B0000" style={{ animation: "bloodDrip 1s ease-in-out infinite" }} />
              <ellipse cx="14" cy="45" rx="1.5" ry="3" fill="#8B0000" style={{ animation: "bloodDrip 1s ease-in-out 0.3s infinite" }} />
              <circle cx="10" cy="50" r="1.5" fill="#8B0000" style={{ animation: "bloodDrip 1s ease-in-out 0.6s infinite" }} />
            </g>
          </svg>
          
          {/* Sparkles on happy - animated entry */}
          {isHappy && (
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-2 left-2 text-yellow-400" style={{ animation: "sparkleIn 400ms ease forwards, ping 1s cubic-bezier(0, 0, 0.2, 1) 400ms infinite" }}>✨</span>
              <span className="absolute top-4 right-4 text-yellow-400" style={{ animation: "sparkleIn 400ms ease 100ms forwards, ping 1s cubic-bezier(0, 0, 0.2, 1) 500ms infinite" }}>✨</span>
              <span className="absolute bottom-8 left-4 text-yellow-400" style={{ animation: "sparkleIn 400ms ease 200ms forwards, ping 1s cubic-bezier(0, 0, 0.2, 1) 600ms infinite" }}>✨</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}