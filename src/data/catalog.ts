export interface Product {
  id: string;
  name: string;
  price: number | "Consultar";
  category: string;
  image: string;
}

export const categories = [
  "Todos",
  "Salgados Assados",
  "Salgados Fritos",
  "Bolos Caseiros",
  "Pães Especiais",
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Enroladinho de Salsicha c/ Queijo e Orégano",
    price: "Consultar",
    category: "Salgados Assados",
    image: "/images/produtos/produto-015.webp",
  },
  {
    id: "prod-2",
    name: "Bolo de Fubá Cremoso (Pedaço)",
    price: "Consultar",
    category: "Bolos Caseiros",
    image: "/images/produtos/produto-001.webp",
  },
  {
    id: "prod-3",
    name: "Mini Pastéis Fritos (Porção)",
    price: "Consultar",
    category: "Salgados Fritos",
    image: "/images/produtos/produto-002.webp",
  },
  {
    id: "prod-4",
    name: "Pão Artesanal Rústico Escuro",
    price: "Consultar",
    category: "Pães Especiais",
    image: "/images/produtos/produto-003.webp",
  },
  {
    id: "prod-5",
    name: "Coxinha de Frango c/ Catupiry",
    price: "Consultar",
    category: "Salgados Fritos",
    image: "/images/produtos/produto-004.webp",
  },
  {
    id: "prod-6",
    name: "Bolo de Cenoura c/ Cobertura",
    price: "Consultar",
    category: "Bolos Caseiros",
    image: "/images/produtos/produto-005.webp",
  },
  {
    id: "prod-7",
    name: "Pão Francês Tradicional",
    price: "Consultar",
    category: "Pães Especiais",
    image: "/images/produtos/produto-006.webp",
  },
  {
    id: "prod-8",
    name: "Empada de Palmito",
    price: "Consultar",
    category: "Salgados Assados",
    image: "/images/produtos/produto-007.webp",
  },
  {
    id: "prod-9",
    name: "Bolo Prestígio Premium",
    price: "Consultar",
    category: "Bolos Caseiros",
    image: "/images/produtos/produto-008.webp",
  },
  {
    id: "prod-10",
    name: "Quibe Frito Recheado",
    price: "Consultar",
    category: "Salgados Fritos",
    image: "/images/produtos/produto-009.webp",
  },
  {
    id: "prod-11",
    name: "Pão Doce c/ Coco",
    price: "Consultar",
    category: "Pães Especiais",
    image: "/images/produtos/produto-010.webp",
  },
  {
    id: "prod-12",
    name: "Bolo de Chocolate Vulcão",
    price: "Consultar",
    category: "Bolos Caseiros",
    image: "/images/produtos/produto-011.webp",
  },
  {
    id: "prod-13",
    name: "Bolo de Leite Ninho c/ Chocolate",
    price: "Consultar",
    category: "Bolos Caseiros",
    image: "/images/produtos/produto-012.webp",
  },
  {
    id: "prod-14",
    name: "Torta Salgada Fatiada",
    price: "Consultar",
    category: "Salgados Assados",
    image: "/images/produtos/produto-013.webp",
  },
  {
    id: "prod-15",
    name: "Misto Quente na Chapa",
    price: "Consultar",
    category: "Salgados Assados",
    image: "/images/produtos/produto-014.webp",
  },
];
