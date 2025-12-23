"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Linkedin, Globe } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import TiltCard from "@/components/features/tilt-card"
import Image from "next/image"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "nexusvitc@gmail.com",
    link: "mailto:nexusvitc@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vellore Institute of Technology, Chennai",
    link: "#",
  },
]

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/nexus_vitc/", 
    label: "Instagram" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/nexusvitchennai/posts/?feedView=all", 
    label: "LinkedIn" 
  },
  { 
    icon: Globe, 
    href: "https://nexusvitc.in/", 
    label: "Website" 
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Ask Us"
          subtitle="Have questions or want to get in touch? We'd love to hear from you!"
          highlight="// CONTACT"
        />

        <div className="grid lg:grid-cols-2 gap-12 perspective-2000">
          {/* Contact Info */}
          <ScrollAnimation variant="slide-right">
            <div className="space-y-8">
              <div>
                <h3 className="font-[var(--font-rajdhani)] text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="font-[var(--font-sans)] text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question about registration, sponsorship, or anything else, our team is ready to
                  answer all your questions.
                </p>
              </div>

              {/* Contact Cards with 3D effect */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <TiltCard key={info.title} tiltAmount={10}>
                    <a
                      href={info.link}
                      className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_oklch(0.78_0.22_145/0.15)]"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-[var(--font-rajdhani)] font-semibold text-foreground">{info.title}</h4>
                        <p className="font-[var(--font-sans)] text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </TiltCard>
                ))}
              </div>

              {/* Social Links with hover animations */}
              <div>
                <h4 className="font-[var(--font-rajdhani)] font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_oklch(0.78_0.22_145/0.3)]"
                      aria-label={social.label}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* College Logo Placeholder with float animation */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 border border-dashed border-primary/50 rounded-lg flex items-center justify-center float-3d hover:border-primary transition-colors">
                  <Image src="/VIT_COLOURED.png" alt="College Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <div
                  className="w-16 h-16 border border-dashed border-primary/50 rounded-lg flex items-center justify-center float-3d hover:border-primary transition-colors"
                  style={{ animationDelay: "-2s" }}
                >
                  <Image src="/logo.png" alt="College Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form with 3D tilt */}
          <ScrollAnimation delay={200} variant="slide-left">
            <TiltCard tiltAmount={6}>
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 holographic opacity-10" />

                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-[var(--font-rajdhani)] text-xl font-bold text-foreground">Send us a Message</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-2">
                    <label className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Query</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="technical">Technical Question</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="font-[var(--font-rajdhani)] font-semibold text-foreground text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-6 py-4 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-bold rounded-lg text-lg flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-[1.02] active:scale-[0.98] relative z-10 shimmer"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                  <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </form>
            </TiltCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
