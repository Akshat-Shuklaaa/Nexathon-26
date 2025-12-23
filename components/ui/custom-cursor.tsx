"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseEnter = () => setIsHovered(true)
        const handleMouseLeave = () => setIsHovered(false)

        window.addEventListener("mousemove", moveCursor)

        // Add hover listeners to clickable elements
        const clickables = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter)
            el.addEventListener("mouseleave", handleMouseLeave)
        })

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const clickables = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
            clickables.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter)
                el.addEventListener("mouseleave", handleMouseLeave)
            })
        })

        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter)
                el.removeEventListener("mouseleave", handleMouseLeave)
            })
            observer.disconnect()
        }
    }, [cursorX, cursorY, isVisible])

    // Hide on mobile/touch devices
    useEffect(() => {
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) setIsVisible(false)
    }, [])

    if (!isVisible) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference">
            {/* Main Cursor Dot */}
            <motion.div
                className="absolute h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 0.5 : 1,
                }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="absolute h-8 w-8 rounded-full border border-primary/50"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(var(--color-primary), 0.1)" : "transparent",
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                }}
            />
        </div>
    )
}
