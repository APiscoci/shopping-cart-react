import React from "react";
import { render, act, screen } from "@testing-library/react";
import ShoppingBasket from "./shopping-basket";
import { unmountComponentAtNode } from "react-dom";
import { PROMOTION_CODES } from "../constants/constants";

const mockBasketProducts = [
  {
    stockKeepingUnit: "A",
    unitPrice: 10.0,
    quantity: 2,
  },
  {
    stockKeepingUnit: "B",
    unitPrice: 15.0,
    quantity: 2,
    promotion: {
      code: PROMOTION_CODES.ITEMS_FOR_COST,
      requiredQuantity: 3,
      appliedValue: 40,
    },
  },
  { stockKeepingUnit: "C", unitPrice: 40.0, quantity: 1 },
  {
    stockKeepingUnit: "D",
    unitPrice: 55.0,
    quantity: 1,
    promotion: {
      code: PROMOTION_CODES.PERCENT_OF_ITEMS,
      requiredQuantity: 2,
      appliedValue: 25,
    },
  },
];

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

describe("shopping-basket Component", () => {
  it("should render the empty basket correctly", () => {
    act(() => {
      render(
        <ShoppingBasket
          products={[]}
          removeProduct={() => {}}
          changeQuantity={() => {}}
        />
      );
    });
    expect(screen.getByTestId("shopping-basket-title").textContent).toBe(
      "Shopping Basket"
    );
    expect(screen.getByTestId("shopping-basket-number-items").textContent).toBe(
      "0 Items"
    );
    expect(screen.getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £0.00"
    );
  });

  it("should render the products added to the basket correctly", () => {
    act(() => {
      render(
        <ShoppingBasket
          products={mockBasketProducts}
          removeProduct={() => {}}
          changeQuantity={() => {}}
        />
      );
    });
    expect(screen.getByTestId("shopping-basket-number-items").textContent).toBe(
      "6 Items"
    );
    expect(screen.getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £145.00"
    );
    mockBasketProducts.forEach((product) => {
      expect(
        screen.getByTestId(`basket-product-${product.stockKeepingUnit}`)
      ).toBeTruthy();

      expect(
        screen.getByTestId(
          `basket-product-stock-keeping-unit-${product.stockKeepingUnit}`
        ).textContent
      ).toBe(product.stockKeepingUnit);

      expect(
        screen.getByTestId(`basket-product-${product.stockKeepingUnit}-cost`)
          .textContent
      ).toBe(`£${parseFloat(product.quantity * product.unitPrice).toFixed(2)}`);
    });
  });
});
