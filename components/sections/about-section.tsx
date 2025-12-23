"use client"

import { Code, Lightbulb, Users, Trophy, Zap, Globe } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"
import AnimatedCounter from "@/components/features/animated-counter"
import { aboutData } from "@/lib/data"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={aboutData.title}
          subtitle={aboutData.subtitle}
          highlight={aboutData.highlight}
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left content */}
          <ScrollAnimation delay={100} variant="slide-right">
            <div className="space-y-6">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="font-[var(--font-sans)] text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 pt-4">
                {aboutData.stats.map((stat) => (
                  <TiltCard key={stat.label} tiltAmount={10} className="group">
                    <div className="px-5 py-3 bg-card/50 border border-border hover:border-primary/50 rounded-xl transition-all duration-500">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        className="font-[var(--font-orbitron)] text-primary font-bold text-xl group-hover:glow-text transition-all duration-300"
                      />
                      <span className="font-[var(--font-rajdhani)] text-muted-foreground ml-2">{stat.label}</span>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} variant="slide-left">
            <div className="relative perspective-2000">
              <div className="aspect-square max-w-md mx-auto relative preserve-3d">
                <div
                  className="absolute inset-0 border border-primary/20 rounded-2xl animate-pulse preserve-3d"
                  style={{ transform: "rotateX(10deg) rotateY(-10deg)" }}
                />
                <div
                  className="absolute inset-4 border border-primary/15 rounded-xl preserve-3d"
                  style={{ transform: "rotateX(-5deg) rotateY(5deg)", animationDelay: "0.5s" }}
                />
                <div
                  className="absolute inset-8 border border-primary/10 rounded-lg preserve-3d"
                  style={{ transform: "rotateX(5deg) rotateY(-5deg)", animationDelay: "1s" }}
                />

                {/* Center content with 3D effect */}
                <TiltCard tiltAmount={15} className="absolute inset-12 group">
                  <div className="h-full bg-card/60 backdrop-blur-sm rounded-xl border border-border flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6 relative z-10">
                      <AnimatedCounter
                        end={24}
                        className="font-[var(--font-orbitron)] text-7xl md:text-8xl font-bold text-gradient-animated"
                      />
                      <div className="font-[var(--font-rajdhani)] text-xl text-muted-foreground tracking-wide mt-2">
                        Hours of Innovation
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 group-hover:opacity-80 transition-opacity" />
                  </div>
                </TiltCard>

                <div className="absolute top-2 right-2 w-14 h-14 bg-primary/15 rounded-lg float-3d" />
                <div
                  className="absolute bottom-2 left-2 w-10 h-10 bg-secondary/15 rounded-full float-3d"
                  style={{ animationDelay: "-2s" }}
                />
                <div
                  className="absolute top-1/2 right-0 w-8 h-8 bg-accent/15 rounded-lg float-3d"
                  style={{ animationDelay: "-4s" }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={100 * (index + 1)}>
              <TiltCard tiltAmount={8} className="h-full">
                <div className="group h-full p-6 bg-card/40 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_oklch(0.65_0.25_250/0.15)]">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-[var(--font-rajdhani)] text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-[var(--font-sans)] text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
