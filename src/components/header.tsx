import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
          <span className="text-xl font-semibold">Creative.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </a>
        </nav>

        <Button className="bg-black text-white hover:bg-gray-800 px-6">GET IN TOUCH</Button>
      </div>
    </header>
  )
}
