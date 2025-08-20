import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="w-12 h-0.5 bg-black"></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Where
            <br />
            Design Meets
            <br />
            Innovation!
          </h1>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Whether you&apos;re a startup looking to establish your brand identity or an established business aiming to
            refresh your image, we&apos;ve got the creative firepower to make it happen.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">LET&apos;S TALK</Button>
        </div>

        <div className="relative">
          <Image
            src="/images/hero-illustration.png"
            alt="Creative design illustration"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
