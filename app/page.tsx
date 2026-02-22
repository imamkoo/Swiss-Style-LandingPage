import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Story } from "@/components/sections/story"
import { PainPoints } from "@/components/sections/pain-points"
import { Benefits } from "@/components/sections/benefits"
import { SocialProof } from "@/components/sections/social-proof"
import { Bonuses } from "@/components/sections/bonuses"
import { Pricing } from "@/components/sections/pricing"
import { FaqFooter } from "@/components/sections/faq-footer"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <PainPoints />
      <Benefits />
      <SocialProof />
      <Bonuses />
      <Pricing />
      <FaqFooter />
    </main>
  )
}
