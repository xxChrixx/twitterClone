import React,{useEffect, useState} from 'react';
import styled from 'styled-components'

import axios from 'axios'
import Tweet from '../components/tweet'
import {GETALLTWEET_URL} from '../api/api'
import { useSelector } from "react-redux";
const StyledExplore = styled.div`
  
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

  
  @media only screen and (max-width: 600px) {
    padding: 2vh 0;

    header {
      margin: 0 10px;
      gap: 20px;
      align-items: center;
    }

   
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  
margin-bottom: 20vh;
 
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
const ExplorePage = () =>{
const [tweets, setTweets] = useState([]);
const { token } = useSelector((state) => state.user);
    useEffect(() =>{
        axios
        .get(GETALLTWEET_URL(), { headers: { "auth-token": token } })
        .then((res) => {
            setTweets(res.data);
        
        })
        .catch((err) => console.log(err));
    },[])
    return(<StyledExplore>
        <header>
          
          <StyledTitle>Esplora</StyledTitle>
        </header>
        <Scroll>
        <StyledContent>
         
          <span />
        
        {
            tweets && (
                tweets.map(tweet => <Tweet tweet={tweet} key={tweets._id}/>)
            )
      
        }
       
        
        </StyledContent>
        </Scroll>
      </StyledExplore>)
}

export default ExplorePage