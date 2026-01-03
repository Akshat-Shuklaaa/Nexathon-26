"use client"

import React from "react"
import Link from "next/link"
import { Heart, ArrowUp, Terminal, Instagram, Linkedin, Github, Globe2Icon, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useLenis } from "@/components/providers/smooth-scroll-provider"

const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    // { label: "Schedule", href: "#schedule" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Register", href: "https://eventhubcc.vit.ac.in/EventHub/" },
    { label: "FAQs", href: "#faq" },
  ],
  // resources: [
  //   // { label: "Rules", href: "#faq" },
  //   // { label: "Code of Conduct", href: "#" },
  //   // { label: "Privacy Policy", href: "#" },
  // ],
  contact: [
    { label: "nexusvitc@gmail.com", href: "mailto:nexusvitc@gmail.com", icon: "mail" },
    { label: "+91 95554 01204", href: "tel:+919555401204", icon: "phone" },
    { label: "+91 70029 98267", href: "tel:+917002998267", icon: "phone" },
  ],
  social: [
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/nexus_vitc/",
      icon: "instagram"
    },
    { 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/company/nexusvitchennai/posts/?feedView=all",
      icon: "linkedin"
    },
    { 
      label: "Website", 
      href: "https://nexus-website-inky.vercel.app/",
      icon: "Globe2Icon"
    },
    { 
      label: "GitHub", 
      href: "https://github.com/Nexus-VITC",
      icon: "github"
    },
  ],
}

export default function Footer() {
  const lenis = useLenis()

  // Native fallback smooth scroll (easeInOutSine)
  const smoothScrollToTop = (duration = 1200) => {
    const start = window.scrollY || window.pageYOffset
    const startTime = performance.now()

    const easeInOutSine = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = easeInOutSine(progress)
      const y = Math.round(start * (1 - eased))
      window.scrollTo(0, y)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  // General smooth scroll handler for internal links (uses Lenis when available)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href || !href.startsWith("#")) return
    e.preventDefault()

    const selector = href === "#" ? "html" : href
    const target = document.querySelector(selector)
    if (!target) return

    if ((lenis as any)?.scrollTo) {
      try {
        ;(lenis as any).scrollTo(target, {
          duration: 1.5,
          easing: (t: number) => 0.5 - Math.cos(Math.PI * t) / 2,
        })
      } catch {
        ;(lenis as any).scrollTo(target, { duration: 1.5 })
      }
    } else {
      ;(target as Element).scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      {/* Back to top button with enhanced animation */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if ((lenis as any)?.scrollTo) {
              try {
                ;(lenis as any).scrollTo(0, { duration: 2.5, easing: (t: number) => 0.5 - Math.cos(Math.PI * t) / 2 })
              } catch {
                ;(lenis as any).scrollTo(0, { duration: 2.5 })
              }
            } else {
              smoothScrollToTop(1200)
            }
          }}
          className="group w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] hover:-translate-y-2 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand with hover effects */}
          <div>
            <Link href="#" onClick={(e) => handleScroll(e, "#")} className="group flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Image src="/logo_final_bg.png" alt="Nexathon Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <span className="font-[var(--font-orbitron)] text-xl font-bold text-foreground">
                NEXA<span className="text-primary group-hover:glow-text transition-all">THON</span>
              </span>
            </Link>
            <p className="font-[var(--font-sans)] text-sm text-muted-foreground mb-4">
              The ultimate tech hackathon experience. Code, Create, Conquer.
            </p>
            {/* Logo placeholders with float animation */}
            <div className="flex items-center gap-3">
              {/* <div
                className="w-12 h-12 border border-dashed border-primary/30 rounded-lg flex items-center justify-center hover:border-primary/60 transition-all duration-300 float"
                style={{ animationDelay: "0s" }}
              > */}
                <Image src="/club_final.png" alt="Logo" width={80} height={80} className="w-16 h-16 object-contain" />
              {/* </div> */}
              <div
                className="justify-center"
                // style={{ animationDelay: "1s" }}
              >
                <Image src="/vit-blue.png" alt="College Logo" width={80} height={80} className="w-26 h-26 object-contain" />
              </div>
            </div>
          </div>

          {/* Quick Links with hover animations */}
          <div className="md:ml-auto">
            <h4 className="font-[var(--font-rajdhani)] font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="group font-[var(--font-sans)] text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="font-[var(--font-rajdhani)] font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group font-[var(--font-sans)] text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div className="md:ml-auto">
            <h4 className="font-[var(--font-rajdhani)] font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group font-[var(--font-sans)] text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.icon === 'mail' && <Mail className="w-4 h-4" />}
                    {link.icon === 'phone' && <Phone className="w-4 h-4" />}
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  {footerLinks.social.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon === 'instagram' && <Instagram className="w-5 h-5" />}
                      {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                      {social.icon === 'github' && <Github className="w-5 h-5" />}
                      {social.icon === 'Globe2Icon' && <Globe2Icon className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with enhanced styling */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-sans)] text-sm text-muted-foreground flex items-center gap-1">
            © 2026 NEXATHON. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by the
            NEXUS Team
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="font-[var(--font-rajdhani)] text-sm text-primary hover:underline hover:glow-text transition-all"
            >
              Contact Us
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="font-[var(--font-jetbrains)] text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
