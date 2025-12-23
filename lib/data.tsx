import {
  Calendar,
  MapPin,
  Users,
  Terminal,
  Sparkles,
  Code,
  Lightbulb,
  Trophy,
  Zap,
  Globe,
  Clock,
  Award,
  Target,
  Rocket,
  Brain,
  Shield,
  type LucideIcon,
} from "lucide-react"

/**
 * NEXATHON 2026 - Centralized Data Configuration
 * 
 * This file contains all static data used throughout the website.
 * Update values here to change content across the entire site.
 * 
 * Structure:
 * - Event Information: Basic hackathon details
 * - Hero Section: Landing page content
 * - About Section: Features and statistics
 * - Schedule: Event timeline
 * - Timeline: Registration & event milestones
 * - Sponsors: Partner organizations
 * - Rewards: Prizes and categories
 * - Themes: Hackathon tracks
 * - FAQ: Common questions
 * - Gallery: Event images
 * - Contact: Organization details
 * - Navigation: Menu links
 * - Social Media: Links
 */

// =============================================================================
// EVENT INFORMATION
// =============================================================================

export const eventInfo = {
  name: "NEXATHON 2026",
  tagline: "Build. Innovate. Transform.",
  shortDescription: "24-hour coding marathon at VIT CHENNAI",
  longDescription:
    "NEXATHON is not just a hackathon—it's a movement. We bring together the brightest minds from across the nation to solve real-world problems through technology and innovation at Nexus.",
  date: "First week of March, 2026",
  duration: "24 Hours",
  venue: "VIT CHENNAI",
  venueShort: "VIT CHENNAI",
  participantCount: 500,
  mentorCount: 50,
  prizePool: "₹5,00,000",
  registrationFee: "₹500 per team",
  teamSize: "2-4 members",
  edition: "5th Edition",
  year: 2026,
}

// =============================================================================
// HERO SECTION
// =============================================================================

export const heroData = {
  logo: {
    text: "NEXATHON",
    subtitle: "2026",
    description: "Innovation Starts Here",
  },
  taglines: ["Build the Future", "Break Boundaries", "Ship Products", "Code Dreams"],
  stats: [
    { icon: Calendar, label: "Date", value: eventInfo.date },
    { icon: MapPin, label: "Location", value: eventInfo.venueShort },
    { icon: Users, label: "Participants", value: `${eventInfo.participantCount}+` },
    { icon: Terminal, label: "Duration", value: eventInfo.duration },
  ],
  cta: {
    primary: {
      text: "Register Now",
      link: "#register",
    },
    secondary: {
      text: "Learn More",
      link: "#about",
    },
  },
}

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const aboutData = {
  title: "About NEXATHON",
  subtitle: "The ultimate playground for tech enthusiasts to innovate, collaborate, and create the future",
  highlight: "// ABOUT US",
  description: [
    "NEXATHON is not just a hackathon—it's a movement. We bring together the brightest minds from across the nation to solve real-world problems through technology and innovation.",
    "Whether you're a seasoned developer, a creative designer, or a first-time hacker, NEXATHON provides the perfect platform to showcase your skills, learn new technologies, and build connections that last a lifetime.",
  ],
  features: [
    {
      icon: Code,
      title: "24 Hours of Coding",
      description: "Non-stop coding marathon to build innovative solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Transform your ideas into reality with expert mentorship",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Network with 500+ developers, designers, and innovators",
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "Win prizes worth ₹5,00,000+ across multiple categories",
    },
    {
      icon: Zap,
      title: "Workshops & Sessions",
      description: "Learn from industry experts through hands-on workshops",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Build solutions that can make a difference worldwide",
    },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Participants" },
    { value: 50, suffix: "+", label: "Mentors" },
    { value: 24, suffix: "", label: "Hours" },
  ],
}

// =============================================================================
// SCHEDULE
// =============================================================================

