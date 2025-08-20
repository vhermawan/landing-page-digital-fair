export function Footer() {
  return (
    <footer className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span className="text-xl font-semibold">Creative.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative is where your imagination meets our expertise. We're passionate about bringing your ideas to life
              through exceptional design and innovative solutions.
            </p>
            <div className="space-y-2">
              <p className="text-sm">hello@creative.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Work
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Help
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Press
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Get Experience
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Discover</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Partner Program
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Portfolios
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">Copyright © 2024 Creative. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zm5.568 16.791c-.001.232-.016.465-.049.695a4.876 4.876 0 01-.304 1.204c-.165.408-.394.778-.678 1.093-.284.315-.648.548-1.093.713a4.8 4.8 0 01-1.204.304c-.23.033-.463.048-.695.049-1.922.009-2.499.009-4.558.009s-2.636 0-4.558-.009c-.232-.001-.464-.016-.695-.049a4.874 4.874 0 01-1.204-.304c-.408-.165-.778-.398-1.093-.678a2.89 2.89 0 01-.678-1.093 4.877 4.877 0 01-.304-1.204c-.033-.23-.048-.463-.049-.695-.008-1.922-.009-2.499-.009-4.558s.001-2.636.009-4.558c.001-.232.016-.465.049-.695a4.876 4.876 0 01.304-1.204c.165-.408.394-.778.678-1.093.284-.315.648-.548 1.093-.713a4.8 4.8 0 011.204-.304c.231-.033.463-.048.695-.049 1.922-.009 2.499-.009 4.558-.009s2.636 0 4.558.009c.232.001.464.016.695.049a4.876 4.876 0 011.204.304c.408.165.778.398 1.093.678.315.284.548.648.713 1.093a4.8 4.8 0 01.304 1.204c.033.231.048.463.049.695.009 1.922.009 2.499.009 4.558-.001 2.059-.001 2.636-.01 4.558z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
