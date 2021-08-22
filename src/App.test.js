import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

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

describe("App tests", () => {
  it("should render the page without crashing", () => {
    act(() => {
      render(<App />, container);
    });
  });

  it("should be able to add item to the basket", () => {
    act(() => {
      render(<App />, container);
    });

    // When
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-A"));

    // Then
    expect(
      screen.getByTestId("basket-product-stock-keeping-unit-A")
    ).toBeTruthy();
  });

  it("should show the total cost of the basket", () => {
    act(() => {
      render(<App />, container);
    });

    // When
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-A"));

    // Then
    expect(screen.getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £10.00"
    );
  });

  it("should apply promotion to every multiple of 3", () => {
    act(() => {
      render(<App />, container);
    });

    // When
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-B"));
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-B"));
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-B"));

    // Then
    expect(screen.getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £40.00"
    );
  });

  it("should apply promotion of 25% off to evey multiple of 2", () => {
    act(() => {
      render(<App />, container);
    });

    // When
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-D"));
    fireEvent.click(screen.getByTestId("add-to-basket-button-product-D"));

    //Then
    expect(screen.getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £82.50"
    );
  });
});
