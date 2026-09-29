import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Sobre } from '@/components/Sobre';
import { Cardapio } from '@/components/Cardapio';
import { Galeria } from '@/components/Galeria';
import { Avaliacoes } from '@/components/Avaliacoes';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cardapio />
        <Galeria />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
