import React from "react";
import styled from "styled-components";
import { object, func } from "prop-types";
import ProductQuantity from "../products/product-quantity";

const Container = styled.div`
  display: flex;
  position: relative;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.1fr;
  padding: 1rem;
  font-weight: bold;
  margin: 0 1rem;
  border-bottom: 1px solid gray;
  width: 100%;
`;

const ProductSKU = styled.div`
  padding: 1rem 0;
  text-align: left;
`;

const ProductPrice = styled.div`
  padding: 1rem 0;
`;

const ShoppingBasketProduct = ({ product, changeQuantity }) => {
  const handleQuantityChange = (value) => {
    changeQuantity({ ...product, quantity: value });
  };

  return (
    <Container>
      <ProductsContainer
        data-testid={`basket-product-${product.stockKeepingUnit}`}
      >
        <ProductSKU
          data-testid={`basket-product-stock-keeping-unit-${product.stockKeepingUnit}`}
        >
          {product?.stockKeepingUnit}
        </ProductSKU>
        <ProductQuantity
          quantity={product?.quantity}
          onChange={(value) => handleQuantityChange(value)}
        />
        <ProductPrice>£{product?.quantity * product?.unitPrice}</ProductPrice>
      </ProductsContainer>
    </Container>
  );
};

ShoppingBasketProduct.propTypes = {
  product: object.isRequired,
  changeQuantity: func.isRequired,
};

export default ShoppingBasketProduct;
