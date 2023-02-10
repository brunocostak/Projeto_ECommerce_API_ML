import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default function ProductPage({ match: { params: { id } } }) {
  const ID = id.replace(/"/g, '');
  const [produto, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://api.mercadolibre.com/items/${ID}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [ID]);
  return (
    <div>
      <h3
        data-testid="product-detail-name"
      >
        { produto.title }
      </h3>
      <h3
        data-testid="product-detail-price"
      >
        {produto.price}
      </h3>

      <img
        data-testid="product-detail-image"
        src={ produto.thumbnail }
        alt={ produto.title }
      />
      <Link
        data-testid="shopping-cart-button"
        to={ `/cart/${produto.id}` }
      >
        Adicionar ao Carrinho

      </Link>
    </div>
  );
}
