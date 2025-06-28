import React, { useEffect } from 'react';
import { Product } from '../types/Product';
import '../styles/ProductModal.scss';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    // Fecha modal ao pressionar ESC
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Foco automático no modal ao abrir
    const modal = document.getElementById('modal-content');
    if (isOpen && modal) {
      modal.focus();
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled" aria-hidden="true">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half" aria-hidden="true">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty" aria-hidden="true">☆</span>);
    }

    return stars;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div id="modal-content" className="modal-content" onClick={(e) => e.stopPropagation()} tabIndex={-1} aria-label={`Detalhes do produto ${product.nome}`}>
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>
        
        <div className="modal-body">
          <div className="product-details">
            <figure className="product-image-section">
              <img src={product.imagem} alt={`Imagem detalhada do produto ${product.nome}`} className="product-image" />
            </figure>
            
            <div className="product-info-section">
              <h2 id="modal-title" className="product-title">{product.nome}</h2>
              
              <div className="product-rating" aria-label={`Avaliação: ${product.avaliacao} de 5 estrelas`}>
                <div className="stars" role="img" aria-label={`${product.avaliacao} de 5 estrelas`}>
                  {renderStars(product.avaliacao)}
                </div>
                <span className="rating-text">
                  {product.avaliacao} ({product.numAvaliacoes} avaliações)
                </span>
              </div>
              
              <div className="product-price">
                <span className="price">{formatPrice(product.preco)}</span>
              </div>
              
              <div className="product-description">
                <p>{product.descricao}</p>
              </div>
              
              <dl className="product-meta">
                <div className="meta-item">
                  <dt>Marca:</dt>
                  <dd>{product.marca}</dd>
                </div>
                <div className="meta-item">
                  <dt>Modelo:</dt>
                  <dd>{product.modelo}</dd>
                </div>
                <div className="meta-item">
                  <dt>Categoria:</dt>
                  <dd>{product.categoria}</dd>
                </div>
                <div className="meta-item">
                  <dt>Estoque:</dt>
                  <dd>{product.estoque} unidades</dd>
                </div>
              </dl>
              
              {product.cores && product.cores.length > 0 && (
                <div className="product-colors">
                  <strong>Cores disponíveis:</strong>
                  <ul className="color-options">
                    {product.cores.map((cor, index) => (
                      <li key={index} className="color-option">{cor}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {product.tamanhos && product.tamanhos.length > 0 && (
                <div className="product-sizes">
                  <strong>Tamanhos disponíveis:</strong>
                  <ul className="size-options">
                    {product.tamanhos.map((tamanho, index) => (
                      <li key={index} className="size-option">{tamanho}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {Object.keys(product.especificacoes).length > 0 && (
                <div className="product-specifications">
                  <strong>Especificações:</strong>
                  <dl className="specs-list">
                    {Object.entries(product.especificacoes).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <dt className="spec-key">{key}:</dt>
                        <dd className="spec-value">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 