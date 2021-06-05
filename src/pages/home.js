import React, { useState, useEffect } from "react";
import styled from "styled-components";

//makeTweet
import MakeTweet from "../components/makeTweet";
import TweetList from "../components/tweetList";

//aside

//nav

//Redux
import { useSelector,useDispatch } from "react-redux";
import Logo from "../components/Logo.js";


const StyledHome = styled.div`
  
  width: 100%;
  height: 100%;
  padding: 5vh 0;
  overflow: hidden;
  max-height: 100vh;
  header {
    display: flex;
    margin: 0 2.5vw;
    vertical-align: middle;
    padding-bottom: 5vh;
  }

  svg {
    display: none;
    height: 10vh;
  }

  @media only screen and (max-width: 600px) {
    padding: 2vh 0;

    header {
      margin: 0 10px;
      gap: 20px;
      align-items: center;
    }

    svg {
      display: block;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  

 
  span {
    height: 3rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  vertical-align: middle;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Scroll = styled.div`
 overflow-y: scroll;
 height: 100%;
`
const Home = () => {
  const { token} = useSelector((state) => state.user);
    const [title, setTitle] = useState("Home");
  //useEffect(() => {
  //  if (token === "") {
  //    //history.push("/");
  //  }
  //}, [token]);

  return (
    <StyledHome>
      <header>
        <Logo />
        <StyledTitle>{title}</StyledTitle>
      </header>
      <Scroll>
      <StyledContent>
        <MakeTweet />
        <span />
      
        <TweetList />
     
      
      </StyledContent>
      </Scroll>
    </StyledHome>
  );
};

export default Home;
