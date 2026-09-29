import { Star, Quote, BadgeCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const reviews = [
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Melhor asado que comi fora da Argentina! O bife de chorizo é imperdível e o atendimento faz você se sentir em Buenos Aires.',
    date: 'Outubro 2025',
  },
  {
    name: 'Fernanda L.',
    rating: 5,
    text: 'Ambiente aconchegante em plena Canela. As empanadas são caseiras e o flan com doce de leite é divino. Voltaremos!',
    date: 'Setembro 2025',
  },
  {
    name: 'Ricardo S.',
    rating: 5,
    text: 'Parrilla de verdade, a lenha. O vacío derrete na boca e o vinho malbec selecionado harmoniza perfeitamente. Selo TripAdvisor merecido!',
    date: 'Agosto 2025',
  },
];

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="relative py-28 bg-gradient-to-b from-charcoal via-[#1f1813] to-charcoal overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Reconhecimento</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-6">Quem nos visita, volta</h2>

          {/* TripAdvisor badge */}
          <div className="inline-flex items-center gap-3 bg-green-600/15 border border-green-600/30 rounded-full px-6 py-3 mb-2 pulse-ring">
            <BadgeCheck className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <p className="text-amber-50 text-sm font-semibold">Certificado de Excelência</p>
              <p className="text-green-400/80 text-xs tracking-wide">TripAdvisor · 2024</p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="bg-amber-900/10 border border-amber-900/20 rounded-2xl p-8 h-full hover:border-amber-700/40 hover:bg-amber-900/15 transition-all duration-500 group">
                <Quote className="w-10 h-10 text-amber-600/40 mb-4 group-hover:text-amber-600/60 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-amber-50/70 leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-amber-900/20 pt-4">
                  <p className="font-serif text-lg text-amber-50 font-semibold">{review.name}</p>
                  <p className="text-amber-50/40 text-xs">{review.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
