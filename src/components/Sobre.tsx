import { Flame, Award, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

export function Sobre() {
  return (
    <section id="sobre" className="relative py-28 bg-charcoal overflow-hidden">
      {/* Decorative flame glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="gallery-img rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/37085259/pexels-photo-37085259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef preparando asado argentino"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="gallery-img rounded-2xl overflow-hidden shadow-2xl mt-12">
              <img
                src="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Interior acolhedor do restaurante"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="gallery-img rounded-2xl overflow-hidden shadow-2xl -mt-4 col-span-2">
              <img
                src="https://images.pexels.com/photos/37057991/pexels-photo-37057991.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Carnes grelhando na parrilla"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-amber-600 text-charcoal rounded-2xl px-6 py-4 shadow-xl float">
            <Flame className="w-8 h-8 mb-1" />
            <p className="font-serif text-2xl font-bold">Parrilla</p>
            <p className="text-xs tracking-wide">a lenha</p>
          </div>
        </Reveal>

        {/* Text content */}
        <Reveal delay={2}>
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Nossa História</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-6 leading-tight">
            O sabor da Argentina<br />na Serra Gaúcha
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-transparent mb-6" />
          <p className="text-amber-50/70 text-lg leading-relaxed mb-6">
            No coração de Canela, o <strong className="text-amber-400">Tango Restaurante & Parrilla</strong> traz
            a essência da gastronomia argentina. Com a parrilla a lenha sempre acesa, servimos
            cortes nobres, empanadas artesanais e a autêntica chimichurri que conquistou a Serra.
          </p>
          <p className="text-amber-50/60 text-base leading-relaxed mb-10">
            Com o selo de excelência do TripAdvisor e o carinho de quem nos visita, cada refeição
            é uma celebração — do primeiro gole de vinho ao último pedaço de flan com doce de leite.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-50">Parrilla a Lenha</h3>
                <p className="text-amber-50/50 text-sm mt-1">Cortes nobres no fogo certo</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-50">Selo TripAdvisor</h3>
                <p className="text-amber-50/50 text-sm mt-1">Certificado de excelência</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-amber-50">Em Canela, RS</h3>
                <p className="text-amber-50/50 text-sm mt-1">No coração da Serra</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
