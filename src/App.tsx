import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import NewProducts from "./components/NewProducts/NewProducts";
import ProductList from "./components/ProductList/ProductList";
const App = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact>
            <ProductList/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/add-products'>
            <NewProducts/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