export const scheduleData = {
  title: "Event Schedule",
  subtitle: "24 hours of non-stop innovation, learning, and collaboration",
  highlight: "// SCHEDULE",
  days: [
    {
      day: "Day 1",
      date: "March 15, 2026",
      events: [
        { time: "09:00 AM", title: "Registration & Check-in", description: "Collect your swag and meet your team" },
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address and hackathon kickoff",
          highlight: true,
        },
        { time: "11:00 AM", title: "Hacking Begins", description: "Start building your project", highlight: true },
        { time: "01:00 PM", title: "Lunch Break", description: "Fuel up for the afternoon" },
        { time: "03:00 PM", title: "Workshop: AI/ML Basics", description: "Learn fundamentals from experts" },
        { time: "05:00 PM", title: "Mentor Meet & Greet", description: "Connect with industry mentors" },
        { time: "07:00 PM", title: "Dinner", description: "Evening meal and networking" },
        { time: "09:00 PM", title: "Mini Challenge 1", description: "Win exciting prizes" },
        { time: "11:00 PM", title: "Midnight Snacks", description: "Late night fuel" },
      ],
    },
    {
      day: "Day 2",
      date: "March 16, 2026",
      events: [
        { time: "02:00 AM", title: "Midnight Gaming Session", description: "Take a break and play" },
        { time: "07:00 AM", title: "Breakfast", description: "Fresh start to the morning" },
        { time: "09:00 AM", title: "Workshop: Cloud Deployment", description: "Learn to deploy your projects" },
        { time: "12:00 PM", title: "Checkpoint 1", description: "Show your progress to mentors" },
        { time: "01:00 PM", title: "Lunch", description: "Midday refuel" },
        { time: "03:00 PM", title: "Mini Challenge 2", description: "Test your quick problem-solving" },
        { time: "05:00 PM", title: "Workshop: UI/UX Design", description: "Polish your project interface" },
        { time: "07:00 PM", title: "Dinner", description: "Evening meal" },
        { time: "09:00 PM", title: "Final Sprint Begins", description: "Last push before submission" },
      ],
    },
    {
      day: "Day 3",
      date: "March 17, 2026",
      events: [
        { time: "08:00 AM", title: "Breakfast", description: "Final day fuel" },
        {
          time: "11:00 AM",
          title: "Hacking Ends",
          description: "Final submission deadline",
          highlight: true,
        },
        { time: "12:00 PM", title: "Lunch & Demos Setup", description: "Prepare your presentation" },
        {
          time: "01:00 PM",
          title: "Project Presentations",
          description: "Showcase your work to judges",
          highlight: true,
        },
        { time: "04:00 PM", title: "Judging Session", description: "Evaluation by expert panel" },
        { time: "05:30 PM", title: "Closing Ceremony", description: "Prize distribution and awards", highlight: true },
        { time: "07:00 PM", title: "Networking Dinner", description: "Celebrate and connect" },
      ],
    },
  ],
}

// =============================================================================
// TIMELINE
// =============================================================================

export const timelineData = {
  title: "Journey Timeline",
  subtitle: "Key milestones from registration to finale",
  highlight: "// TIMELINE",
  milestones: [
    {
      title: "Registration Opens",
      date: "January 15, 2026",
      description: "Early bird discount available for first 100 teams. Secure your spot now!",
      status: "completed",
    },
    {
      title: "Early Bird Deadline",
      date: "February 15, 2026",
      description: "Get 20% off on registration. Limited slots remaining!",
      status: "completed",
    },
    {
      title: "Registration Closes",
      date: "March 10, 2026",
      description: "Final date to register. Team formation and idea submission deadline.",
      status: "upcoming",
    },
    {
      title: "Hackathon Begins",
      date: "March 15, 2026",
      description: "Opening ceremony at 10 AM. Let the innovation begin!",
      status: "upcoming",
    },
    {
      title: "Mid-Hackathon Checkpoint",
      date: "March 16, 2026",
      description: "Progress review, mentor sessions, and mini challenges.",
      status: "upcoming",
    },
    {
      title: "Final Presentations",
      date: "March 17, 2026",
      description: "Showcase your projects to judges and win amazing prizes!",
      status: "upcoming",
    },
  ],
}

// =============================================================================
// SPONSORS
// =============================================================================

