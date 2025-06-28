import React from 'react';
import { Product } from '../types/Product';
import '../styles/ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

// Card individual de produto
const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Simulação de preço antigo (10% maior)
  const oldPrice = (product.preco * 1.1).toFixed(2);
  // Simulação de parcelamento
  const parcela = (product.preco / 2).toFixed(2);

  // Formata preço para o padrão BRL
  const formatPrice = (price: number | string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(price));
  };

  return (
    <article className="product-card" tabIndex={0} aria-label={`Produto: ${product.nome}`}>
      <div className="product-image-area">
        <img src={product.imagem} alt={`Imagem do produto ${product.nome}`} loading="lazy" />
      </div>
      <div className="product-info-area">
        <div className="product-title">{product.nome}</div>
        <div className="product-description">{product.descricao?.slice(0, 50) || ''}</div>
        <div className="product-prices">
          <span className="old-price">{formatPrice(oldPrice)}</span>
          <span className="new-price">{formatPrice(product.preco)}</span>
        </div>
        <div className="product-parcelamento">ou 2x de {formatPrice(parcela)} sem juros</div>
        <div className="product-frete">Frete grátis</div>
        <button className="buy-button" onClick={onClick} type="button" tabIndex={0} aria-label={`Comprar ${product.nome}`}>
          COMPRAR
        </button>
      </div>
    </article>
  );
};

export default ProductCard;