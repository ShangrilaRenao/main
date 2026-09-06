import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { Story } from "@/components/site/story"
import { Gallery } from "@/components/site/gallery"
import { About } from "@/components/site/about"
import { Reviews } from "@/components/site/reviews"
import { Inquiry } from "@/components/site/inquiry"
import { Location } from "@/components/site/location"
import { Footer } from "@/components/site/footer"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"

export default function Page() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Story />
      <Gallery />
      <About />
      <Reviews />
      <Inquiry />
      <Location />
      <Footer />
      <WhatsAppCta />
    </main>
  )
}
