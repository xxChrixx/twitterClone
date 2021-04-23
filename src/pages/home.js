import React, { useState, useEffect } from "react";
import styled from "styled-components";

//makeTweet
import MakeTweet from "../components/makeTweet";
import TweetList from "../components/tweetList";
import Logo from "../components/Logo.js";

const StyledHome = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 5vh 0;

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

const Home = () => {
  const [title, setTitle] = useState("Home");

  return (
    <StyledHome>
      <header>
        <Logo />
        <StyledTitle>{title}</StyledTitle>
      </header>
      <StyledContent>
        <MakeTweet />
        <span />
        <TweetList />
      </StyledContent>
    </StyledHome>
  );
};

export default Home;
