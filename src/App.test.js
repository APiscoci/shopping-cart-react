import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should render the page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should be able to add item to the basket", () => {
    const { getByTestId } = render(<App />);

    // When
    fireEvent.click(getByTestId("add-to-basket-button-product-A"));

    // Then
    expect(getByTestId("basket-product-stock-keeping-unit-A")).toBeTruthy();
  });

  it("should show the total cost of the basket", () => {
    const { getByTestId } = render(<App />);

    // When
    fireEvent.click(getByTestId("add-to-basket-button-product-A"));

    // Then
    expect(getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £10.00"
    );
  });

  it("should apply promotion to every multiple of 3", () => {
    const { getByTestId } = render(<App />);

    // When
    fireEvent.click(getByTestId("add-to-basket-button-product-B"));
    fireEvent.click(getByTestId("add-to-basket-button-product-B"));
    fireEvent.click(getByTestId("add-to-basket-button-product-B"));

    // Then
    expect(getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £40.00"
    );
  });

  it("should apply promotion of 25% off to evey multiple of 2", () => {
    const { getByTestId } = render(<App />);

    // When
    fireEvent.click(getByTestId("add-to-basket-button-product-D"));
    fireEvent.click(getByTestId("add-to-basket-button-product-D"));

    //Then
    expect(getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £82.50"
    );
  });
});
