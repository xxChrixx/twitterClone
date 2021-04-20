import React,{useEffect, useState} from 'react';
import Tweet from './tweet';


//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadHomeTweet } from "../actions/tweetAction";




const TweetList = ()=>{

  //FETCH TWEETS
  const dispatch = useDispatch();
  const { profile, token } = useSelector(
    (state) => state.user
  );
  const {tweets,isLoading } = useSelector(
    (state) => state.homeTweets
  );


  useEffect(() => {

    dispatch(loadHomeTweet(profile._id,token));
   
  }, [dispatch]);
  //Get that data back
  
    return <>
{
 !isLoading && (  tweets.map(tweet => <Tweet tweet={tweet} key={tweets._id}/>))
}
    </>
}


export default TweetList;