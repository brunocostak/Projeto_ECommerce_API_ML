import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends React.Component {
  state = {
    list: [],
    categories: [],
  };

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });

    api.getProductsFromCategoryAndQuery('Roda').then((products) => {
      this.setState({ list: products });
    });
    console.log(this.state.list);
  }

  render() {
    const { list, categories } = this.state;
    return (
      <>
        <div>
          <Categories
            categories={ categories }
          />
          ;
        </div>
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <div data-testid="home-initial-message">
          {list.length === 0
            ? (<p>Digite algum termo de pesquisa ou escolha uma categoria.</p>) : null}
          <input
            type="text"
            placeholder="Pesquisar"
          />
        </div>
      </>
    );
  }
}

export default Home;
