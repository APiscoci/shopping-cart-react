import { PROMOTION_CODES } from "../constants/constants";

export const mockBasketProducts = [
  {
    stockKeepingUnit: "A",
    unitPrice: 10.0,
    quantity: 2,
  },
  {
    stockKeepingUnit: "B",
    unitPrice: 15.0,
    quantity: 7,
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
    quantity: 10,
    promotion: {
      code: PROMOTION_CODES.PERCENT_OF_ITEMS,
      requiredQuantity: 2,
      appliedValue: 30,
    },
  },
];
