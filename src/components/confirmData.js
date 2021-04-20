import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Field, FilledButton } from "../style/ReusableStyle";

//request
import axios from "axios";
import { REGISTER_ULR } from "../api/api";

//animations
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animation/animation";

//redux
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/userAction";

//page
import { useHistory } from "react-router-dom";

const StyledPage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: transparent;
  backdrop-filter: blur(3px);
  position: fixed;
  z-index: 100;
`;

const StyledContent = styled(motion.div)`
  width: 450px;
  height: auto;
  overflow-y: hidden;
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
    width: 30%;
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
.Buttons{
    display: flex;
    justify-content: space-between;
}
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledData = styled.div`
padding: 1rem 0;
div{
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    h3{
        
        padding: 0.5rem 0;
        font-weight: normal;
    }
    h4{
        margin: 0;
        color: gray;
        font-weight: normal;
    }
}

.check{
    display: flex;
    align-items: center;
    flex-direction: row;
    label{
        margin-left: 1rem;
    }
}
`

const ConfirmData = ({ open, setOpen, data }) => {
    const [errMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const SubmitHandler = async () => {
    //make a requrst for login with axios
const bornDate = new Date(`${data.monthNumber}/${data.day}/${data.year}`)
    axios
      .post(REGISTER_ULR(), {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        bornDate: bornDate
      })
      .then((res) => {
        console.log("user added");
        //logged in
        // dispatch(loadUser(res.data));
        // history.push('/home');
      })
      .catch((err) => {
          console.log(err.response);
        if (err.response) {
          setErrorMessage(err.response.data);
        }
      });
  };


  const closeHandler = ()=>{
setOpen(false)
  }
  return (
    <>
      {open ? (
        <StyledPage
          initial="hidden"
          animate="show"
          variants={fade}
        >
          <StyledContent variants={fade}>
            <header>
              <h1>DATI</h1>
            </header>
            <StyledData>
                <div>
                    <h3>Nome:</h3>
                    <h4>{data.name}</h4>
                </div>

                <div>
                    <h3>Mail:</h3>
                    <h4>{data.email}</h4>
                </div>
                <div>
                    <h3>Data di nascita:</h3>
                    <h4>{data.day}/{data.month}/{data.year}</h4>
                </div>

                <div className="check">
                    <input type="checkbox" htmlFor="Privacy" />
                    <label htmlFor="Privacy"> accetta i termini e condizioni</label>
                </div>
            </StyledData>
            <div className="Buttons">
            <FilledButton id="SignInButton" onClick={closeHandler}>
                Modifica
              </FilledButton>
              <FilledButton id="SignInButton" onClick={SubmitHandler}>
                Conferma
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

export default ConfirmData;
