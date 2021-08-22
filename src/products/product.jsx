import React, { useState } from "react";
import { object, func } from "prop-types";
import styled from "styled-components";
import { DEFAULT_QUANTITY } from "../constants/constants";
import ProductQuantity from "./product-quantity";

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  font-weight: bold;
  padding: 1rem;
  height: 3rem;
  border-bottom: 1px solid gray;
`;

const ProductSKU = styled.div`
  padding: 1rem 0;
`;

const AddToBasketButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-weight: bold;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;

const Product = ({ product, addProductToBasket }) => {
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);

  const [selectedProduct, setSelectedProduct] = useState({
    ...product,
    quantity: DEFAULT_QUANTITY,
  });

  const handleOnChangeQuantity = (value) => {
    setQuantity(value);
    setSelectedProduct({ ...selectedProduct, quantity: value });
  };

  const handleAddProductToBasket = () => {
    addProductToBasket(selectedProduct);
    setQuantity(DEFAULT_QUANTITY);
  };

  return (
    product && (
      <Container>
        <ProductSKU data-testid={`product-${product?.stockKeepingUnit}`}>
          {product?.stockKeepingUnit}
        </ProductSKU>
        <ProductSKU>£{parseFloat(product?.unitPrice).toFixed(2)}</ProductSKU>
        <ProductQuantity
          quantity={quantity}
          onChange={(value) => {
            handleOnChangeQuantity(value);
          }}
        />
        <AddToBasketButton
          data-testid={`add-to-basket-button-product-${product.stockKeepingUnit}`}
          onClick={() => handleAddProductToBasket()}
        >
          ADD TO BASKET
        </AddToBasketButton>
      </Container>
    )
  );
};

Product.propTypes = {
  product: object.isRequired,
  addProductToBasket: func.isRequired,
};

export default Product;
