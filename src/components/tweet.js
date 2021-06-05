import React  from "react";
import styled from "styled-components";

import ImageProfile from "../images/defaultImage.png";
import { BASE_URL } from "../api/api";

import Like from "./inconButtons/Like";
import Retweet from "./inconButtons/Retweet";
import Replay from "./inconButtons/Replay";
import Share from "./inconButtons/Share";

import {useHistory} from 'react-router-dom'
const StyledTweet = styled.div`
  display: flex;
  width: 100%;
  background: white;
  min-height: 200px;
  -webkit-box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  margin: 1rem 1rem;
  flex-direction: column;
  max-width: 800px;
  transition: all 0.5s ease;
  
  @media screen and (max-width: 1000px) {
    max-width: 90vw;
  }
  :hover {
    -webkit-box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
    margin: 2rem 1rem;
  }

`;
const TweetHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  max-height: 90px;
  margin: 0;
  width: 100%;
`;
const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.div`
  width: 100px;
  padding-right: 1rem;
  img {
    width: 60px;
    height: 60px;
  }
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 60px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
const UserData = styled.div`
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  h4 {
    font-size: 0.8rem;
    font-weight: normal;
    cursor: pointer;
    color: gray;
    transition: all 0.3s ease-in;
    :hover {
      color: #6216d0;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
`;

const StyledDate = styled.div`
  h4 {
    font-size: 0.8rem;
    font-weight: normal;
    color: gray;
  }
`;

const Body = styled.div`
  margin-left: calc(100px + 1rem);
  margin-right: 1rem;
  overflow: hidden;

  h4 {
    font-size: 1.3rem;
    font-weight: normal;
    letter-spacing: 1px;
    word-wrap: break-word;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 1rem;
  }
`;

const BodyImage = styled.div`
  padding: 2rem 0rem;
  padding-right: 1rem;


  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const StyledBar = styled.div`
  svg {
    height: 40px; 
    cursor: pointer;
    padding: 10px;
  }
  width: 100%;
  padding: 1rem 0rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-right: 0rem;
  
  }
`;

const Tweet = ({ tweet }) => {
 
const history = useHistory();
  const convertDate = (tweetDate) => {
    const nowDate = new Date();
    const date = new Date(tweetDate);
    let delta = Math.abs(nowDate - date) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;

    return { days: days, hours: hours, minutes: minutes };
  };

  const dateToString = () => {
    const timeGap = convertDate(tweet.tweet.date);
    const date = new Date(tweet.tweet.date);

    if (timeGap.days > 7)
      return `${date.getDay()} ${date.toLocaleString("default", {
        month: "long",
      })}`;
    if (timeGap.days > 1) return `${timeGap.days} giorni fa`;
    if (timeGap.hours > 0) return `${timeGap.hours} ore fa`;
    return `${timeGap.minutes} minuti fa`;
  };

  const DateString = dateToString()


  const userHandler = () =>{
    history.push(`/view/${tweet._id}`)
  }
  return (
    <>
    {tweet && (
      <StyledTweet>
      <TweetHeader>
        <UserInformation>
          <ProfileImage>
            {tweet.profileImage === "" ? (
              <img src={ImageProfile} alt="PI"></img>
            ) : (
              ""
            )}
          </ProfileImage>
          <UserData>
            <h2>{tweet.name}</h2>
            <h4 onClick={userHandler}>@{tweet.username}</h4>
          </UserData>
        </UserInformation>
        <StyledDate>
          <h4>{DateString}</h4>
        </StyledDate>
      </TweetHeader>
      <Body>
        <h4>{tweet.tweet.body}</h4>
        <BodyImage>
        {
          tweet.tweet.image && (
            <img
              src={`${BASE_URL}/${tweet.tweet.image}`}
              alt="profileImage"
            ></img>
          )
        }
        
        </BodyImage>
        <StyledBar>
          <Replay />
          <Retweet />
          <Like />
          <Share />
        </StyledBar>
      </Body>
    </StyledTweet>
    )}
     </>
    
  );
};

export default Tweet;
