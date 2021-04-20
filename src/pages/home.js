import React from "react";
import styled from "styled-components";

//header
import Header from "../components/header";
//makeTweet
import MakeTweet from "../components/makeTweet";
import TweetList from "../components/tweetList";

//aside

//nav




const StyledHome = styled.div`
 overflow-y: hidden;
  display: block;
  width: 100%;

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

const StyledContent = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
position: relative;
margin-top: 10vh;
span{
  height: 3rem;
}
@media only screen and (min-width: 1200px) {
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

`
const Home = () => {
  return (
    <div>
      <Header />
      <StyledHome>
        <div></div>
        <StyledContent>
        <MakeTweet />
        <span/>
        <TweetList/>
        </StyledContent>
       <div>
         
       </div>
        
      </StyledHome>
    </div>
  );
};

export default Home;
