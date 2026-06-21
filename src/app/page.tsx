import { Menu, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3E2723] flex flex-col font-sans selection:bg-[#FBC02D]/30">
      
      {/* Animated Lema Marquee (Subtle) */}
      <div className="bg-[#3E2723] text-[#FFF8E1] py-2 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 items-center text-[10px] md:text-xs font-light tracking-[0.2em] uppercase w-[200%] opacity-90">
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
          <span className="text-[#FBC02D] text-[8px]">✦</span>
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
          <span className="text-[#FBC02D] text-[8px]">✦</span>
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
          <span className="text-[#FBC02D] text-[8px]">✦</span>
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
          <span className="text-[#FBC02D] text-[8px]">✦</span>
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
          <span className="text-[#FBC02D] text-[8px]">✦</span>
          <span>Café da manhã, o melhor jeito para começar o seu dia</span>
        </div>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for Legibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient to blend with next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF8E1] to-transparent"></div>
        </div>

        {/* Floating Header over Video */}
        <header className="relative z-10 w-full pt-8 pb-4">
          <div className="container mx-auto px-8 md:px-16 flex justify-between items-center text-white">
            <button aria-label="Menu" className="md:hidden hover:opacity-70 transition-opacity">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
            
            <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase font-light">
              <a href="#catalogo" className="hover:text-[#FBC02D] transition-colors">Cardápio</a>
              <a href="#sobre" className="hover:text-[#FBC02D] transition-colors">História</a>
            </div>
            
            <div className="text-center font-serif flex flex-col items-center">
              <span className="tracking-[0.3em] uppercase text-[9px] md:text-[10px] font-medium text-[#FBC02D] mb-1">Desde 2008</span>
              <span className="italic text-2xl md:text-3xl leading-none">Pâtisserie</span>
            </div>

            <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase font-light items-center">
              <a href="https://wa.me/556599364197?text=Ol%C3%A1%21%20Quero%20garantir%20minha%20encomenda%20VIP%20na%20P%C3%A3es%20%26%20Del%C3%ADcias." target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] transition-colors">Encomendas</a>
              <button className="relative hover:opacity-70 transition-opacity" aria-label="Sacola">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-2 bg-[#E64A19] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Bag */}
            <button className="relative md:hidden hover:opacity-70 transition-opacity" aria-label="Sacola">
              <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-[#E64A19] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto space-y-8 -mt-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] text-white">
            <span className="italic font-light">Purely</span> <span className="font-semibold">Handcrafted</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-xl font-light tracking-wide leading-relaxed">
            A tradição que Arenápolis ama, agora a um clique da sua mesa. Encomende bolos premium e salgados fritos na hora.
          </p>
          <div className="pt-8">
            <a 
              href="https://wa.me/556599364197?text=Ol%C3%A1%21%20Quero%20garantir%20minha%20encomenda%20VIP%20na%20P%C3%A3es%20%26%20Del%C3%ADcias%20com%20frescor%20garantido." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase hover:bg-white/20 transition-all duration-300"
            >
              Pedir no WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Catalog Section (Minimalist) */}
      <section id="catalogo" className="py-24 md:py-32 container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <p className="text-[#E64A19] tracking-[0.2em] uppercase text-xs font-semibold">Nossa Seleção</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3E2723] italic font-medium">
            Explore Our Signature Pastries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {[
            {
              title: "Croissant Tradicional",
              price: "R$ 14,90",
              img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Pain au Chocolat",
              price: "R$ 16,90",
              img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop"
            },
            {
              title: "Bolo Trufado com Frutas",
              price: "R$ 89,90",
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center cursor-pointer">
              {/* No card background, just the image */}
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-700">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#3E2723] mb-2 group-hover:text-[#E64A19] transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#3E2723]/60 mb-6 font-light">
                {item.price}
              </p>
              <a 
                href={`https://wa.me/556599364197?text=${encodeURIComponent(`Olá! Quero adicionar o ${item.title} ao meu pedido VIP na Pães & Delícias.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-widest text-[#3E2723] border-b border-[#3E2723]/30 pb-1 hover:border-[#E64A19] hover:text-[#E64A19] transition-colors"
              >
                Adicionar ao Pedido
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <a 
             href="https://wa.me/556599364197?text=Ol%C3%A1%21%20Gostaria%20de%20receber%20o%20Card%C3%A1pio%20VIP%20completo%20da%20P%C3%A3es%20%26%20Del%C3%ADcias." 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 text-[#3E2723] border border-[#3E2723]/20 px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-[#3E2723] hover:text-[#FFF8E1] transition-all duration-300"
           >
             Pedir Menu no WhatsApp
           </a>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="sobre" className="py-24 md:py-32 bg-[#3E2723] text-[#FFF8E1]">
        <div className="container mx-auto px-8 md:px-16 max-w-5xl flex flex-col items-center text-center space-y-12">
          <p className="text-[#FBC02D] tracking-[0.2em] uppercase text-xs font-semibold">Nossa Essência</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Nós acreditamos na arte <br className="hidden md:block"/> de fazer as coisas com tempo.
          </h2>
          <p className="max-w-2xl text-sm md:text-base font-light text-[#FFF8E1]/70 leading-relaxed">
            Cada pão e cada bolo que sai dos nossos fornos em Arenápolis carrega 16 anos de paixão. Não usamos atalhos. A garantia do frescor absoluto é o nosso compromisso inegociável com a sua mesa.
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 md:py-20 border-t border-[#3E2723]/10">
        <div className="container mx-auto px-8 md:px-16 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-2xl italic text-[#3E2723]">Pâtisserie</div>
          <div className="flex gap-8 text-xs font-light tracking-widest uppercase text-[#3E2723]/60">
            <a href="#" className="hover:text-[#E64A19]">Instagram</a>
            <a href="https://wa.me/556599364197?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20encomendas." target="_blank" rel="noopener noreferrer" className="hover:text-[#E64A19]">WhatsApp</a>
          </div>
          <p className="text-xs font-light text-[#3E2723]/50">
            © 2026 Pães & Delícias. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
