import React, { useState } from "react";
import styled from "styled-components";

import { Field, FilledButton } from "../style/ReusableStyle";

import {useHistory} from "react-router-dom"
const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: transparent;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255,0.5);
  backdrop-filter: blur(10px);
`;

const StyledContent = styled.div`
  width: 450px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: white;
  box-shadow: 0 0 10px gray;
  padding: 20px 30px;

  h1 {
    font-size: calc(25px + 1.5vw);
    font-weight: 900;
    letter-spacing: 1px;
    color: #620bd0;
  }

  .fields {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 15px;
  }

  #SignInButton {
      width: 50%;
      float: right;
      margin: 25px 0;
      color: white;
      background-color: #620bd0;
      border-radius: 1.2rem;

      :hover {
        background-color: #620bd0e0;
      }
  }

  .selectPlaceHolder {
      color: #333;
  }

  @media only screen and (max-width: 700px) {
      width: 100vw;
      height: 100vh;
  }
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    //data verification
    const SubmitHandler = ()=>{
      if(email === "") return;
      if(password === "") return;

      //make a requrst for login with axios


      //Save a temporary key
      history.push('/Home')
    }
    //close modal
    const CloseHandler = (e) =>{
      if(e.target.id !== "StyledPage") return;
      history.push('/')
    }
    return (
        <StyledPage onClick={CloseHandler} id="StyledPage">
            <StyledContent>
                <header>
                    <h1>ACCEDI</h1>
                </header>
                <div className="content">
                    <div className="fields">
                        <Field placeholder="Mail" onChange={(e) => setEmail(e.target.value)} />
                        <Field placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <FilledButton id="SignInButton" onClick={SubmitHandler}>Accedi</FilledButton>
                </div>
            </StyledContent>
        </StyledPage>
    );
}

export default Login;