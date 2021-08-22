import "./App.css";
import Header from "./header/header";
import ProductList from "./products/product-list";
import data from "./data/data";

function App() {
  const { products } = data;
  return (
    <div className="App">
      <Header />
      <div className="row">
        <ProductList products={products} />
        <div>Shopping Basket</div>
      </div>
    </div>
  );
}

export default App;
