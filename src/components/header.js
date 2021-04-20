import React,{useState, useEffect} from "react";
import styled from "styled-components";

import { useHistory} from 'react-router-dom'
//logo
import Logo from "./Logo";


//Redux
import { useDispatch } from "react-redux";

const StyledHeader = styled.header`
  height: 10vh;
  overflow: hidden;
  padding: 0 3rem;
  display: flex;

  background: white;
  width: 100vw;

  align-items: center;
  svg {
    height: 8vh;
    padding: 2px;
  }
  h2{
      font-size: 1.5rem;
      font-weight: bold;
      margin-left: 2rem;
  }
  h3{
      display: none;
      font-weight:normal;
      font-size: 1rem;
      cursor: pointer;
  }

div{
    display: flex;
    justify-content: center;
    align-items: center;
}
  @media only screen and (min-width: 600px) {
    h3{
        display: block;
    }
    justify-content: space-around;
    position: fixed;
  }
  @media only screen and (min-width: 1200px) {
    
   padding: 0 10rem;
   justify-content: space-between;
   h2{
       margin-left: 0;
   }
  }


`;
const Header = () => {
    const [title, setTitle] = useState("Home");
    const history = useHistory();
    const dispatch = useDispatch();
    const LogoOutHandler = () =>{
      
      dispatch({type: "LOG_OUT"});
      history.push('/')
    }
  return (
    <StyledHeader>
         <Logo  title={true} />
      
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h3 onClick={LogoOutHandler}>Logout</h3>
      </div>
    </StyledHeader>
  );
};

export default Header;
