import type React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron, Rajdhani, Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from "@/components/ui/custom-cursor"
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})


export const metadata: Metadata = {
  title: "NEXATHON 2026 | VIT Chennai's Premier Hackathon",
  description: "Join VIT Chennai's most anticipated 24-hour hackathon. Build, innovate, and compete with the brightest minds in tech.",
  keywords: ["hackathon", "VIT Chennai", "programming", "coding", "tech event", "innovation"],
  authors: [{ name: 'Nexus - The Technical Club of VIT Chennai' }],
  creator: 'Nexus - VIT Chennai',
  publisher: 'VIT Chennai',
  icons: {
    icon: [
      { url: '/logo_final_bg.png', sizes: '64x64', type: 'image/jpeg' },
      { url: '/logo_final_bg.png', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logo_final_bg.png', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
 <body
  className={`${orbitron.variable} ${rajdhani.variable} ${plusJakarta.variable}
  ${jetbrainsMono.variable} ${spaceGrotesk.variable}
  font-sans antialiased
  bg-[#060c06]
  min-h-screen`}
>


        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
