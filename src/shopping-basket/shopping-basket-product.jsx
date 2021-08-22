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

const ProductCost = styled.div`
  padding: 1rem 0;
`;

const RemoveButton = styled.button`
  width: 1rem;
  background-color: transparent;
  border: none;
  color: black;
  font-weight: bold;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

const ShoppingBasketProduct = ({ product, changeQuantity, removeProduct }) => {
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
        <ProductCost
          data-testid={`basket-product-${product.stockKeepingUnit}-cost`}
        >
          £{parseFloat(product?.quantity * product?.unitPrice).toFixed(2)}
        </ProductCost>
        <RemoveButton onClick={() => removeProduct(product)}>X</RemoveButton>
      </ProductsContainer>
    </Container>
  );
};

ShoppingBasketProduct.propTypes = {
  product: object.isRequired,
  changeQuantity: func.isRequired,
  removeProduct: func.isRequired,
};

export default ShoppingBasketProduct;
