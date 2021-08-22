import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import ProductList from "./product-list";
import data from "../data/data";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("product-list component", () => {
  const { products } = data;
  it("should render the header without crashing", () => {
    act(() => {
      render(<ProductList />, container);
    });
    expect(screen.getByTestId("products-list")).toBeTruthy();
  });

  it("should render the products correctly", () => {
    act(() => {
      render(<ProductList products={products} />, container);
    });
    products.forEach((product) => {
      expect(
        screen.getByTestId(`product-${product.stockKeepingUnit}`).textContent
      ).toBe(product.stockKeepingUnit);

      expect(
        screen.getByTestId(`product-cost-${product.stockKeepingUnit}`)
          .textContent
      ).toBe(`£${parseFloat(product.unitPrice).toFixed(2)}`);
    });
  });

  it("should render the add to basket buttons", () => {
    act(() => {
      render(<ProductList products={products} />, container);
    });
    products.forEach((product) => {
      expect(
        screen.getByTestId(
          `add-to-basket-button-product-${product.stockKeepingUnit}`
        ).textContent
      ).toBeTruthy();
    });
  });
});
