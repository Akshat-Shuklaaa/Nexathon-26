"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { navigationData } from "@/lib/data"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navigationData.links.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="w-[160px] h-[120px] object-contain"
            />

          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigationData.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-[var(--font-rajdhani)] font-medium transition-all duration-300 relative group ${activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#register"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_25px_oklch(0.65_0.25_250/0.4)] hover:scale-105"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button - Removed Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-t border-border/50 px-4 py-6 space-y-1">
          {navigationData.links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-[var(--font-rajdhani)] font-medium rounded-lg transition-all duration-300 ${activeSection === link.href.replace("#", "")
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#register"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-semibold rounded-lg text-center mt-4"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
