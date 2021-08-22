import "./App.css";
import Header from "./header/header";
import ProductList from "./products/product-list";
import data from "./data/data";
import ShoppingBasket from "./shopping-basket/shopping-basket";
import { useState } from "react";

function App() {
  const [basketProducts, setBasketProducts] = useState([]);
  const { products } = data;

  const addProduct = (product) => {
    const productExists = basketProducts.find(
      (basketProduct) =>
        basketProduct?.stockKeepingUnit === product?.stockKeepingUnit
    );

    if (productExists) {
      setBasketProducts(
        basketProducts.map((basketProduct) =>
          basketProduct?.stockKeepingUnit === product?.stockKeepingUnit
            ? {
                ...basketProduct,
                quantity: product.quantity + basketProduct.quantity,
              }
            : basketProduct
        )
      );
    } else {
      setBasketProducts([...basketProducts, product]);
    }
  };

  const changeQuantity = (product) => {
    const productExists = basketProducts.find(
      (basketProduct) =>
        basketProduct?.stockKeepingUnit === product?.stockKeepingUnit
    );
    if (productExists) {
      setBasketProducts(
        basketProducts.map((basketProduct) =>
          basketProduct?.stockKeepingUnit === product?.stockKeepingUnit
            ? {
                ...basketProduct,
                quantity: product.quantity,
              }
            : basketProduct
        )
      );
    }
  };

  const removeProduct = (product) => {
    const updatedBasket = basketProducts.filter(
      (basketProduct) =>
        basketProduct?.stockKeepingUnit !== product?.stockKeepingUnit
    );
    setBasketProducts(updatedBasket);
  };

  return (
    <div className="App">
      <Header />
      <div className="row">
        <ProductList products={products} addProduct={addProduct} />
        <ShoppingBasket
          products={basketProducts}
          changeQuantity={changeQuantity}
          removeProduct={removeProduct}
        />
      </div>
    </div>
  );
}

export default App;
