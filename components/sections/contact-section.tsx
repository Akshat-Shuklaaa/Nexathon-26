"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, InstagramIcon, LinkedinIcon, Github, Globe2Icon } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import TiltCard from "@/components/features/tilt-card"
import Image from "next/image"

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: React.ReactNode;
  link: string;
  isPhone?: boolean;
}

const ContactCard = ({ icon: Icon, title, value, link, isPhone = false }: ContactCardProps) => {
  const content = (
    <>
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        <div className="font-[var(--font-rajdhani)] font-bold text-lg">{value}</div>
      </div>
    </>
  );

  if (isPhone) {
    return (
      <div className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10">
        {content}
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10"
    >
      {content}
    </a>
  );
};

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
    value: (
      <div className="flex flex-col gap-1">
        <a href="tel:+919555401204" className="hover:underline hover:text-primary">+91 95554 01204</a>
        <a href="tel:+917002998267" className="hover:underline hover:text-primary">+91 70029 98267</a>
      </div>
    ),
    link: "#",
    isPhone: true,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vellore Institute of Technology, Chennai",
    link: "https://maps.app.goo.gl/NRZRaysDrtGJF4E76",
  },
]

const socialLinks = [
  { 
    icon: InstagramIcon, 
    href: "https://www.instagram.com/nexus_vitc/", 
    label: "Instagram" 
  },
  { 
    icon: LinkedinIcon, 
    href: "https://www.linkedin.com/company/nexusvitchennai/posts/?feedView=all", 
    label: "LinkedIn" 
  },
  { 
    icon: Globe2Icon, 
    href: "https://nexus-website-inky.vercel.app/", 
    label: "Website" 
  },
  { 
    icon: Github, 
    href: "https://github.com/Nexus-VITC", 
    label: "Github" 
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent! We'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <ContactCard
                      icon={info.icon}
                      title={info.title}
                      value={info.value}
                      link={info.link}
                      isPhone={info.isPhone}
                    />
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
              {/* <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 border border-dashed border-primary/50 rounded-lg flex items-center justify-center float-3d hover:border-primary transition-colors">
                  <Image src="/VIT_COLOURED.png" alt="College Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <div
                  className="w-16 h-16 border border-dashed border-primary/50 rounded-lg flex items-center justify-center float-3d hover:border-primary transition-colors"
                  style={{ animationDelay: "-2s" }}
                >
                  <Image src="/logo.png" alt="College Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
              </div> */}
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

                {submitStatus && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    submitStatus.success 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full px-6 py-4 ${
                    isSubmitting ? 'bg-primary/70' : 'bg-primary'
                  } text-primary-foreground font-[var(--font-rajdhani)] font-bold rounded-lg text-lg flex items-center justify-center gap-2 transition-all duration-500 ${
                    !isSubmitting && 'hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-[1.02] active:scale-[0.98]'
                  } relative z-10 ${!isSubmitting && 'shimmer'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                      <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
