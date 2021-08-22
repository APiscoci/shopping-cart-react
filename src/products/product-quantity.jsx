import React from "react";
import styled from "styled-components";
import { func, number } from "prop-types";

const Container = styled.div`
  display: flex;
  height: 1rem;
  justify-content: space-between;
  width: 5rem;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
`;

const DisplayValue = styled.div`
  padding: 0.8rem 0;
  height: 1rem;
`;

const ProductQuantity = ({ quantity, onChange }) => {
  return (
    <Container data-testid="product-quantity">
      <StyledButton
        data-testid="increse-product-quantity"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </StyledButton>
      <DisplayValue>{quantity}</DisplayValue>
      <StyledButton
        data-testid="increse-product-quantity"
        onClick={() => onChange(quantity + 1)}
      >
        +
      </StyledButton>
    </Container>
  );
};

ProductQuantity.propTypes = {
  quantity: number.isRequired,
  onChange: func.isRequired,
};

export default ProductQuantity;