export const sponsorsData = {
  title: "Our Sponsors",
  subtitle: "Powered by industry leaders who believe in fostering innovation",
  highlight: "// SPONSORS",
  tiers: [
    {
      tier: "Platinum Partners",
      sponsors: [
        { name: "TechCorp Global", logo: "/logos/techcorp.svg", website: "https://techcorp.com" },
        { name: "InnovateLabs", logo: "/logos/innovatelabs.svg", website: "https://innovatelabs.com" },
      ],
      size: "large",
    },
    {
      tier: "Gold Partners",
      sponsors: [
        { name: "CloudScale", logo: "/logos/cloudscale.svg", website: "https://cloudscale.com" },
        { name: "DataDrive", logo: "/logos/datadrive.svg", website: "https://datadrive.com" },
        { name: "CodeCraft", logo: "/logos/codecraft.svg", website: "https://codecraft.com" },
      ],
      size: "medium",
    },
    {
      tier: "Silver Partners",
      sponsors: [
        { name: "DevTools Inc", logo: "/logos/devtools.svg", website: "https://devtools.com" },
        { name: "ByteForge", logo: "/logos/byteforge.svg", website: "https://byteforge.com" },
        { name: "PixelPerfect", logo: "/logos/pixelperfect.svg", website: "https://pixelperfect.com" },
        { name: "NextGen AI", logo: "/logos/nextgenai.svg", website: "https://nextgenai.com" },
      ],
      size: "small",
    },
    {
      tier: "Community Partners",
      sponsors: [
        { name: "GitHub Education", logo: "/logos/github.svg", website: "https://education.github.com" },
        { name: "Dev Community", logo: "/logos/devcommunity.svg", website: "https://dev.to" },
        { name: "Tech Meetup", logo: "/logos/techmeetup.svg", website: "https://techmeetup.com" },
        { name: "Code Academy", logo: "/logos/codeacademy.svg", website: "https://codeacademy.com" },
        { name: "StartupHub", logo: "/logos/startuphub.svg", website: "https://startuphub.com" },
      ],
      size: "small",
    },
  ],
  cta: {
    title: "Want to sponsor?",
    description: "Join us in empowering the next generation of innovators",
    button: "Become a Sponsor",
    email: "sponsors@nexathon.com",
  },
}

// =============================================================================
// REWARDS & PRIZES
// =============================================================================

export const rewardsData = {
  title: "Prizes & Rewards",
  subtitle: "Compete for prizes worth ₹5,00,000+ across multiple categories",
  highlight: "// REWARDS",
  mainPrizes: [
    {
      position: "1st Place",
      prize: "₹2,00,000",
      benefits: ["Cash Prize", "Trophy & Certificates", "Internship Opportunities", "Startup Mentorship"],
      icon: Trophy,
      color: "primary",
    },
    {
      position: "2nd Place",
      prize: "₹1,25,000",
      benefits: ["Cash Prize", "Certificates", "Workshop Credits", "Networking Access"],
      icon: Award,
      color: "secondary",
    },
    {
      position: "3rd Place",
      prize: "₹75,000",
      benefits: ["Cash Prize", "Certificates", "Swag Kit", "Community Access"],
      icon: Target,
      color: "accent",
    },
  ],
  specialPrizes: [
    {
      title: "Best AI/ML Project",
      prize: "₹30,000",
      sponsor: "TechCorp Global",
      icon: Brain,
    },
    {
      title: "Best UI/UX Design",
      prize: "₹25,000",
      sponsor: "PixelPerfect",
      icon: Sparkles,
    },
    {
      title: "Best Blockchain Solution",
      prize: "₹30,000",
      sponsor: "CloudScale",
      icon: Shield,
    },
    {
      title: "Most Innovative Idea",
      prize: "₹20,000",
      sponsor: "InnovateLabs",
      icon: Lightbulb,
    },
    {
      title: "Best Social Impact",
      prize: "₹25,000",
      sponsor: "DataDrive",
      icon: Globe,
    },
    {
      title: "Fastest MVP",
      prize: "₹15,000",
      sponsor: "CodeCraft",
      icon: Rocket,
    },
  ],
  perks: [
    "All participants receive certificates",
    "Exclusive NEXATHON swag kit",
    "Free access to workshops",
    "Networking opportunities with industry leaders",
    "6 months of cloud credits",
    "Premium tool subscriptions",
  ],
}

