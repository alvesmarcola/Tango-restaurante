import { Reveal } from './Reveal';

const images = [
  { src: 'https://images.pexels.com/photos/37092781/pexels-photo-37092781.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Carnes na parrilla', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/36905236/pexels-photo-36905236.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Empanadas argentinas', span: '' },
  { src: 'https://images.pexels.com/photos/37099862/pexels-photo-37099862.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Costelas grelhadas', span: '' },
  { src: 'https://images.pexels.com/photos/8696470/pexels-photo-8696470.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Bife com vinho tinto', span: '' },
  { src: 'https://images.pexels.com/photos/14665242/pexels-photo-14665242.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Flan com doce de leite', span: '' },
  { src: 'https://images.pexels.com/photos/13869869/pexels-photo-13869869.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Interior acolhedor', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/37058008/pexels-photo-37058008.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Linguiças e carnes no asado', span: '' },
];

export function Galeria() {
  return (
    <section id="galeria" className="relative py-28 bg-charcoal overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Momentos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-4">Galeria</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
        </Reveal>

        <Reveal delay={1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`gallery-img rounded-2xl shadow-xl group relative ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 left-4 text-amber-50 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
