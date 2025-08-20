import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm text-gray-400 mb-8">Let's Collaborate</h2>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl font-bold leading-tight">
              Ready to turn your ideas into exceptional designs? Contact us today, and let's make something amazing
              together!
            </h3>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">LET'S TALK</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
