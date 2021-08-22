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
