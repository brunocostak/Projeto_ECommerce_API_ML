import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import CartShop from './pages/CartShop';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ CartShop } />
        <Route exact path="/product-details/:id" component={ ProductPage } />
      </Switch>
    </div>
  );
}

export default App;
