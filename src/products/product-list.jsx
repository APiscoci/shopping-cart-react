import React from "react";
import { arrayOf, object, func } from "prop-types";
import styled from "styled-components";
import Product from "./product";

const Container = styled.div`
  width: 50%;
`;

const ProductList = ({ products, addProductToBasket }) => {
  return (
    <Container data-testid="products-list">
      {products?.map((product) => {
        return (
          <Product
            product={product}
            addProductToBasket={addProductToBasket}
            key={`product-${product.stockKeepingUnit}`}
          >
            {product.stockKeepingUnit}
          </Product>
        );
      })}
    </Container>
  );
};

ProductList.propTypes = {
  products: arrayOf(object),
  addProductToBasket: func,
};

ProductList.defaultProps = {
  products: [],
  addProductToBasket: () => {},
};

export default ProductList;
