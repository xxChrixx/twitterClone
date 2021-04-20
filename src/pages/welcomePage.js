import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../components/Logo";
import Image from "../images/HomeImage.jpg";
import { OutlinedButton, FilledButton } from "../style/ReusableStyle";

//animations
import { motion } from "framer-motion";
import { titleAnim, welcomeAnimation, photoAnim,fade } from "../animation/animation";



//login 

import Login from '../components/login'
import Subscribe from '../components/subscribe'


const StyledPage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
    width: 50vw;
    position: static;
  }
`;
const StyledContent = styled.div`
  z-index: 1;
  margin: 2rem 2rem;
  color: white;
  width: 100%;
  header {
    svg {
      height: 10vh;
      @media only screen and (min-width: 1200px) {
        height: 8vh;
      }
    }
    height: 10vh;
  }
  .content {
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    h1 {
      font-size: 9vw;
      font-weight: 900;
      letter-spacing: 1px;
      @media only screen and (min-width: 1200px) {
        color: #620bd0;
        font-size: 4.5vw;
      }
    }
    @media only screen and (min-width: 1200px) {
      align-items: flex-start;
      text-align: start;
    }
  }
  footer {
    height: 10vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: flex-start;

    p {
      color: white;
      font-size: 1rem;
      font-weight: 300;
      @media only screen and (min-width: 1200px) {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 50vw;
    margin: 0;
    padding: 2rem 5rem;
  }
`;

const StyledButtons = styled(motion.div)`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
  width: 50vw;
  @media only screen and (min-width: 1200px) {
    width: 40%;
    height: 20%;
    margin: 3rem 0;
  }
`;

const StyledTitle = styled.div`
  margin: 0.5rem 0;
  @media only screen and (min-width: 1200px) {
    margin: 3rem 0;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

const WelcomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [SubscribeOpen, setSubscribeOpen] = useState(false);
  const CheckWidth = () => {
    if (width > 1200) return true;
    return false;
  };

  return (
    <StyledPage
      exit="exit"
      variants={welcomeAnimation}
      initial="hidden"
      animate="show"
    >
      <Login open={LoginOpen} setOpen={setLoginOpen}/>
      <Subscribe open={SubscribeOpen} setOpen={setSubscribeOpen}/>
       <StyledImage>
        <motion.img variants={photoAnim} src={Image}></motion.img>
      </StyledImage>
      <StyledContent>
        <motion.header variants={fade}>
          <Logo title={true} whiteMode={width < 1200 ? true : false} />
        </motion.header>
        <div className="content">
          <StyledTitle>
            <Hide>
              <motion.h1 variants={titleAnim}>TWITTA INSIEME</motion.h1>
            </Hide>
            <Hide>
              <motion.h1 variants={titleAnim}>A NOI !</motion.h1>
            </Hide>
          </StyledTitle>

          <StyledButtons variants={photoAnim}>
            <FilledButton onClick={()=>setSubscribeOpen(true)}>Iscriviti</FilledButton>
            <OutlinedButton onClick={()=>setLoginOpen(true)}>Accedi</OutlinedButton>
          </StyledButtons>
        </div>
        <motion.footer variants={fade}>
          <p>© Boscaro Christian - Rossi Simone</p>
          <p>Chi siamo</p>
          <p>Termini di Servizi</p>
        </motion.footer>
      </StyledContent>
     
    </StyledPage>
  );
};

export default WelcomePage;
