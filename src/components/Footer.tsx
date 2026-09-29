import { Flame, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#14100c] border-t border-amber-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-7 h-7 text-amber-600 flicker" />
              <span className="font-serif text-2xl font-bold text-amber-50">Tango</span>
              <span className="text-amber-600 font-serif text-lg">|</span>
              <span className="text-amber-50/60 text-xs font-light tracking-[0.2em] uppercase">
                Restaurante & Parrilla
              </span>
            </div>
            <p className="text-amber-50/40 text-sm leading-relaxed max-w-md mb-6">
              A verdadeira gastronomia argentina no coração de Canela, na Serra Gaúcha.
              Parrilla a lenha, cortes nobres e vinos seleccionados. Conforto e sabor que
              conquistaram o selo TripAdvisor.
            </p>
            <a
              href="https://www.instagram.com/tangorestaurantecanela/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-50/50 hover:text-amber-500 transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @tangorestaurantecanela
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-amber-50 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-amber-50/50 hover:text-amber-500 transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-amber-50/50 hover:text-amber-500 transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#cardapio" className="text-amber-50/50 hover:text-amber-500 transition-colors text-sm">Cardápio</a></li>
              <li><a href="#galeria" className="text-amber-50/50 hover:text-amber-500 transition-colors text-sm">Galeria</a></li>
              <li><a href="#contato" className="text-amber-50/50 hover:text-amber-500 transition-colors text-sm">Reservar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-amber-50 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-amber-50/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" />
                <span>Rua das Hortênsias, 123<br />Canela, RS</span>
              </li>
              <li className="flex items-center gap-2 text-amber-50/50 text-sm">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>(54) 3282-1234</span>
              </li>
              <li className="flex items-start gap-2 text-amber-50/50 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" />
                <span>Ter a Sex: 18h-23h<br />Sáb e Dom: 12h-23h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900/15 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-amber-50/30 text-xs">
            © 2026 Tango Restaurante & Parrilla · Todos os direitos reservados
          </p>
          <p className="text-amber-50/30 text-xs">
            Hecho con <span className="text-amber-600">fuego</span> en Canela, Serra Gaúcha
          </p>
        </div>
      </div>
    </footer>
  );
}
