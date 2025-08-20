"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    title: "Visual Branding",
    description:
      "Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.",
  },
  {
    title: "Creative Campaign",
    description:
      "We develop innovative marketing campaigns that capture attention and drive results for your business.",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences that delight your customers and drive conversions.",
  },
  {
    title: "Development",
    description: "Bringing your designs to life with cutting-edge development solutions and modern technologies.",
  },
]

export function ServicesSection() {
  const [openService, setOpenService] = useState(0)

  return (
    <section className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm text-gray-400 mb-8">Our Services</h2>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-800">
                <button
                  onClick={() => setOpenService(openService === index ? -1 : index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${openService === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openService === index && (
                  <div className="pb-6">
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
