import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import ProductList from "./product-list";
import data from "../data/data";

describe("product-list component", () => {
  const { products } = data;
  it("should render the header without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductList />, div);
  });

  it("should render the products correctly", () => {
    const { getByTestId } = render(<ProductList products={products} />);
    products.forEach((product) => {
      expect(
        getByTestId(`product-${product.stockKeepingUnit}`).textContent
      ).toBe(product.stockKeepingUnit);
    });
  });

  it("should render the add to basket buttons", () => {
    const { getByTestId } = render(<ProductList products={products} />);
    products.forEach((product) => {
      expect(
        getByTestId(`add-to-basket-button-product-${product.stockKeepingUnit}`)
          .textContent
      ).toBeTruthy();
    });
  });
});
