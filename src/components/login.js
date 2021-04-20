import React, { useState } from "react";
import styled from "styled-components";

import { Field, FilledButton } from "../style/ReusableStyle";

//request
import axios from "axios";
import { LOGIN_ULR } from "../api/api";

//animations
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animation/animation";

//redux
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/userAction";

//page
import {useHistory} from 'react-router-dom'

const StyledPage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  position: fixed;
  z-index: 100;
`;

const StyledContent = styled(motion.div)`
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
  P {
    color: red;
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

const Login = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const SubmitHandler = async () => {
    if (email === "") return setErrorMessage("Email?");
    if (password === "") return setErrorMessage("Password?");

    //make a requrst for login with axios

    axios
      .post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        //logged in
        dispatch(loadUser(res.data));
        history.push('/home');
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data);
        }
      });

    //Save a temporary key
    //history.push('/Home')
  };

  const CloseHandler = (e) => {
    if (e.target.id === "StyledPage") {
      setOpen(false);
    }
  };

  return (
    <>
      {open ? (
        <StyledPage
          onClick={CloseHandler}
          id="StyledPage"
          initial="hidden"
          animate="show"
          variants={pageAnimation}
        >
          <StyledContent variants={fade}>
            <header>
              <h1>ACCEDI</h1>
            </header>
            <div className="content">
              <div className="fields">
                <p>{errMessage}</p>
                
                <Field
                  placeholder="Mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <FilledButton id="SignInButton" onClick={SubmitHandler}>
                Accedi
              </FilledButton>
            </div>
          </StyledContent>
        </StyledPage>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
