import React from "react";
import { arrayOf, object } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

const ProductList = ({ products }) => {
  return (
    <Container data-testid="products-list">
      {products?.map((product) => {
        return (
          <div key={`product-${product.stockKeepingUnit}`}>
            {product.stockKeepingUnit}
          </div>
        );
      })}
    </Container>
  );
};

ProductList.propTypes = {
  products: arrayOf(object),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
