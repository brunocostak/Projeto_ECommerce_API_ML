import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Products from '../components/Products';
import * as api from '../services/api';

class Home extends React.Component {
  state = {
    categories: [],
    products: [],
    product: '',
  };

  componentDidMount() {
    this.getCategories();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      product: value,
    });
  };

  getCategories = async () => {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  };

  getCategory = async (id) => {
    const { results } = await api.getProductsFromCategoryAndQuery(id, null);
    this.setState({
      products: results,
    });
  };

  handleClick = async (categories, product) => {
    const result = await api.getProductsFromCategoryAndQuery(null, product);
    this.setState({
      products: result,
    });
  };

  render() {
    const { product, products, categories } = this.state;
    return (
      <>
        <div>
          <Categories
            categories={ categories }
            onClickCat={ this.getCategory }
          />
          ;
        </div>
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <div data-testid="home-initial-message">
          {product.length === 0
            ? (<p>Digite algum termo de pesquisa ou escolha uma categoria.</p>) : null}
          <input
            data-testid="query-input"
            type="text"
            placeholder="Pesquisar"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            onClick={ () => this.handleClick(categories, product) }
          >
            TESTE
          </button>
          {
            products
              .length === 0 ? (
                <p>Nenhum produto foi encontrado</p>
              ) : (
                <Products
                  products={ products }
                />
              )
          }
          <div />
        </div>
      </>
    );
  }
}

export default Home;
