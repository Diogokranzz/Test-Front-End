import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import '../styles/ProductGrid.scss';

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

// Mapeamento de tabs para categorias reais do mock
const categoryMap: Record<string, string[]> = {
  'CELULAR': ['Smartphones'],
  'ACESSÓRIOS': ['Áudio'],
  'TABLETS': ['Tablets'], // Não há tablets no mock, ficará vazio
  'NOTEBOOKS': ['Notebooks'],
  'TVS': ['TVs'],
  'VER TODOS': [],
};

// Componente principal da vitrine de produtos
const ProductGrid: React.FC = () => {
  // Estados principais
  const [products, setProducts] = useState<Product[]>([]); // Lista de produtos
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Produto selecionado para o modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [loading, setLoading] = useState(true); // Estado de loading
  const [error, setError] = useState<string | null>(null); // Erro de API
  const [usingMockData, setUsingMockData] = useState(false); // Fallback para mock
  const [activeCategory, setActiveCategory] = useState('CELULAR'); // Categoria ativa

  // Carrega produtos da API ou do mock
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  // Função para buscar produtos da API ou mock
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      setUsingMockData(false);
      // Tenta buscar da API oficial
      const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      let productsArray: Product[];
      // Aceita diferentes formatos de resposta
      if (Array.isArray(data)) {
        productsArray = data;
      } else if (data && Array.isArray(data.produtos)) {
        productsArray = data.produtos;
      } else if (data && Array.isArray(data.products)) {
        productsArray = data.products;
      } else if (data && Array.isArray(data.items)) {
        productsArray = data.items;
      } else {
        throw new Error('Formato de dados inválido da API');
      }
      setProducts(productsArray);
      setUsingMockData(false);
    } catch (err) {
      // Fallback para mock em caso de erro
      setProducts(mockProducts);
      setUsingMockData(true);
      setError('Não foi possível carregar os dados da API. Exibindo dados de demonstração.');
    } finally {
      setLoading(false);
    }
  };

  // Abre o modal com o produto selecionado
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Fecha o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Filtra produtos pela categoria ativa
  const filteredProducts = activeCategory === 'VER TODOS'
    ? products
    : products.filter(p => categoryMap[activeCategory].includes(p.categoria));

  // Exibe skeleton loading enquanto carrega
  if (loading) {
    return (
      <main className="loading" role="status" aria-live="polite">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 30, margin: '40px 0'}}>
          {[...Array(6)].map((_, i) => (
            <div className="skeleton-card" key={i} aria-hidden="true" />
          ))}
        </div>
        <p>Carregando produtos, aguarde um momento...</p>
      </main>
    );
  }

  // Exibe erro de formato inesperado
  if (!Array.isArray(products)) {
    return (
      <main className="error" role="alert">
        <h2>Erro no formato dos dados</h2>
        <p>Os dados recebidos não estão no formato esperado.</p>
        <button onClick={fetchProducts} className="retry-button">
          Tentar novamente
        </button>
      </main>
    );
  }

  // Renderização principal
  return (
    <main className="product-grid-container">
      <header>
        <h1 className="page-title highlight">Vitrine Tech</h1>
      </header>
      <nav className="category-tabs" aria-label="Categorias de produtos">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </nav>
      {usingMockData && false && (
        <aside className="mock-data-notice" role="alert">
          <p>Exibindo dados de demonstração. A API não está disponível no momento.</p>
        </aside>
      )}
      {error && !usingMockData && (
        <section className="error" role="alert">
          <h2>Erro ao carregar produtos</h2>
          <p>{error}</p>
          <button onClick={fetchProducts} className="retry-button">
            Tentar novamente
          </button>
        </section>
      )}
      <section className="product-grid" aria-label="Lista de produtos">
        {filteredProducts.length === 0 ? (
          <div className="no-products-message" role="status" aria-live="polite">
            <p>Nenhum produto encontrado nesta categoria.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))
        )}
      </section>
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default ProductGrid; 