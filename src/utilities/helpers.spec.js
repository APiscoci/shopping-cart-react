import {
  calculateNumberProducts,
  calculateTotalPrice,
  checkPromotionApplied,
  getCostForProduct,
} from "../utilities/helpers";
import { mockBasketProducts } from "./mock-data";

describe("/helpers", () => {
  describe("calculateNumberProducts()", () => {
    it("should return the correct number of products", () => {
      const numberOfProducts = calculateNumberProducts(mockBasketProducts);
      expect(numberOfProducts).toBe(20);
    });
  });

  describe("getCostForProduct()", () => {
    describe("promotion code 0 : n products for cost", () => {
      it("should not apply promotion to less than 3 products 'B'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[1], quantity: 2 },
          promotion: mockBasketProducts[1].promotion,
        });
        expect(numberOfProducts).toBe(30);
      });

      it("should apply promotion to 3 products 'B'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[1], quantity: 3 },
          promotion: mockBasketProducts[1].promotion,
        });
        expect(numberOfProducts).toBe(40);
      });

      it("should apply promotion to multiple of 3 products 'B'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[1], quantity: 6 },
          promotion: mockBasketProducts[1].promotion,
        });
        expect(numberOfProducts).toBe(80);
      });

      it("should apply promotion to multiple of 3 products 'B' plus remaining products", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[1], quantity: 7 },
          promotion: mockBasketProducts[1].promotion,
        });
        expect(numberOfProducts).toBe(95);
      });
    });
    describe("promotion code 1 : percent of n products", () => {
      it("should not apply promotion to less than 2 products 'B'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[3], quantity: 1 },
          promotion: mockBasketProducts[3].promotion,
        });
        expect(numberOfProducts).toBe(55);
      });

      it("should apply promotion to 2 products 'D'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[3], quantity: 2 },
          promotion: mockBasketProducts[3].promotion,
        });
        expect(numberOfProducts).toBe(77);
      });

      it("should apply promotion to multiple of 2 products 'D'", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[3], quantity: 4 },
          promotion: mockBasketProducts[3].promotion,
        });
        expect(numberOfProducts).toBe(154);
      });

      it("should apply promotion to multiple of 3 products 'D' plus remaining products", () => {
        const numberOfProducts = getCostForProduct({
          product: { ...mockBasketProducts[3], quantity: 7 },
          promotion: mockBasketProducts[3].promotion,
        });
        expect(numberOfProducts).toBe(286);
      });
    });
  });

  describe("calculateTotalPrice()", () => {
    describe("products without promotions", () => {
      it("should return the correct price for a product", () => {
        const products = [{ ...mockBasketProducts[0], quantity: 3 }];
        const totalPrice = calculateTotalPrice(products);
        expect(totalPrice).toBe(30);
      });
    });

    describe("products with promotions applied", () => {
      it("should return the correct price for a product with promotion code 0", () => {
        const products = [{ ...mockBasketProducts[1], quantity: 3 }];
        const totalPrice = calculateTotalPrice(products);
        expect(totalPrice).toBe(40);
      });

      it("should return the correct price for a product with promotion code 1", () => {
        const products = [{ ...mockBasketProducts[3], quantity: 4 }];
        const totalPrice = calculateTotalPrice(products);
        expect(totalPrice).toBe(154);
      });
    });

    it("should return the correct price for a list of products", () => {
      const totalPrice = calculateTotalPrice(mockBasketProducts);
      expect(totalPrice).toBe(540);
    });
  });

  describe("checkPromotionApplied()", () => {
    it("should return true if the product has a promotion applied", () => {
      const numberOfProducts = checkPromotionApplied(mockBasketProducts[1]);
      expect(numberOfProducts).toBe(true);
    });

    it("should return undefined if the product has no promotion applied", () => {
      const numberOfProducts = checkPromotionApplied(mockBasketProducts[0]);
      expect(numberOfProducts).toBe(undefined);
    });
  });
});
