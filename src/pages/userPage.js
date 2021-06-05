import React, { useState } from "react";

//style
import styled from "styled-components";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'
const UserPage = () => {
  const [AvatarOpen, setAvatarOpen] = useState(false);
  const [BannerOpen, setBannerOpen] = useState(false);

  const ClickHandler = (e) => {
    if (e.target.id === "banner") return setBannerOpen(true);
    setAvatarOpen(true);
  };
  const closeHandler = e =>{
    if(e.target.id === "black"){
      setAvatarOpen(false);
      setBannerOpen(false)
    } 
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {AvatarOpen && (
          <StyledEdit id="black" onClick={closeHandler}>
            <motion.div className="avatar" layoutId="avatar"></motion.div>
          </StyledEdit>
        )}
        {BannerOpen && (
          <StyledEdit id="black" onClick={closeHandler}>
            <motion.div className="banner" layoutId="banner"></motion.div>
          </StyledEdit>
        )}
      </AnimatePresence>

      <StyledPage>
      <div>

      </div>
      <div>
      <Header>
          <Banner layoutId="banner" id="banner" onClick={ClickHandler}></Banner>
          <Avatar layoutId="avatar" id="avatar" onClick={ClickHandler}></Avatar>
        </Header>
        <Main>
          <h3>Bio:</h3>
          <textarea   placeholder="Descrivi la tua bio !!!" maxLength="255"/>
        </Main>
<ButtonArea>
<Link to="/Home">
Avanti
</Link>
</ButtonArea>
      </div>
       
       
      </StyledPage>
    </AnimateSharedLayout>
  );
};

const StyledPage = styled.div`
  overflow-y: hidden;
  display: block;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-width: 1200px) {
    display: grid;
    padding: 0 10rem;

    grid-template-columns: 1fr 2fr 1fr;
    margin: 0rem;
  }
  @media only screen and (min-width: 1000px) {
    padding: 1rem 10rem;
  }
`;

const Main = styled.main`
margin-top: 10vh;
width: 100%;
textarea {
  width: 100%;
  height: 7rem;

  resize: none;
  border: none;
  outline: none;
  font-size: 1rem;
}
`
const ButtonArea = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
`
const Header = styled.header`
  margin-top: 10vh;
  width: 100%;
  height: 20vh;
  min-height: 20vh;
  position: relative;
`;
const Banner = styled(motion.div)`
  background: red;
  height: 20vh;
  max-height: 500px;
  min-height: 150px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;
const Avatar = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  max-width: 150px;
  max-height: 150px;
  z-index: 4;
  background: blue;
  position: absolute;
  bottom: -5rem;
  cursor: pointer;
  left: 2rem;
  border-radius: 7.5rem;
`;

const StyledEdit = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .avatar {
    width: 10rem;
    height: 10rem;
    max-width: 150px;
    max-height: 150px;

    background: blue;
    border-radius: 7.5rem;
  }
  .banner {
    background: red;
    height: 20vh;
    width: 40vw;
  }
`;

export default UserPage;
