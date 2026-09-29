import { useState } from 'react';
import { Reveal } from './Reveal';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: 'entradas',
    label: 'Entradas',
    items: [
      { name: 'Empanadas Tucumanas', description: 'Massa caseira recheada com carne, frango ou queijo. Meia dúzia.', price: 'R$ 38', tag: 'Casa' },
      { name: 'Provoleta', description: 'Provolone derretido na parrilla com orégano e azeite.', price: 'R$ 45' },
      { name: 'Choripán', description: 'Pão francês com chorizo argentino e chimichurri da casa.', price: 'R$ 32' },
      { name: 'Tabla de Quesos', description: 'Seleção de queijos com geleias e torradas.', price: 'R$ 55' },
    ],
  },
  {
    id: 'parrilla',
    label: 'Parrilla',
    items: [
      { name: 'Bife de Chorizo', description: 'Contrfilé argentino de 400g grelhado na parrilla. Acompanha guarnição.', price: 'R$ 89', tag: 'Chef' },
      { name: 'Asado de Tira', description: 'Costela bovina assada por 6 horas na brasa. Porção para 2.', price: 'R$ 120' },
      { name: 'Ojo de Bife', description: 'Ancho de 350g com sal de parilla e chimichurri.', price: 'R$ 95' },
      { name: 'Vacío', description: 'Corte argentino de peito, macio e suculento. 400g.', price: 'R$ 78' },
      { name: 'Matambre', description: 'Matambre de cerdo recheado, grelhado na brasa. 350g.', price: 'R$ 72' },
      { name: 'Chorizo a la Parrilla', description: 'Linguiça argentina artesanal na brasa. 2 unidades.', price: 'R$ 42' },
    ],
  },
  {
    id: 'guarnicoes',
    label: 'Guarnições',
    items: [
      { name: 'Papas a la Provenzal', description: 'Batatas fritas com alho e salsinha.', price: 'R$ 28' },
      { name: 'Ensalada Mixta', description: 'Folhas verdes, tomate, cebola e vinagrete argentino.', price: 'R$ 26' },
      { name: 'Papas Españolas', description: 'Batatas assadas na parrilla com sal de parilla.', price: 'R$ 30' },
      { name: 'Calabaza al Horno', description: 'Abóbora assada com manteiga e açúcar mascavo.', price: 'R$ 24' },
    ],
  },
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    items: [
      { name: 'Flan con Dulce de Leche', description: 'Flan argentino clássico com doce de leite e creme.', price: 'R$ 22', tag: 'Casa' },
      { name: 'Panqueques con Dulce de Leche', description: 'Panquecas recheadas com doce de leite e flamadas.', price: 'R$ 25' },
      { name: 'Alfajores de Maicena', description: 'Alfajores artesanais com coco e doce de leite. 3 unidades.', price: 'R$ 20' },
      { name: 'Helado Artesanal', description: 'Dois sabores: doce de leite ou chocolate argentino.', price: 'R$ 18' },
    ],
  },
  {
    id: 'vinhos',
    label: 'Vinhos',
    items: [
      { name: 'Malbec Reserva', description: 'Mendoza, Argentina. Taça 200ml / Garrafa.', price: 'R$ 24 / R$ 110', tag: 'Sugestão' },
      { name: 'Cabernet Sauvignon', description: 'Patagonia, Argentina. Taça 200ml / Garrafa.', price: 'R$ 26 / R$ 125' },
      { name: 'Torrontés', description: 'Branco argentino, fresco e aromático. Taça / Garrafa.', price: 'R$ 22 / R$ 95' },
      { name: 'Vino de la Casa', description: 'Tinto da casa, corte especial. Taça 200ml.', price: 'R$ 18' },
    ],
  },
];

export function Cardapio() {
  const [active, setActive] = useState('parrilla');
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="cardapio" className="relative py-28 bg-gradient-to-b from-charcoal via-[#211b15] to-charcoal overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-red-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">La Carta</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-4">Nosso Cardápio</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4" />
          <p className="text-amber-50/50 text-lg max-w-xl mx-auto">
            Uma seleção de pratos autênticos, preparados com técnica argentina e ingredientes da Serra.
          </p>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  active === cat.id
                    ? 'bg-amber-600 text-charcoal shadow-lg shadow-amber-600/30'
                    : 'bg-amber-900/20 text-amber-50/60 hover:bg-amber-900/40 hover:text-amber-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8" key={active}>
          {activeCategory.items.map((item, i) => (
            <Reveal key={item.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group flex justify-between items-start gap-4 pb-6 border-b border-amber-900/20 hover:border-amber-700/40 transition-colors duration-300">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-xl font-semibold text-amber-50 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] tracking-widest uppercase bg-amber-600/20 text-amber-500 px-2 py-0.5 rounded-full border border-amber-600/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-amber-50/50 text-sm leading-relaxed">{item.description}</p>
                </div>
                <span className="font-serif text-xl font-bold text-amber-500 whitespace-nowrap pt-0.5">
                  {item.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="text-center mt-14">
          <p className="text-amber-50/40 text-sm italic">
            * Cardápio sujeito a alterações. Consulte opções vegetarianas e pratos do dia com nosso atendimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
