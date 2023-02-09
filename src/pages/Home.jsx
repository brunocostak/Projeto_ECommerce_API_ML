import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ list: categories });
    });
  }

  render() {
    const { list } = this.state;
    return (
      <>
        <div>
          <Categories
            categories={ list }
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
