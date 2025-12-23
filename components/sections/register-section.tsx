"use client"

import type React from "react"
import { useState } from "react"
import { Send, User, Mail, Phone, Users, Code, FileText, Sparkles } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    teamSize: "4",
    experience: "",
    projectIdea: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Registration submitted! We'll contact you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const InputWrapper = ({
    children,
    name,
    icon: Icon,
  }: { children: React.ReactNode; name: string; icon: React.ElementType }) => (
    <div className={`relative transition-all duration-300 ${focusedField === name ? "scale-[1.02]" : ""}`}>
      <div
        className={`absolute -inset-px rounded-lg transition-all duration-300 ${focusedField === name ? "bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 blur-sm" : ""}`}
      />
      <div className="relative">{children}</div>
    </div>
  )

  return (
    <section id="register" className="relative py-20 md:py-32 bg-muted/30">
      <div className="absolute inset-0 grid-pattern-animated opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Register Now"
          subtitle="Secure your spot at NEXATHON 2026 and start your innovation journey"
          highlight="// REGISTER"
        />

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <TiltCard tiltAmount={4}>
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 holographic opacity-10" />

                {/* Team Name */}
                <InputWrapper name="teamName" icon={Users}>
                  <div className="space-y-2">
                    <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("teamName")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Enter your team name"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                    />
                  </div>
                </InputWrapper>

                {/* Two columns */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputWrapper name="leaderName" icon={User}>
                    <div className="space-y-2">
                      <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Team Leader Name
                      </label>
                      <input
                        type="text"
                        name="leaderName"
                        value={formData.leaderName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("leaderName")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="Full name"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                      />
                    </div>
                  </InputWrapper>

                  <InputWrapper name="teamSize" icon={Users}>
                    <div className="space-y-2">
                      <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Team Size
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("teamSize")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                      >
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                      </select>
                    </div>
                  </InputWrapper>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputWrapper name="email" icon={Mail}>
                    <div className="space-y-2">
                      <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="team@example.com"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                      />
                    </div>
                  </InputWrapper>

                  <InputWrapper name="phone" icon={Phone}>
                    <div className="space-y-2">
                      <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                      />
                    </div>
                  </InputWrapper>
                </div>

                {/* Experience */}
                <InputWrapper name="experience" icon={Code}>
                  <div className="space-y-2">
                    <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Technical Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("experience")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                </InputWrapper>

                {/* Project Idea */}
                <InputWrapper name="projectIdea" icon={FileText}>
                  <div className="space-y-2">
                    <label className="font-[var(--font-rajdhani)] font-semibold text-foreground flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Project Idea (Optional)
                    </label>
                    <textarea
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("projectIdea")}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      placeholder="Briefly describe your project idea or the problem you want to solve..."
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-[var(--font-sans)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none focus:shadow-[0_0_20px_oklch(0.78_0.22_145/0.2)]"
                    />
                  </div>
                </InputWrapper>

                {/* Submit Button with enhanced animation */}
                <button
                  type="submit"
                  className="group w-full px-6 py-4 bg-primary text-primary-foreground font-[var(--font-orbitron)] font-bold rounded-lg text-lg flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden shimmer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Registration
                    <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>

                <p className="font-[var(--font-sans)] text-xs text-muted-foreground text-center">
                  By registering, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            </TiltCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
