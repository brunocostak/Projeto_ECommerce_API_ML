import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Products from '../components/Products';
import * as api from '../services/api';

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');

  const handleChange = ({ target: { value } }) => {
    setProduct(value);
  };
  useEffect(() => {
    const getCategories = async () => {
      api.getCategories().then((categorias) => {
        setCategories(categorias);
        console.log('loop?');
      });
    };
    getCategories();
  }, [setCategories]);

  const getCategory = async (id) => {
    const { results } = await api.getProductsFromCategory(id);
    console.log('getCategory');
    setProducts(results);
  };

  const handleClick = async (produto) => {
    const result = await api.getProductsFromCategoryAndQuery(null, produto);
    console.log('handleClick');
    setProducts(result.results);
  };
  return (
    <>
      <div>
        <Categories
          categories={ categories }
          onClickCat={ getCategory }
        />
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
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          onClick={ () => handleClick(product) }
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
export default Home;
