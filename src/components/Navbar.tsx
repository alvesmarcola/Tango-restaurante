import { useEffect, useState } from 'react';
import { Flame, Menu as MenuIcon, X } from 'lucide-react';

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Flame className="w-7 h-7 text-amber-600 flicker" />
          <span className="font-serif text-2xl font-bold tracking-wide text-amber-50 group-hover:text-amber-400 transition-colors">
            Tango
          </span>
          <span className="text-amber-600 font-serif text-lg">|</span>
          <span className="text-amber-50/80 text-xs font-light tracking-[0.3em] uppercase hidden sm:block">
            Restaurante & Parrilla
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-amber-50/75 hover:text-amber-400 text-sm tracking-wide transition-colors duration-300 menu-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="bg-amber-600 hover:bg-amber-500 text-charcoal font-medium px-5 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-amber-50 p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-charcoal/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-amber-900/30">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-amber-50/80 hover:text-amber-400 text-base py-2 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="block text-center bg-amber-600 text-charcoal font-medium px-5 py-3 rounded-full text-base mt-2"
            >
              Reservar Mesa
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
