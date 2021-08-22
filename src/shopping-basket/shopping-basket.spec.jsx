import React from "react";
import { render } from "@testing-library/react";
import ShoppingBasket from "./shopping-basket";
import { PROMOTION_CODES } from "../constants/constants";

describe("shopping-basket Component", () => {
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

  it("should render the empty basket correctly", () => {
    const { getByTestId } = render(
      <ShoppingBasket
        products={[]}
        removeProduct={() => {}}
        changeQuantity={() => {}}
      />
    );
    expect(getByTestId("shopping-basket-title").textContent).toBe(
      "Shopping Basket"
    );
    expect(getByTestId("shopping-basket-number-items").textContent).toBe(
      "0 Items"
    );
    expect(getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £0.00"
    );
  });

  it("should render the products added to the basket correctly", () => {
    const { getByTestId } = render(
      <ShoppingBasket
        products={mockBasketProducts}
        removeProduct={() => {}}
        changeQuantity={() => {}}
      />
    );
    expect(getByTestId("shopping-basket-number-items").textContent).toBe(
      "6 Items"
    );
    expect(getByTestId("shopping-basket-total-price").textContent).toBe(
      "Total: £145.00"
    );
    mockBasketProducts.forEach((product) => {
      expect(
        getByTestId(`basket-product-${product.stockKeepingUnit}`)
      ).toBeTruthy();

      expect(
        getByTestId(
          `basket-product-stock-keeping-unit-${product.stockKeepingUnit}`
        ).textContent
      ).toBe(product.stockKeepingUnit);

      expect(
        getByTestId(`basket-product-${product.stockKeepingUnit}-cost`)
          .textContent
      ).toBe(`£${parseFloat(product.quantity * product.unitPrice).toFixed(2)}`);
    });
  });
});
