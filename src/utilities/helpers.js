import { PROMOTION_CODES } from "../constants/constants";

/**
 * Calculate the number of products in basket
 *
 * @param {array} products
 * @public
 */
export const calculateNumberProducts = (products) => {
  var numberOfItems = 0;
  products.forEach((product) => {
    numberOfItems += product?.quantity;
  });
  return numberOfItems;
};

/**
 * Calculate the cost for a lots of products
 *
 * @param {object} product
 * @param {object} promotion
 * @public
 */

export const getCostForProduct = ({ product, promotion }) => {
  if (!promotion || product?.quantity < promotion?.requiredQuantity)
    return product?.quantity * product?.unitPrice;

  switch (promotion?.code) {
    case PROMOTION_CODES.ITEMS_FOR_COST:
      const promotionQuantity = parseInt(
        product?.quantity / promotion?.requiredQuantity
      );
      var remainingQuantity = product?.quantity % promotion?.requiredQuantity;
      return (
        promotion?.appliedValue * promotionQuantity +
        remainingQuantity * product.unitPrice
      );

    case PROMOTION_CODES.PERCENT_OF_ITEMS:
      const promotionPercent = 1.0 - promotion?.appliedValue * 0.01;

      var promotionsApplied = parseInt(
        product.quantity / product?.promotion?.requiredQuantity
      );

      remainingQuantity =
        product.quantity % product?.promotion?.requiredQuantity;

      var totalPromotionCost =
        promotionsApplied *
        promotionPercent *
        product?.unitPrice *
        product?.promotion.requiredQuantity;

      return totalPromotionCost + product.unitPrice * remainingQuantity;

    default:
      return product?.quantity * product?.unitPrice;
  }
};

/**
 * Calculate the total price of the basket
 *
 * @param {array} basketProducts
 * @public
 */

export const calculateTotalPrice = (basketProducts) => {
  var totalPrice = 0.0;

  basketProducts.forEach((product) => {
    if (product?.promotion) {
      totalPrice =
        totalPrice +
        getCostForProduct({
          product: product,
          promotion: product?.promotion,
        });
    } else totalPrice = product?.quantity * product?.unitPrice + totalPrice;
  });

  return totalPrice;
};
