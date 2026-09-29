import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Calendar, Users, Check } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', people: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-28 bg-charcoal overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Venha nos visitar</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-4">Reserve sua Mesa</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info column */}
          <Reveal className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition-colors">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-amber-50 mb-1">Endereço</h3>
                <p className="text-amber-50/60">Rua das Hortênsias, 123 — Centro</p>
                <p className="text-amber-50/60">Canela, Rio Grande do Sul — Brasil</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition-colors">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-amber-50 mb-1">Telefone & WhatsApp</h3>
                <p className="text-amber-50/60">(54) 3282-1234</p>
                <p className="text-amber-50/60">(54) 99876-5432</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition-colors">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-amber-50 mb-1">Horário</h3>
                <p className="text-amber-50/60">Terça a Sexta — 18h às 23h</p>
                <p className="text-amber-50/60">Sábado e Domingo — 12h às 23h</p>
                <p className="text-amber-50/40 text-sm mt-1">Segunda — Fechado</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/tangorestaurantecanela/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600/80 to-purple-600/80 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium text-sm">@tangorestaurantecanela</span>
            </a>
          </Reveal>

          {/* Reservation form */}
          <Reveal delay={2}>
            <div className="bg-amber-900/10 border border-amber-900/25 rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-amber-50 mb-2">Reserva Recebida!</h3>
                  <p className="text-amber-50/60 max-w-sm">
                    Obrigado, {form.name || 'amigo(a)'}! Entraremos em contato pelo telefone para confirmar sua reserva.
                    ¡Hasta pronto!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-amber-50/60 text-sm mb-1.5 block">Nome completo</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-charcoal/60 border border-amber-900/30 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-50/30 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="text-amber-50/60 text-sm mb-1.5 block">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-charcoal/60 border border-amber-900/30 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-50/30 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="(54) 99876-5432"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-amber-50/60 text-sm mb-1.5 block flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Data
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-charcoal/60 border border-amber-900/30 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-amber-50/60 text-sm mb-1.5 block flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Pessoas
                      </label>
                      <select
                        required
                        value={form.people}
                        onChange={(e) => setForm({ ...form, people: e.target.value })}
                        className="w-full bg-charcoal/60 border border-amber-900/30 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-600 focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-charcoal">Selecionar</option>
                        <option value="1-2" className="bg-charcoal">1-2 pessoas</option>
                        <option value="3-4" className="bg-charcoal">3-4 pessoas</option>
                        <option value="5-6" className="bg-charcoal">5-6 pessoas</option>
                        <option value="7+" className="bg-charcoal">7+ pessoas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-amber-50/60 text-sm mb-1.5 block">Mensagem (opcional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-charcoal/60 border border-amber-900/30 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-50/30 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                      placeholder="Alguma preferência ou pedido especial?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-charcoal font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/30 hover:scale-[1.02]"
                  >
                    Confirmar Reserva
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
