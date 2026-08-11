"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, Plus, Minus, Send, ChevronDown, Trash2 } from "lucide-react";
import { products, categories } from "@/data/catalog";

interface InteractiveCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export function InteractiveCatalog({ isOpen, onClose, whatsappNumber }: InteractiveCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showCategories, setShowCategories] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      const newCart = { ...prev };
      if (next === 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = next;
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const handleCheckout = () => {
    let orderText = "Olá! Gostaria de fazer uma *Encomenda VIP*:\n\n";
    
    Object.entries(cart).forEach(([productId, qty]) => {
      const product = products.find(p => p.id === productId);
      if (product) {
        orderText += `▪️ ${qty}x ${product.name}\n`;
      }
    });

    orderText += "\nAguardo confirmação para prosseguir!";
    
    const encodedText = encodeURIComponent(orderText);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  const handleConsultarValor = (productName: string) => {
    const orderText = `Olá, estava no catálogo e gostaria de consultar os valores e disponibilidade de: 1x ${productName}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      {/* Header */}
      <div className="w-full bg-[#111]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10 pt-safe px-4 pb-4 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[#FFF8E1] font-serif text-2xl font-black tracking-widest uppercase">
              Monte seu Pedido
            </h2>
            <button
              onClick={onClose}
              aria-label="Fechar catálogo"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Search Bar com botão clear animado */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FFF8E1]/50 pointer-events-none" />
            <input
              type="text"
              placeholder="O que você deseja encomendar hoje?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-12 text-[#FFF8E1] placeholder:text-[#FFF8E1]/50 focus:outline-none focus:ring-2 focus:ring-[#FBC02D]/50 transition-all font-medium"
            />
            {/* Botão Clear — surge com animação scale+rotate quando há texto */}
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Limpar busca"
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
                searchQuery.length > 0
                  ? "scale-100 opacity-100 rotate-0 bg-[#FBC02D]/15 hover:bg-red-500/20 text-[#FBC02D] hover:text-red-400"
                  : "scale-0 opacity-0 rotate-[-90deg] pointer-events-none"
              }`}
              tabIndex={searchQuery.length > 0 ? 0 : -1}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Colapsáveis */}
      <div className="w-full border-b border-white/5 bg-[#111]/40">
        <button
          onClick={() => setShowCategories(!showCategories)}
          aria-expanded={showCategories}
          className="w-full px-4 py-3 flex justify-between items-center text-[#FFF8E1] text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors"
        >
          <span className={activeCategory !== "Todos" ? "text-[#FBC02D]" : ""}>
            {activeCategory === "Todos" ? "Ver Categorias" : `Categoria: ${activeCategory}`}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategories ? "rotate-180 text-[#FBC02D]" : "text-[#FFF8E1]/50"}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showCategories ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="w-full overflow-x-auto hide-scrollbar">
            <div className="max-w-6xl mx-auto flex gap-3 px-4 pb-4 pt-1 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSearchQuery("");
                    setShowCategories(false);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeCategory === category
                      ? "bg-[#FBC02D] text-[#3E2723] shadow-[0_0_15px_rgba(251,192,45,0.4)] scale-105"
                      : "bg-white/5 text-[#FFF8E1]/70 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto px-4 py-8 pb-32 custom-scrollbar">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => {
            const quantity = cart[product.id] || 0;
            
            return (
              <div
                key={product.id}
                className={`bg-white/5 rounded-3xl overflow-hidden transition-all group flex flex-col border ${
                  quantity > 0 ? "border-[#FBC02D]/50 bg-white/10" : "border-white/10 hover:border-[#FBC02D]/30"
                }`}
              >
                {/* Imagem com zoom onClick */}
                <div 
                  className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#2D1A13] to-black flex items-center justify-center cursor-pointer group/img"
                  onClick={() => setZoomedImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${quantity > 0 ? "scale-105" : "group-hover/img:scale-110"}`}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Zoom hint on hover */}
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FBC02D]" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <p className="text-[#FBC02D] text-[10px] font-black uppercase tracking-widest mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-[#FFF8E1] font-bold text-sm md:text-base leading-tight line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                    {/* Preço: verde se numérico, dourado se Consultar */}
                    <p className={typeof product.price === "number" ? "text-green-400 font-black text-sm md:text-base" : "text-[#FBC02D] font-black text-sm md:text-base"}>
                      {typeof product.price === "number"
                        ? product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                        : "Consultar Valor"}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-2">
                    {product.price === "Consultar" ? (
                      /* Produto sem preço → botão CONSULTAR VALOR abre WhatsApp individual */
                      <button
                        onClick={() => handleConsultarValor(product.name)}
                        aria-label={`Consultar valor de ${product.name}`}
                        className="w-full bg-white/10 hover:bg-white/20 text-[#FFF8E1] py-2.5 rounded-xl font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
                      >
                        <Search className="w-4 h-4" /> CONSULTAR VALOR
                      </button>
                    ) : quantity === 0 ? (
                      /* Produto com preço + qty 0 → botão ADICIONAR */
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label={`Adicionar ${product.name} ao pedido`}
                        className="w-full bg-white/10 hover:bg-white/20 text-[#FFF8E1] py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        ADICIONAR
                      </button>
                    ) : (
                      /* Produto com preço + qty > 0 → controle [-] qty [+] */
                      <div className="w-full bg-[#FBC02D] text-[#3E2723] py-1.5 px-1 rounded-xl flex items-center justify-between font-bold shadow-[0_0_15px_rgba(251,192,45,0.2)]">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)}
                          aria-label="Diminuir quantidade"
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/10 active:scale-95 transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-base w-6 text-center tabular-nums">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          aria-label="Aumentar quantidade"
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/10 active:scale-95 transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
              <span className="text-5xl">🔍</span>
              <p className="text-[#FFF8E1]/80 font-bold text-lg">Nenhum produto encontrado.</p>
              <p className="text-[#FFF8E1]/50 text-sm">Tente outro termo ou limpe a busca.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Todos");
                }}
                className="mt-2 px-6 py-2.5 bg-[#FBC02D]/20 hover:bg-[#FBC02D]/30 text-[#FBC02D] rounded-full font-bold text-sm tracking-wide transition-colors"
              >
                Ver Todos os Produtos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Bottom Action Bar com Trash2 */}
      {totalItems > 0 && (
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50 animate-in slide-in-from-bottom-10">
          <div className="max-w-6xl mx-auto flex gap-3">
            {/* Botão Limpar Pedido */}
            <button
              onClick={() => setCart({})}
              aria-label="Limpar pedido inteiro"
              className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-4 rounded-2xl transition-all active:scale-95 shrink-0"
              title="Limpar Pedido"
            >
              <Trash2 className="w-6 h-6" />
            </button>
            {/* Botão Enviar Encomenda */}
            <button
              onClick={handleCheckout}
              aria-label="Enviar encomenda pelo WhatsApp"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-black text-sm md:text-base tracking-wide transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 active:scale-[0.98] flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 px-3 py-1 rounded-lg text-xs">
                  {totalItems} {totalItems === 1 ? "ITEM" : "ITENS"}
                </div>
                <span>ENVIAR ENCOMENDA VIP</span>
              </div>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[210] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-[220] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors shadow-lg"
            onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
            aria-label="Fechar zoom da imagem"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={zoomedImage}
            alt="Produto ampliado"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] select-none"
            draggable="false"
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
          />
        </div>
      )}
    </div>
  );
}
