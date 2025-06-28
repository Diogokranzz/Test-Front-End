import { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    nome: "Smartphone Galaxy S23",
    preco: 3499.99,
    descricao: "O mais recente smartphone Samsung com câmera de 108MP e processador Snapdragon 8 Gen 2.",
    imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    categoria: "Smartphones",
    estoque: 15,
    avaliacao: 4.8,
    numAvaliacoes: 127,
    marca: "Samsung",
    modelo: "Galaxy S23",
    especificacoes: {
      "Tela": "6.1 polegadas",
      "Processador": "Snapdragon 8 Gen 2",
      "RAM": "8GB",
      "Armazenamento": "128GB",
      "Câmera": "108MP + 12MP + 10MP"
    },
    cores: ["Preto", "Branco", "Verde"],
    tamanhos: ["128GB", "256GB", "512GB"]
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    preco: 2899.99,
    descricao: "Notebook ideal para trabalho e estudos com processador Intel i5 e SSD de 512GB.",
    imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    categoria: "Notebooks",
    estoque: 8,
    avaliacao: 4.6,
    numAvaliacoes: 89,
    marca: "Dell",
    modelo: "Inspiron 15",
    especificacoes: {
      "Tela": "15.6 polegadas",
      "Processador": "Intel Core i5",
      "RAM": "8GB",
      "Armazenamento": "512GB SSD",
      "Sistema": "Windows 11"
    },
    cores: ["Prata", "Preto"],
    tamanhos: ["8GB RAM", "16GB RAM"]
  },
  {
    id: 3,
    nome: "Fone de Ouvido Sony WH-1000XM4",
    preco: 1299.99,
    descricao: "Fone de ouvido com cancelamento de ruído ativo e até 30 horas de bateria.",
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    categoria: "Áudio",
    estoque: 22,
    avaliacao: 4.9,
    numAvaliacoes: 203,
    marca: "Sony",
    modelo: "WH-1000XM4",
    especificacoes: {
      "Tipo": "Over-ear",
      "Conectividade": "Bluetooth 5.0",
      "Bateria": "30 horas",
      "Cancelamento": "ANC ativo",
      "Peso": "254g"
    },
    cores: ["Preto", "Prata"],
    tamanhos: ["Único"]
  },
  {
    id: 4,
    nome: "Smart TV LG 55\" 4K",
    preco: 2199.99,
    descricao: "Smart TV com resolução 4K, HDR e sistema webOS para streaming.",
    imagem: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    categoria: "TVs",
    estoque: 12,
    avaliacao: 4.7,
    numAvaliacoes: 156,
    marca: "LG",
    modelo: "55UN7300",
    especificacoes: {
      "Tela": "55 polegadas",
      "Resolução": "4K Ultra HD",
      "HDR": "HDR10",
      "Sistema": "webOS",
      "Conectividade": "Wi-Fi + Bluetooth"
    },
    cores: ["Preto"],
    tamanhos: ["55\"", "65\""]
  },
  {
    id: 5,
    nome: "Câmera Canon EOS R6",
    preco: 8999.99,
    descricao: "Câmera mirrorless profissional com sensor full-frame e estabilização de 5 eixos.",
    imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    categoria: "Câmeras",
    estoque: 5,
    avaliacao: 4.9,
    numAvaliacoes: 67,
    marca: "Canon",
    modelo: "EOS R6",
    especificacoes: {
      "Sensor": "Full-frame CMOS",
      "Resolução": "20.1MP",
      "ISO": "100-102400",
      "Gravação": "4K 60fps",
      "Estabilização": "5 eixos"
    },
    cores: ["Preto"],
    tamanhos: ["Body only", "Kit 24-105mm"]
  },
  {
    id: 6,
    nome: "Console PlayStation 5",
    preco: 3999.99,
    descricao: "Console de nova geração com SSD ultra-rápido e suporte a ray tracing.",
    imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    categoria: "Games",
    estoque: 0,
    avaliacao: 4.8,
    numAvaliacoes: 342,
    marca: "Sony",
    modelo: "PlayStation 5",
    especificacoes: {
      "Processador": "AMD Zen 2",
      "GPU": "AMD RDNA 2",
      "Armazenamento": "825GB SSD",
      "Resolução": "4K 120fps",
      "Ray Tracing": "Suportado"
    },
    cores: ["Branco"],
    tamanhos: ["Digital Edition", "Disc Edition"]
  },
  {
    id: 99,
    nome: "Tablet Samsung Galaxy Tab S7",
    preco: 2499.99,
    descricao: "Tablet com tela de 11 polegadas, 128GB, Wi-Fi.",
    imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-t735nzkqzto/gallery/br-galaxy-tab-s7-fe-t735-sm-t735nzkqzto-537510123?$684_547_JPG$",
    categoria: "Tablets",
    estoque: 10,
    avaliacao: 4.7,
    numAvaliacoes: 45,
    marca: "Samsung",
    modelo: "Galaxy Tab S7",
    especificacoes: {
      "Tela": "11 polegadas",
      "Armazenamento": "128GB",
      "Conectividade": "Wi-Fi"
    },
    cores: ["Preto", "Prata"],
    tamanhos: ["128GB"]
  }
]; 