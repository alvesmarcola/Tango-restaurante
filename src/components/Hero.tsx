import { Flame, ChevronDown, Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37126416/pexels-photo-37126416.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Asado argentino na parrilla"
          className="w-full h-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />
      </div>

      {/* Floating ember particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="ember absolute w-1.5 h-1.5 rounded-full bg-amber-500/60"
            style={{
              left: `${10 + i * 7}%`,
              bottom: `${15 + (i % 4) * 8}%`,
              animationDelay: `${i * 0.4}s`,
              ['--drift' as string]: `${(i % 2 === 0 ? 1 : -1) * (15 + i * 5)}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
          ))}
          <span className="text-amber-50/70 text-sm ml-2 tracking-wide">Certificado TripAdvisor</span>
        </div>

        <p className="text-amber-500/90 text-sm tracking-[0.4em] uppercase mb-4 animate-pulse">
          Canela · Serra Gaúcha
        </p>

        <h1 className="font-serif text-6xl md:text-8xl font-bold text-amber-50 leading-none mb-4">
          Tango
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-amber-600 italic mb-8">
          Restaurante & Parrilla
        </p>

        <p className="text-amber-50/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          A verdadeira gastronomia argentina no coração da Serra Gaúcha.
          <br className="hidden md:block" />
          Carzes nobres na parrilla, empanadas artesanais e vinos seleccionados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cardapio"
            className="bg-amber-600 hover:bg-amber-500 text-charcoal font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/40 hover:scale-105"
          >
            Ver Cardápio
          </a>
          <a
            href="#contato"
            className="border border-amber-50/30 hover:border-amber-500 hover:text-amber-500 text-amber-50 font-medium px-8 py-4 rounded-full transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <ChevronDown className="w-6 h-6 text-amber-50/50 animate-bounce" />
        <span className="text-amber-50/40 text-xs tracking-widest uppercase">Role para descobrir</span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}
