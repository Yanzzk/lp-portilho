"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, ShoppingBag } from "lucide-react";
import { products, categories } from "@/data/catalog";

interface InteractiveCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export function InteractiveCatalog({ isOpen, onClose, whatsappNumber }: InteractiveCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

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
    const matchesCategory = activeCategory === "Todos" || product.category === "activeCategory" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (productName: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de encomendar: ${productName}. Vi no catálogo digital.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      {/* Header */}
      <div className="w-full bg-[#111]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10 pt-safe px-4 pb-4 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[#FFF8E1] font-serif text-2xl font-black tracking-widest uppercase">
              Catálogo
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FFF8E1]/50" />
            <input
              type="text"
              placeholder="O que você deseja provar hoje?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-[#FFF8E1] placeholder:text-[#FFF8E1]/50 focus:outline-none focus:ring-2 focus:ring-[#FBC02D]/50 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      {/* Categories (Pills) */}
      <div className="w-full overflow-x-auto hide-scrollbar border-b border-white/5 bg-[#111]/40">
        <div className="max-w-6xl mx-auto flex gap-3 px-4 py-4 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === category
                  ? "bg-[#FBC02D] text-[#3E2723] shadow-[0_0_15px_rgba(251,192,45,0.4)]"
                  : "bg-white/5 text-[#FFF8E1]/70 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto px-4 py-8 custom-scrollbar">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#FBC02D]/30 transition-all group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <p className="text-[#FBC02D] text-[10px] font-black uppercase tracking-widest mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-[#FFF8E1] font-bold text-sm md:text-base leading-tight">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-[#FFF8E1]/80 font-medium text-sm">
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-black text-xs md:text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    PEDIR AGORA
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
              <span className="text-4xl">😔</span>
              <p className="text-[#FFF8E1]/60 font-medium">Nenhum produto encontrado com esse nome.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
