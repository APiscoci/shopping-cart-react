import "./App.css";
import Header from "./header/header";
import ProductList from "./products/product-list";
import data from "./data/data";
import ShoppingBasket from "./shopping-basket/shopping-basket";
import { useState } from "react";

function App() {
  const [basketProducts, setBasketProducts] = useState([]);
  const { products } = data;

  const addProductToBasket = (product) => {
    setBasketProducts([...basketProducts, product]);
  };

  return (
    <div className="App">
      <Header />
      <div className="row">
        <ProductList
          products={products}
          addProductToBasket={addProductToBasket}
        />
        <ShoppingBasket products={basketProducts} />
      </div>
    </div>
  );
}

export default App;
