import { PROMOTION_CODES } from "../constants/constants";

const data = {
  products: [
    { stockKeepingUnit: "A", unitPrice: 10.0 },
    {
      stockKeepingUnit: "B",
      unitPrice: 15.0,
      promotion: {
        code: PROMOTION_CODES.ITEMS_FOR_COST,
        requiredQuantity: 3,
        appliedValue: 40,
      },
    },
    {
      stockKeepingUnit: "C",
      unitPrice: 40.0,
    },
    {
      stockKeepingUnit: "D",
      unitPrice: 55.0,
      promotion: {
        code: PROMOTION_CODES.PERCENT_OF_ITEMS,
        requiredQuantity: 2,
        appliedValue: 25,
      },
    },
  ],
};

export default data;
