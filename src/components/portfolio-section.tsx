export function PortfolioSection() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-sm text-gray-600 mb-4">Our Portfolio</h2>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              We envision a world where every idea, product, or service is brought to life through exceptional design.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="space-y-4">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=400&width=300&query=mobile app interface ${item}`}
                  alt={`Daily App ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Daily App</h4>
                <p className="text-sm text-gray-600">- Increasing your productivity</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
