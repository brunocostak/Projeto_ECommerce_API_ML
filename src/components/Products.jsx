import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <div data-testid="product" key={ product.id }>
            <p>
              { product.title }
            </p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              { product.price }
            </p>
          </div>
        )) }
      </div>
    );
  }
}
Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
