"use client"

import { Brain, Leaf, Shield, Smartphone, Globe, Cpu } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

const themes = [
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent solutions using cutting-edge AI technologies, from computer vision to natural language processing",
    icon: Brain,
    tags: ["GPT", "TensorFlow", "Computer Vision", "NLP"],
  },
  {
    title: "Sustainability & CleanTech",
    description: "Create innovative solutions for environmental challenges and sustainable development",
    icon: Leaf,
    tags: ["Green Tech", "Energy", "Waste Management", "Climate"],
  },
  {
    title: "Cybersecurity",
    description: "Develop tools and solutions to protect digital assets and ensure online safety",
    icon: Shield,
    tags: ["Encryption", "Privacy", "Threat Detection", "Auth"],
  },
  {
    title: "HealthTech",
    description: "Transform healthcare with technology that improves patient care and medical processes",
    icon: Smartphone,
    tags: ["Telemedicine", "Wearables", "Mental Health", "Diagnostics"],
  },
  {
    title: "Web3 & Blockchain",
    description: "Build decentralized applications and explore the future of the internet",
    icon: Globe,
    tags: ["DeFi", "NFTs", "Smart Contracts", "DAOs"],
  },
  {
    title: "Open Innovation",
    description: "Got a unique idea? This track is for any innovative solution that doesn't fit other categories",
    icon: Cpu,
    tags: ["IoT", "AR/VR", "Automation", "EdTech"],
  },
]

export default function ThemeSection() {
  return (
    <section id="themes" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hackathon Themes"
          subtitle="Choose from diverse problem statements and build something impactful"
          highlight="// THEMES"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-2000">
          {themes.map((theme, index) => (
            <ScrollAnimation key={theme.title} delay={100 * (index + 1)}>
              <TiltCard tiltAmount={10} className="h-full">
                <div className="group h-full p-6 bg-card border border-border rounded-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_oklch(0.78_0.22_145/0.15)] preserve-3d">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 relative preserve-3d group-hover:scale-110">
                    <theme.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
                    <div className="absolute inset-0 rounded-xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="font-[var(--font-rajdhani)] text-xl font-bold text-foreground mb-3 group-hover:text-gradient-animated transition-all duration-300">
                    {theme.title}
                  </h3>
                  <p className="font-[var(--font-sans)] text-sm text-muted-foreground mb-4 leading-relaxed">
                    {theme.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {theme.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-[var(--font-jetbrains)] rounded-full border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:border-primary/40"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