// =============================================================================
// HACKATHON THEMES/TRACKS
// =============================================================================

export const themesData = {
  title: "Hackathon Themes",
  subtitle: "Choose your track and build something amazing",
  highlight: "// THEMES",
  themes: [
    {
      title: "Artificial Intelligence & ML",
      description: "Leverage AI/ML to solve real-world problems and create intelligent solutions",
      icon: Brain,
      color: "primary",
      examples: ["Predictive Analytics", "Computer Vision", "NLP Applications", "Recommendation Systems"],
    },
    {
      title: "Web3 & Blockchain",
      description: "Build decentralized applications and explore the future of the internet",
      icon: Shield,
      color: "secondary",
      examples: ["DeFi Platforms", "NFT Marketplaces", "DAO Tools", "Smart Contracts"],
    },
    {
      title: "Healthcare & Wellness",
      description: "Create innovative solutions for health monitoring and medical assistance",
      icon: Sparkles,
      color: "accent",
      examples: ["Telemedicine", "Health Tracking", "Mental Wellness", "Medical AI"],
    },
    {
      title: "Education Technology",
      description: "Transform learning experiences with interactive and accessible educational tools",
      icon: Lightbulb,
      color: "primary",
      examples: ["E-Learning Platforms", "Skill Assessment", "Virtual Labs", "Adaptive Learning"],
    },
    {
      title: "Sustainability & Climate",
      description: "Develop solutions for environmental challenges and sustainable development",
      icon: Globe,
      color: "secondary",
      examples: ["Carbon Tracking", "Resource Optimization", "Renewable Energy", "Waste Management"],
    },
    {
      title: "FinTech & Banking",
      description: "Innovate in financial services with secure and accessible solutions",
      icon: Target,
      color: "accent",
      examples: ["Payment Solutions", "Budget Planning", "Investment Tools", "Financial Literacy"],
    },
  ],
}

// =============================================================================
// FAQ
// =============================================================================

export const faqData = {
  title: "FAQs",
  subtitle: "Got questions? We've got answers",
  highlight: "// FAQ",
  questions: [
    {
      question: "Who can participate in NEXATHON?",
      answer:
        "NEXATHON is open to all students and professionals passionate about technology. Whether you're a beginner or an experienced developer, everyone is welcome! Teams can consist of 2-4 members from any college or professional background.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, there is a nominal registration fee of ₹500 per team (not per person). This covers meals, swag, and access to all workshops and mentoring sessions. Early bird registrations get a 20% discount!",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, and any hardware you might need for your project. We'll provide WiFi, power outlets, food, and beverages. Don't forget your student ID for verification!",
    },
    {
      question: "Can I participate without a team?",
      answer:
        "Yes! We have a team matching session before the hackathon where solo participants can find teammates. You can also join our Discord server to connect with potential team members.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects are judged on Innovation & Creativity (25%), Technical Complexity (25%), Design & User Experience (20%), Practical Applicability (20%), and Presentation (10%). Our panel includes industry experts and tech leaders.",
    },
    {
      question: "Can I work on a pre-existing project?",
      answer:
        "No, all projects must be built from scratch during the hackathon. However, you can use open-source libraries, APIs, and pre-existing tools. Any code written before the hackathon is not allowed.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "We have 50+ mentors from leading tech companies who will be available throughout the event to guide you. Mentors cover various domains including AI/ML, Web Development, Blockchain, and Design.",
    },
    {
      question: "Is accommodation provided?",
      answer:
        "The venue is equipped for overnight stay with rest areas. For participants needing formal accommodation, we have partnered with nearby hotels offering special discounts. Details will be shared upon registration confirmation.",
    },
  ],
  cta: {
    title: "Still have questions?",
    description: "Reach out to us and we'll help you out",
    button: "Contact Us",
    link: "#contact",
  },
}

// =============================================================================
// GALLERY
// =============================================================================

