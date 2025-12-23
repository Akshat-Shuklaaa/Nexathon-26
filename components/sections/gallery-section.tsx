"use client"

import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import ContactCTA from "@/components/features/contact-cta"

const galleryImages = [
  { src: "/img6.jpg", alt: "Coding Session" },
  { src: "/img7.jpg", alt: "Workshop" },
  { src: "/img5.jpg", alt: "Team Collaboration" },
  { src: "/img1.jpg", alt: "Award Ceremony" },
  { src: "/img2.jpg", alt: "Networking" },
  { src: "/img3.jpg", alt: "Project Demo" },
  { src: "/img4.jpg", alt: "Mentoring" },
  { src: "/img10.jpg", alt: "Late Night Coding" },
  { src: "/img8.jpg", alt: "Food & Fun" },
  { src: "/img9.jpg", alt: "Celebration" },
]

export default function GallerySection() {
  // Duplicate images for seamless scrolling
  const scrollingImages = [...galleryImages, ...galleryImages]

  return (
    <section id="gallery" className="relative py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Gallery"
          subtitle="Glimpses from our previous hackathons"
          highlight="// GALLERY"
        />
      </div>

      <ScrollAnimation>
        <div className="relative overflow-hidden py-8">
          {/* Scrolling images */}
          <div className="flex w-max animate-scrollSmooth">
            {scrollingImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 group relative preserve-3d mr-5">
                <div
                  className="w-80 h-56 md:w-[420px] md:h-72 rounded-xl overflow-hidden border-2 border-border transition-all duration-700 relative"
                  style={{ transform: "perspective(1000px) rotateY(0deg)", transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateY(-5deg) rotateX(5deg) translateZ(30px)"
                    e.currentTarget.style.borderColor = "oklch(0.78 0.22 145 / 0.5)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg)"
                    e.currentTarget.style.borderColor = ""
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <div>
                      <span className="font-[var(--font-rajdhani)] text-foreground font-bold text-lg">{image.alt}</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-1" />
                    </div>
                  </div> */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_oklch(0.78_0.22_145/0.2)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <style jsx>{`
        @keyframes scrollSmooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move exactly half (the first set of images) */
        }
        .animate-scrollSmooth {
          animation: scrollSmooth 40s linear infinite; /* adjust speed here */
        }
      `}</style>
    </section>
  )
}
