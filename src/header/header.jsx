import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 2px solid black;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer data-testid="header">Shopping Cart React</HeaderContainer>
  );
};

export default Header;