export const galleryData = {
  title: "Event Gallery",
  subtitle: "Relive the moments from NEXATHON 2025",
  highlight: "// GALLERY",
  images: [
    {
      src: "/gallery/nexathon-opening.jpg",
      alt: "NEXATHON Opening Ceremony",
      category: "ceremony",
      title: "Opening Ceremony 2025",
    },
    {
      src: "/gallery/team-coding.jpg",
      alt: "Teams coding during hackathon",
      category: "hacking",
      title: "Midnight Coding Session",
    },
    {
      src: "/gallery/mentor-session.jpg",
      alt: "Mentor guiding participants",
      category: "mentorship",
      title: "Expert Mentorship",
    },
    {
      src: "/gallery/workshop.jpg",
      alt: "Technical workshop in progress",
      category: "workshop",
      title: "AI/ML Workshop",
    },
    {
      src: "/gallery/presentations.jpg",
      alt: "Team presenting their project",
      category: "demo",
      title: "Final Presentations",
    },
    {
      src: "/gallery/winners.jpg",
      alt: "Winners celebrating with trophy",
      category: "ceremony",
      title: "Prize Distribution",
    },
    {
      src: "/gallery/networking.jpg",
      alt: "Participants networking",
      category: "social",
      title: "Networking Session",
    },
    {
      src: "/gallery/venue.jpg",
      alt: "Event venue overview",
      category: "venue",
      title: "Event Venue",
    },
  ],
  categories: ["All", "Ceremony", "Hacking", "Workshop", "Demo", "Social"],
}

// =============================================================================
// CONTACT & ORGANIZATION INFO
// =============================================================================

export const contactData = {
  title: "Get In Touch",
  subtitle: "Have questions? We'd love to hear from you",
  highlight: "// CONTACT",
  organization: {
    name: "NEXATHON Organizing Committee",
    college: "Tech Innovation Center",
    logo: "/logos/nexathon-main.svg",
    description: "Empowering innovation through technology",
  },
  address: {
    line1: "Tech Innovation Center",
    line2: "Koramangala, Bangalore",
    line3: "Karnataka 560095, India",
  },
  email: "nexusvitc@gmail.com",
  phone: "+91 98765 43210",
  social: {
    twitter: "https://twitter.com/nexathon",
    linkedin: "https://linkedin.com/company/nexathon",
    instagram: "https://instagram.com/nexathon",
    github: "https://github.com/nexathon",
    discord: "https://discord.gg/nexathon",
    youtube: "https://youtube.com/@nexathon",
  },
  team: [
    {
      name: "Priya Sharma",
      role: "Event Lead",
      email: "priya@nexathon.com",
      phone: "+91 98765 11111",
    },
    {
      name: "Rahul Verma",
      role: "Technical Head",
      email: "rahul@nexathon.com",
      phone: "+91 98765 22222",
    },
    {
      name: "Ananya Patel",
      role: "Sponsorship Lead",
      email: "ananya@nexathon.com",
      phone: "+91 98765 33333",
    },
  ],
}

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigationData = {
  logo: {
    text: "NEXATHON",
    subtitle: "'26",
  },
  links: [
    { href: "#about", label: "About" },
    { href: "#schedule", label: "Schedule" },
    { href: "#timeline", label: "Timeline" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#rewards", label: "Rewards" },
    { href: "#register", label: "Register" },
    { href: "#themes", label: "Themes" },
    { href: "#faq", label: "FAQ" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ],
}

// =============================================================================
// FOOTER
// =============================================================================

export const footerData = {
  ...contactData,
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Register", href: "#register" },
  ],
  resources: [
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Press Kit", href: "/press" },
  ],
  copyright: `© ${new Date().getFullYear()} NEXATHON. All rights reserved.`,
  tagline: "Building the future, one hack at a time.",
}

// =============================================================================
// TYPE EXPORTS (for TypeScript support)
// =============================================================================

export type EventInfo = typeof eventInfo
export type HeroData = typeof heroData
export type AboutData = typeof aboutData
export type ScheduleData = typeof scheduleData
export type TimelineData = typeof timelineData
export type SponsorsData = typeof sponsorsData
export type RewardsData = typeof rewardsData
export type ThemesData = typeof themesData
export type FAQData = typeof faqData
export type GalleryData = typeof galleryData
export type ContactData = typeof contactData
export type NavigationData = typeof navigationData
export type FooterData = typeof footerData
