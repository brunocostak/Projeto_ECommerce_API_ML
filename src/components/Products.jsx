import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Products({ products }) {
  return (
    <div>
      { products?.map((product) => (
        <Link
          data-testid="product-detail-link"
          key={ product.id }
          to={ `/product-details/${product.id}` }
        >
          <div data-testid="product">
            <p>
              { product.title }
            </p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              { product.price }
            </p>
          </div>
        </Link>
      )) }
    </div>
  );
}
Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
