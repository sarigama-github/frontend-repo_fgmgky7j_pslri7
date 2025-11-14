import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold text-gray-900">Auralink</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#demo" className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm px-4 py-2 font-medium shadow hover:bg-gray-800 transition-colors">Book a demo</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white text-sm px-4 py-2 font-medium shadow hover:bg-gray-800 transition-colors">Book a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
