import React from "react";


import styled from 'styled-components'
import Logo from './Logo'


const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
svg{
    height: 10vh;
}
padding: 5rem 10rem;
div{
    display: flex;
}

`
const Header = () => {
  return <StyledHeader>
      <Logo/>
      <div>
      <h1>Home</h1>
      <h4>Log out</h4>
      </div>
      
  </StyledHeader>;
};

export default Header;
