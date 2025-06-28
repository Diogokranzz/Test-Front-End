export interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: string;
  estoque: number;
  avaliacao: number;
  numAvaliacoes: number;
  marca: string;
  modelo: string;
  especificacoes: {
    [key: string]: string;
  };
  cores: string[];
  tamanhos: string[];
} 