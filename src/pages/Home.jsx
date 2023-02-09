import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    list: [],
  };

  render() {
    const { list } = this.state;
    return (
      <>
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
