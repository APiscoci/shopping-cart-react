import React from "react";
import styled from "styled-components";
import { arrayOf, object } from "prop-types";

const Container = styled.div`
  width: 40%;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const TotalCost = styled.div`
  padding: 1rem;
  border-top: 1px solid grey;
  text-align: end;
`;

const ListBasketProducts = styled.div`
  height: 21rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const ShoppingBasket = ({ products }) => {
  return (
    <Container>
      <Title>
        <span data-testid="shopping-basket-title">Shopping Basket</span>
        <span data-testid="shopping-basket-number-items">0 Items</span>
      </Title>
      <ListBasketProducts>
        {products.map((product) => {
          return <div>{product.stockKeepingUnit}</div>;
        })}
      </ListBasketProducts>
      <TotalCost data-testid="shopping-basket-total-price">
        <b>Total: </b>£0.00
      </TotalCost>
    </Container>
  );
};
ShoppingBasket.propTypes = {
  products: arrayOf(object),
};

ShoppingBasket.defaultProps = {
  products: [],
};
export default ShoppingBasket;