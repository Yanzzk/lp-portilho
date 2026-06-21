import { Menu, ShoppingBag, CheckCircle2, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3E2723] flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF8E1]/95 backdrop-blur-md border-b-2 border-[#FBC02D]/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6 text-[#3E2723] md:hidden" />
            <div className="font-serif flex flex-col select-none">
              <span className="tracking-[0.15em] uppercase text-[10px] md:text-xs font-bold text-[#FBC02D] mb-0.5">Desde 2008</span>
              <span className="text-xl md:text-2xl leading-none font-bold">Pães & Delícias</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-sm text-[#3E2723]">
            <a href="#catalogo" className="hover:text-[#E64A19] transition-colors">Cardápio VIP</a>
            <a href="#garantia" className="hover:text-[#E64A19] transition-colors">Nossa Garantia</a>
            <a href="#encomendas" className="hover:text-[#E64A19] transition-colors">Encomendas Rápida</a>
          </div>

          <a href="#encomendas" className="hidden md:flex items-center gap-2 bg-[#FBC02D]/20 text-[#3E2723] px-4 py-2 rounded-full font-bold text-sm hover:bg-[#FBC02D]/40 transition-colors">
            <Clock className="w-4 h-4 text-[#E64A19]" />
            Atendimento em 3 min
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section (A Grande Promessa) */}
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#FBC02D]/20 border border-[#FBC02D] px-4 py-1.5 rounded-full mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E64A19] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E64A19]"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-[#3E2723]">Pedidos Abertos para o Final de Semana</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-black text-[#3E2723] max-w-5xl">
            A tradição que Arenápolis ama, <span className="text-[#E64A19]">agora a um clique da sua mesa.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-[#3E2723]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Esqueça as filas no balcão ou ligações demoradas. Encomende bolos premium e salgados fritos na hora pelo celular e tenha seu pedido confirmado em menos de 3 minutos.
          </p>
          
          <div className="pt-6 w-full md:w-auto flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20quero%20conhecer%20o%20Cardápio%20VIP!" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E64A19] text-white font-black py-5 md:py-6 px-8 md:px-16 rounded-xl flex items-center justify-center gap-3 w-full md:w-auto shadow-2xl shadow-[#E64A19]/30 hover:bg-[#d84013] hover:-translate-y-2 transition-all duration-300 active:scale-[0.98] text-xl md:text-2xl"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              ENCOMENDAR AGORA NO WHATSAPP
            </a>
            
            <div className="flex items-center gap-2 text-sm md:text-base font-bold text-[#3E2723]/80 mt-2">
              <div className="flex text-[#FBC02D]">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <span className="hidden md:inline">|</span>
              Mais de 16 anos aprovados pelo bairro Vila Nova
            </div>
          </div>
        </section>

        {/* Problema (Custo da Inação) */}
        <section className="bg-white py-16 border-y-2 border-[#FBC02D]/10 shadow-sm">
          <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723]">
              A sua festa ou café da tarde merece mais que a "sobra" da vitrine.
            </h2>
            <p className="text-lg md:text-xl text-[#3E2723]/70">
              Muitos clientes acabam comprando em supermercados ou encomendando de amadores por não terem um cardápio fácil em mãos. O resultado? Bolos secos e salgados murchos. Aqui na Pães & Delícias, nós mudamos as regras do jogo com o nosso <strong className="text-[#E64A19]">Cardápio VIP.</strong>
            </p>
          </div>
        </section>

        {/* Catálogo (Value Stack) */}
        <section id="catalogo" className="container mx-auto px-6 py-20 max-w-7xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#3E2723]">
              Nosso Cardápio VIP
            </h2>
            <p className="text-lg text-[#3E2723]/70 max-w-2xl mx-auto font-medium">
              Escolha pelo celular, feche o pedido e nossa equipe entra em produção imediata.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bolos Finos e Tortas",
                desc: "Massas fofinhas, recheios generosos e decorações impecáveis. O centro das atenções da sua festa.",
                img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
                badge: "Mais Vendido"
              },
              {
                title: "Centos de Salgados",
                desc: "Fritos na hora exata da entrega. Crocantes por fora, explosão de sabor e recheio por dentro.",
                img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop",
                badge: "Imbatível"
              },
              {
                title: "Cestas Premium",
                desc: "Pães de fermentação natural, frios selecionados e doces para surpreender quem você ama.",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
                badge: "Exclusivo"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#FBC02D]/30 shadow-lg hover:shadow-2xl hover:border-[#FBC02D] transition-all duration-500 flex flex-col">
                <div className="absolute top-4 left-4 z-10 bg-[#E64A19] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.badge}
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8E1]">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay gradiente para luxo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent opacity-80" />
                  <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-serif font-bold text-white leading-tight z-20">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4">
                  <p className="text-base text-[#3E2723]/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <a href="#encomendas" className="flex items-center gap-2 text-[#E64A19] font-bold hover:gap-3 transition-all">
                    Ver Opções e Preços <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Garantia com Dentes (Risk Reversal) */}
        <section id="garantia" className="bg-[#3E2723] text-[#FFF8E1] py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBC02D] via-[#E64A19] to-[#FBC02D]"></div>
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#FBC02D] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(251,192,45,0.3)]">
              <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-[#3E2723]" />
            </div>
            <div className="text-center md:text-left space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FBC02D]">
                Garantia do Frescor Absoluto
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-[#FFF8E1]/90 font-medium">
                Nós confiamos tanto na nossa receita de 16 anos que bancamos todo o risco: Se a sua encomenda não for <strong className="text-white">a mais fresca e saborosa</strong> que você já provou na cidade, nós devolveremos 100% do seu dinheiro. Simples assim.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Final (Escassez + Urgência) */}
        <section id="encomendas" className="container mx-auto px-6 py-24 max-w-4xl text-center space-y-10">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl font-black text-[#3E2723]">
              Sua festa não pode esperar.
            </h2>
            <p className="text-xl md:text-2xl text-[#E64A19] font-bold">
              ⚠️ Aviso: Nossa capacidade de produção artesanal é estritamente limitada para os finais de semana.
            </p>
            <p className="text-lg text-[#3E2723]/80 font-medium">
              Não deixe para a última hora. Garanta a sua data hoje e receba atendimento prioritário direto com nossa equipe.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border-[3px] border-[#FBC02D] shadow-2xl flex flex-col items-center gap-6 relative">
            <div className="absolute -top-6 bg-[#E64A19] text-white px-6 py-2 rounded-full font-black text-lg tracking-wide uppercase shadow-lg">
              PASSO ÚNICO
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mt-2">
              Toque no botão abaixo e monte seu pedido no WhatsApp.
            </h3>
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20garantir%20minha%20encomenda!" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-black py-5 md:py-6 px-8 md:px-16 rounded-2xl flex items-center justify-center gap-3 w-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:-translate-y-2 transition-all duration-300 active:scale-[0.98] text-xl md:text-3xl"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              QUERO GARANTIR MEU PEDIDO VIP
            </a>
            <ul className="flex flex-col md:flex-row items-center gap-4 text-sm font-bold text-[#3E2723]/60">
              <li className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Compra 100% Segura</li>
              <li className="hidden md:block">•</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Atendimento Humano</li>
              <li className="hidden md:block">•</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Sem Taxas Ocultas</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t-2 border-[#FBC02D]/20 py-8 bg-[#FFF8E1] text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold text-[#3E2723]/60">
            © {new Date().getFullYear()} Panificadora Pães & Delícias - Arenápolis/MT.
          </p>
          <p className="text-xs text-[#3E2723]/40 mt-2">
            CNPJ: 11.030.002/0001-40 | Resp: Pautilho B. Ribeiro Neto
          </p>
        </div>
      </footer>
    </div>
  );
}
