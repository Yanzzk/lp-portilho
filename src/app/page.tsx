"use client";

import { Menu, ShoppingBag, CheckCircle2, Star, ShieldCheck, Clock, ArrowRight, X, MapPin, Car, Copy, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { InteractiveCatalog } from "@/components/InteractiveCatalog";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showFachadaModal, setShowFachadaModal] = useState(false);
  const [zoomImageSrc, setZoomImageSrc] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const whatsappNumber = "556599364197";

  useEffect(() => {
    // Logica da Tela de Boas-Vindas
    if (!sessionStorage.getItem('hasSeenWelcome')) {
      setShowWelcome(true);
      document.body.style.overflow = 'hidden';
      
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem('hasSeenWelcome', 'true');
        document.body.style.overflow = '';
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen || showFachadaModal || zoomImageSrc !== null || showCatalog) {
      document.body.style.overflow = 'hidden';
      // Prevent iOS rubber banding
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen, showFachadaModal, zoomImageSrc, showCatalog]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Av. Papa Paulo VI, 108 - Centro, Arenápolis - MT");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3E2723] flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Welcome Splash Screen (Apple Style) */}
      {showWelcome && (
        <div 
          className="fixed inset-0 z-[200] bg-[#111] text-[#FFF8E1] flex flex-col items-center justify-center transition-opacity duration-1000 animate-out fade-out fill-mode-forwards"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
             <div className="relative w-40 h-40 drop-shadow-[0_0_40px_rgba(251,192,45,0.3)]">
                <Image src="/images/logo.png" alt="Panificadora Pães & Delícias" fill className="object-contain" priority />
             </div>
             <h1 className="font-serif text-3xl md:text-5xl font-black tracking-widest uppercase text-center max-w-lg leading-tight px-4 mt-2">
               A Tradição de <br/><span className="text-[#FBC02D]">Arenápolis</span>
             </h1>
             <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#E64A19] to-transparent mt-4 opacity-50"></div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#3E2723]/95 backdrop-blur-md flex flex-col p-6 text-[#FFF8E1] transition-all">
          <div className="flex justify-between items-center mb-12">
            <div className="font-serif font-bold text-xl">Pães & Delícias</div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <X className="w-6 h-6 text-[#FBC02D]" />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-bold">
            <button onClick={() => { setIsMenuOpen(false); setShowCatalog(true); }} className="hover:text-[#FBC02D] transition-colors text-left">Cardápio Interativo</button>
            <a href="#garantia" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBC02D] transition-colors text-left">Garantia de Frescor</a>
            <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FBC02D] transition-colors text-left">Nossa Localização</a>
            <button 
              onClick={() => { setIsMenuOpen(false); setShowCatalog(true); }}
              className="text-[#E64A19] flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ShoppingBag className="w-6 h-6" /> Fazer Pedido
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vi o site e quero fazer meu pedido VIP.")}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-transform duration-300 hover:scale-110 pointer-events-auto w-14 h-14"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF8E1]/95 backdrop-blur-md border-b-2 border-[#FBC02D]/30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6 text-[#3E2723] md:hidden cursor-pointer hover:text-[#E64A19] transition-colors" />
            </button>
            <div className="font-serif flex flex-col select-none">
              <span className="tracking-[0.15em] uppercase text-[10px] md:text-xs font-bold text-[#E64A19] mb-0.5">Desde 2008</span>
              <span className="text-lg md:text-2xl leading-none font-bold italic">Pães & Delícias</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-sm text-[#3E2723]">
            <button onClick={() => setShowCatalog(true)} className="hover:text-[#E64A19] transition-colors">Cardápio VIP</button>
            <a href="#garantia" className="hover:text-[#E64A19] transition-colors">Nossa Garantia</a>
            <a href="#localizacao" className="hover:text-[#E64A19] transition-colors">Nossa Localização</a>
          </div>

          <button 
            onClick={() => setShowCatalog(true)}
            className="hidden md:flex items-center gap-2 bg-[#FBC02D]/20 text-[#3E2723] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#FBC02D]/40 hover:-translate-y-1 transition-all"
          >
            <Clock className="w-4 h-4 text-[#E64A19]" />
            Atendimento Rápido
          </button>
        </div>
      </header>

      {/* Lema Animado (Marquee) */}
      <div className="bg-[#E64A19] text-[#FFF8E1] py-2 overflow-hidden flex whitespace-nowrap border-b-2 border-[#3E2723] shadow-inner relative z-20">
        <div className="animate-marquee flex gap-8 items-center text-[10px] md:text-xs font-black uppercase tracking-widest w-[200%]">
          <span>👉 Café da manhã, o melhor jeito para começar o seu dia!!!</span>
          <span className="text-[#FBC02D]">★</span>
          <span>A MELHOR PANIFICADORA DE ARENÁPOLIS-MT</span>
          <span className="text-[#FBC02D]">★</span>
          <span>👉 Café da manhã, o melhor jeito para começar o seu dia!!!</span>
          <span className="text-[#FBC02D]">★</span>
          <span>A MELHOR PANIFICADORA DE ARENÁPOLIS-MT</span>
          <span className="text-[#FBC02D]">★</span>
          <span>👉 Café da manhã, o melhor jeito para começar o seu dia!!!</span>
          <span className="text-[#FBC02D]">★</span>
          <span>A MELHOR PANIFICADORA DE ARENÁPOLIS-MT</span>
          <span className="text-[#FBC02D]">★</span>
        </div>
      </div>

      <main className="flex-1 w-full overflow-hidden relative">

        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#2D1B18]">
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-[#2D1B18]/50 z-0"></div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center py-12 md:py-0">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E64A19] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E64A19]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-white tracking-[0.15em] uppercase">Pedidos Abertos para o Fim de Semana</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-black text-white drop-shadow-xl max-w-4xl mx-auto">
              A tradição que Arenápolis ama, <br className="hidden md:block"/><span className="text-[#FBC02D] italic font-light">agora a um clique da sua mesa.</span>
            </h1>
            
            <p className="mt-6 text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
              Esqueça as filas no balcão ou ligações demoradas. Encomende bolos premium e salgados fritos na hora pelo celular.
            </p>
            
            <div className="pt-8 w-full md:w-auto flex flex-col items-center gap-4">
              <button 
                onClick={() => setShowCatalog(true)}
                className="bg-[#E64A19] text-white font-black py-4 md:py-5 px-6 md:px-12 rounded-xl flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_15px_35px_rgba(230,74,25,0.4)] hover:bg-[#d84013] hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] text-lg md:text-xl"
              >
                <ShoppingBag className="w-6 h-6" />
                ACESSAR CATÁLOGO DIGITAL
              </button>
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#FBC02D] mt-2 drop-shadow-md">
                <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-white/90">| +16 anos no bairro Vila Nova</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mockup iPhone Section (Hormozi Grand Slam Offer) */}
        <section className="bg-gradient-to-b from-[#3E2723] to-[#2D1B18] py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FBC02D] to-transparent opacity-50"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
                <div className="inline-block bg-[#E64A19]/20 border border-[#E64A19]/40 px-4 py-1.5 rounded-full text-[#FBC02D] text-xs font-black tracking-widest uppercase mb-2">
                  Experiência Premium
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight">
                  O sabor que Arenápolis ama, <span className="text-[#E64A19]">direto no seu celular.</span>
                </h2>
                <div className="space-y-4 text-base md:text-xl text-[#FFF8E1]/80 font-light leading-relaxed">
                  <p>
                    <strong>Por que pegar fila se você pode ser VIP?</strong> Receba nosso cardápio atualizado e fure a fila do balcão da Pães & Delícias.
                  </p>
                  <p>
                    Salgados crocantes e pães artesanais separados exclusivamente para você. Sem tempo de espera. Sem &quot;acabou&quot;.
                  </p>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowCatalog(true)}
                    className="w-full sm:w-auto bg-[#25D366] text-white font-black py-4 px-8 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
                  >
                    ACESSAR CATÁLOGO <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-bold text-white/60 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#FBC02D]" /> Compra Segura</div>
                  <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#FBC02D]" /> Resposta Imediata</div>
                </div>
              </div>

              <div className="flex justify-center relative order-1 lg:order-2 group/mockup">
                <div 
                  className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-[#111] rounded-[3rem] border-[8px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
                  onClick={() => setZoomImageSrc("/images/mockup-produto-008.webp")}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                  <Image 
                    src="/images/mockup-produto-008.webp" 
                    alt="Pães e Delícias no celular"
                    fill
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 md:group-hover/mockup:scale-105"
                    priority
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E2723]/95 border border-[#FBC02D]/30 text-[#FFF8E1] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase px-6 py-3 rounded-full opacity-0 group-hover/mockup:opacity-100 transition-all duration-300 pointer-events-none shadow-md flex items-center gap-2.5 transform-gpu translate-y-4 group-hover/mockup:translate-y-0 z-20">
                    <ZoomIn className="w-4 h-4 text-[#FBC02D]" /> AMPLIAR
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[400px] h-[600px] bg-[#E64A19]/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Carousel Section */}
        <section id="catalogo" className="bg-[#FFF8E1] py-20 border-y border-[#3E2723]/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
             <h2 className="font-serif text-3xl md:text-5xl font-black text-[#3E2723]">
                Catálogo Exclusivo
             </h2>
             <p className="mt-4 text-[#3E2723]/70 font-medium text-base md:text-lg max-w-2xl mx-auto">
                Arraste para o lado e conheça as maravilhas feitas à mão, fresquinhas da nossa cozinha para a sua mesa.
             </p>
          </div>

          <div className="relative w-full py-8 overflow-hidden group">
            {/* Gradiente nas bordas para suavizar a entrada/saída */}
            <div className="absolute top-0 bottom-0 left-0 w-[5vw] md:w-[15vw] bg-gradient-to-r from-[#FFF8E1] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-[5vw] md:w-[15vw] bg-gradient-to-l from-[#FFF8E1] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] focus-within:[animation-play-state:paused] will-change-transform" style={{ animationDuration: '80s' }}>
              {[...Array(15), ...Array(15)].map((_, i) => {
                const realIndex = i % 15;
                return (
                  <div key={i} className="group/item relative flex-none w-[70vw] sm:w-[300px] md:w-[320px] aspect-[4/5] mx-3 md:mx-4 rounded-[2rem] overflow-hidden border border-[#3E2723]/10 hover:border-[#E64A19]/50 shadow-lg transition-all duration-500 ease-out bg-[#3E2723]/5 cursor-pointer touch-manipulation transform-gpu" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
                    <div className="absolute inset-0 z-0" onClick={() => setZoomImageSrc(`/images/produtos/produto-${String(realIndex+1).padStart(3, '0')}.webp`)}></div>
                    <Image 
                      src={`/images/produtos/produto-${String(realIndex+1).padStart(3, '0')}.webp`}
                      alt={`Produto Artesanal ${realIndex+1}`}
                      fill
                      className="w-full h-full object-cover object-center transition-transform duration-700 md:group-hover/item:scale-105 select-none pointer-events-none transform-gpu -z-10"
                      sizes="(max-width: 640px) 70vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/20 to-transparent opacity-60 md:opacity-80 transition-opacity duration-300 pointer-events-none z-0"></div>
                    
                    {/* Zoom Hint */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E2723]/95 border border-[#FBC02D]/30 text-[#FFF8E1] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase px-6 py-3 rounded-full opacity-80 md:opacity-0 md:group-hover/item:opacity-100 md:group-active/item:opacity-100 transition-all duration-300 pointer-events-none shadow-md flex items-center gap-2.5 transform-gpu md:translate-y-4 md:group-hover/item:translate-y-0 z-10">
                      <ZoomIn className="w-4 h-4 text-[#FBC02D]" /> AMPLIAR
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 transform-gpu transition-all duration-300 md:translate-y-4 md:group-hover/item:translate-y-0 z-20">
                       <h3 className="text-white font-serif font-bold text-xl md:text-2xl pointer-events-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Item Fresco #{realIndex+1}</h3>
                       <button 
                         onClick={() => setShowCatalog(true)}
                         className="w-full bg-[#E64A19] text-white text-[10px] sm:text-xs font-black tracking-widest uppercase px-5 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#d84013] transition-colors relative z-30"
                       >
                         Consultar Valor <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Garantia (Risk Reversal) */}
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

        {/* Social Proof Component (Hormozi Pilar 2) */}
        <section className="container mx-auto px-4 md:px-6 relative z-20 pt-16 md:pt-20 pb-8 md:pb-12 bg-white border-t border-[#3E2723]/5">
          <div className="max-w-[90%] md:max-w-5xl mx-auto bg-white border border-[#E64A19]/10 shadow-[0_20px_40px_-15px_rgba(230,74,25,0.1)] rounded-3xl py-8 md:py-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FBC02D] to-transparent opacity-50"></div>
            
            <div className="hidden md:grid md:grid-cols-3 divide-x divide-[#3E2723]/10 items-center">
              <div className="flex flex-col items-center justify-center text-center px-8">
                <span className="block text-5xl font-sans font-black text-[#3E2723] mb-3 tracking-[0.05em] tabular-nums">+16</span>
                <div className="relative w-full flex justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E64A19]">Anos de Tradição</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center px-8">
                <div className="flex gap-2 mb-3 relative overflow-hidden p-1 text-[#FBC02D]">
                  <Star className="w-6 h-6 fill-current z-10" />
                  <Star className="w-6 h-6 fill-current z-10" />
                  <Star className="w-6 h-6 fill-current z-10" />
                  <Star className="w-6 h-6 fill-current z-10" />
                  <Star className="w-6 h-6 fill-current z-10" />
                  <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 z-20 pointer-events-none"></div>
                </div>
                <span className="text-sm font-bold text-[#3E2723]/80 tracking-wide">Média 5.0 no Google</span>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center px-8">
                <div className="mb-3 p-3 bg-[#FFF8E1] rounded-full text-[#E64A19] shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-base font-black text-[#3E2723]">Coração de Arenápolis, MT</p>
                <span className="text-[10px] font-bold text-[#E64A19] mt-1 uppercase tracking-[0.15em]">Frescor Garantido</span>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden flex flex-col gap-6 px-6">
              <div className="flex items-center justify-between border-b border-[#3E2723]/10 pb-5">
                <div className="flex flex-col text-left">
                  <span className="text-4xl font-black text-[#3E2723] tracking-[0.05em] tabular-nums">+16</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E64A19] mt-1">Anos de Tradição</span>
                </div>
                <div className="h-12 w-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#E64A19] shadow-inner">
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#3E2723]/10 pb-5">
                <div className="flex flex-col text-left">
                  <div className="flex gap-1.5 mb-1.5 text-[#FBC02D] relative overflow-hidden">
                     <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                     <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 z-20 pointer-events-none"></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3E2723]/60">Google Reviews</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-[#3E2723]">5.0</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black text-[#3E2723]">Arenápolis, MT</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E64A19] mt-1">Frescor Garantido</span>
                </div>
                <div className="h-10 w-10 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#E64A19]">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section id="localizacao" className="py-24 md:py-32 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="bg-[#E64A19]/5 rounded-[40px] md:rounded-[48px] p-4 md:p-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start border border-[#E64A19]/10 shadow-sm">
              <div className="w-full min-h-[400px] md:min-h-[500px] lg:h-[calc(100%-2rem)] relative rounded-[32px] md:rounded-[40px] overflow-hidden flex shadow-lg shadow-black/5 order-1" style={{ isolation: 'isolate', backgroundColor: '#FFF8E1' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.840618037617!2d-56.84671412403612!3d-14.46069168600742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939f2de8ec1e108d%3A0x1bb1860ad0c390c1!2sPanificadora%20Paes%20E%20Delicias!5e0!3m2!1spt-BR!2sbr!4v1718960000000!5m2!1spt-BR!2sbr" className="w-full h-full border-0 absolute inset-0 ![filter:sepia(0.2)_saturate(1.3)_contrast(1.1)]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Pães e Delícias"></iframe>
                <a href="https://maps.app.goo.gl/7LcAWQDAaKbYDCm29" target="_blank" rel="noopener noreferrer" className="absolute z-30 cursor-pointer flex flex-col items-center group/pin" title="Abrir no Google Maps" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -100%)', display: 'flex' }}>
                  <div className="transition-transform duration-300 ease-out md:group-hover/pin:scale-110 animate-[pulse_3s_infinite]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#E64A19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 8px 12px)' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="4" fill="white"></circle>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 w-4 h-1.5 bg-black/40 rounded-full blur-[2px] translate-y-1/2 pointer-events-none"></div>
                </a>
              </div>
              <div className="flex flex-col gap-8 w-full order-2">
                <div 
                  className="relative w-full h-[240px] md:h-[300px] rounded-[32px] md:rounded-[40px] border border-[#E64A19]/20 overflow-hidden shadow-sm order-1 group/photo cursor-pointer"
                  onClick={() => setShowFachadaModal(true)}
                >
                  <Image alt="Fachada Pães e Delícias" fill className="object-cover object-center transform transition-transform duration-[4s] ease-out group-hover/photo:scale-105" src="/images/fachada.webp" />
                  <div className="absolute top-5 left-5 bg-white/95 px-5 py-2.5 rounded-full shadow-md text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#3E2723] uppercase z-10 flex items-center gap-2 pointer-events-none">Nossa Fachada</div>
                  <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/photo:opacity-100">
                    <div className="bg-white/95 text-[#3E2723] px-5 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase shadow-xl transform translate-y-4 group-hover/photo:translate-y-0 transition-transform">Ampliar Foto</div>
                  </div>
                </div>
                <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 shadow-sm border border-gray-100/50 flex flex-col order-2">
                  <span className="text-[#E64A19] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4">Sua Padaria</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#3E2723] mb-6 leading-tight font-black">Fácil de Encontrar</h3>
                  <div className="flex items-start gap-5 mb-10">
                    <div className="mt-1 flex-shrink-0 text-[#E64A19] bg-[#FFF8E1] p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg">
                      Av. Papa Paulo VI, 108 - Centro, Arenápolis - MT. Venha sentir o aroma de pão fresco direto da nossa porta.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-8 order-3">
                    <button 
                      onClick={handleCopyAddress}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-full border-2 border-gray-100 text-[#3E2723] hover:bg-[#FFF8E1] hover:border-[#FBC02D] transition-colors text-sm tracking-widest uppercase font-bold"
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-[#25D366]" /> <span className="text-[#25D366]">Endereço Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" /> Copiar Endereço
                        </>
                      )}
                    </button>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="https://maps.app.goo.gl/7LcAWQDAaKbYDCm29" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center justify-center gap-2 bg-[#E64A19] text-white rounded-full py-4 text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase hover:bg-[#d84013] transition-colors group">
                        <MapPin className="shrink-0 z-10 relative w-4 h-4" /> 
                        <span className="truncate z-10 relative">Google Maps</span>
                      </a>
                      <a href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=-14.4606969&dropoff[longitude]=-56.8441392&dropoff[formatted_address]=Panificadora%20Paes%20E%20Delicias" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center justify-center gap-2 bg-[#3E2723] text-white rounded-full py-4 text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase hover:bg-black transition-colors group">
                        <Car className="shrink-0 z-10 relative w-4 h-4" /> 
                        <span className="truncate z-10 relative">Pedir Uber</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Persuasivo (Hormozi Grand Slam) */}
        <section className="bg-[#2D1B18] py-24 md:py-32 relative border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-[#FBC02D] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4">Elimine suas dúvidas</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Como garanto que meu salgado vai estar quente e crocante?",
                  a: "Nossa produção é inteligente e contínua. Fritamos e assamos em lotes menores durante o dia. Ao fazer seu pedido pelo WhatsApp, nós separamos a sua encomenda. Você chega, retira sem fila e come com a qualidade máxima de Arenápolis."
                },
                {
                  q: "Preciso pegar fila quando for buscar minha encomenda?",
                  a: "De jeito nenhum. O cliente VIP que faz o pedido antecipado pelo WhatsApp não pega a fila do balcão. Você chega na Pães & Delícias, informa seu nome, retira seu pacote exclusivo e vai aproveitar o seu dia. Tempo é dinheiro, nós poupamos o seu."
                },
                {
                  q: "Posso encomendar bolos de última hora para o fim de semana?",
                  a: "Nossa vitrine premium zera rápido! Recomendamos que feche sua encomenda até sexta-feira para garantir os sabores mais disputados. Mas se precisar de urgência extrema, clique no botão do WhatsApp. Faremos o impossível para te salvar."
                },
                {
                  q: "E se o sabor ou a frescura não estiverem como prometido?",
                  a: "Nós carregamos a tradição de Arenápolis e não brincamos com isso. Se o seu produto não estiver no padrão Pães & Delícias ou não for o melhor que já provou, nós trocamos ou resolvemos na hora. Seu risco é absolutamente zero. Nosso compromisso é com a sua mesa."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#3E2723]/50 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 hover:bg-[#3E2723] transition-colors"
                  >
                    <span className="text-white font-bold text-lg md:text-xl pr-8">{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180 bg-[#E64A19] border-[#E64A19]' : ''}`}>
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-64 py-6 opacity-100 border-t border-white/10' : 'max-h-0 py-0 opacity-0'}`}
                  >
                    <p className="text-[#FFF8E1]/80 text-base md:text-lg leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-[#FFF8E1]/60 text-sm font-bold tracking-widest uppercase">Ainda tem dúvidas? O Portilho te responde no WhatsApp!</p>
            </div>
          </div>
        </section>

        {/* Footer Minimalista com Hormozi Final Push */}
        <footer className="bg-[#3E2723] text-[#FFF8E1] pt-16 pb-12 text-center border-t-4 border-[#FBC02D]">
          <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
            <h2 className="font-serif text-3xl font-bold mb-2">Sua festa não pode esperar.</h2>
            <p className="text-[#FBC02D] font-bold mb-8">Nossa produção é estritamente limitada para os finais de semana.</p>
            <button 
              onClick={() => setShowCatalog(true)}
              className="inline-flex bg-[#25D366] text-white font-black py-4 px-10 rounded-xl items-center gap-3 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all text-xl mb-16"
            >
              <ShoppingBag className="w-6 h-6" />
              ABRIR CATÁLOGO AGORA
            </button>

            <div className="w-full h-[1px] bg-white/10 mb-12"></div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-8 mb-12">
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="text-[#FFF8E1]/80 text-sm font-bold tracking-widest uppercase">Acompanhe Nossas Fornadas</span>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/panipaesedelicias/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.facebook.com/panipaesedelicias/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                  <Image 
                    src="/images/logo.png" 
                    alt="Panificadora Pães & Delícias" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            </div>

            <div className="text-[#FFF8E1]/50 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Panificadora Pães &amp; Delícias - Arenápolis/MT. <br/>
              Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>

      {/* Fachada Modal Confirmation */}
      {showFachadaModal && !zoomImageSrc && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center space-y-6 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Deseja conhecer nosso espaço em detalhes?</h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  setShowFachadaModal(false);
                  setZoomImageSrc("/images/fachada.webp");
                }}
                className="w-full bg-[#E64A19] text-white font-bold py-4 rounded-xl hover:bg-[#d84013] transition-colors uppercase tracking-widest text-sm shadow-lg"
              >
                Explorar Agora
              </button>
              <button 
                onClick={() => setShowFachadaModal(false)}
                className="w-full bg-transparent text-[#3E2723]/60 font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generic Zoom Viewer */}
      {zoomImageSrc && (
        <div className="fixed inset-0 z-[120] bg-[#111] flex flex-col animate-in fade-in duration-300">
          <div className="absolute top-6 right-6 z-[130]">
            <button 
              onClick={() => {
                setZoomImageSrc(null);
              }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="flex-1 w-full h-full relative">
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerOnInit={true}
            >
              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={zoomImageSrc} 
                  alt="Imagem Ampliada" 
                  className="max-w-[95vw] max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] select-none pointer-events-auto"
                  draggable="false"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}

      {/* Catálogo Interativo */}
      <InteractiveCatalog 
        isOpen={showCatalog} 
        onClose={() => setShowCatalog(false)} 
        whatsappNumber={whatsappNumber} 
      />
    </div>
  );
}
