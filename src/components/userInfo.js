import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tweet from "./tweet";
//request
import axios from "axios";
import { PROFILE_INFO, BASE_URL, FOLLOWING_URL, UNFOLLOWING_URL } from "../api/api";
import { useSelector,useDispatch } from "react-redux";
import {loginToken} from '../actions/userAction'

const Scroll = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const UserInfo = ({ userId }) => {
  const [user, setUser] = useState({});
  const { profile, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loadProfile = () =>{
    axios
    .get(`${PROFILE_INFO()}/${userId}`, { headers: { "auth-token": token } })
    .then((res) => {
      setUser(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    loadProfile();
  }, []);

  const followHandler = () => {
    
    axios
      .post(
        FOLLOWING_URL(),
        { userId: profile._id, followId: userId },
        { headers: { "auth-token": token } }
      )
      .then((res) => {
        //refresh
        dispatch(loginToken(profile._id, token));
        loadProfile();
      })
      .catch((err) => console.log(err));
  };
const unfollowHandler = ()=>{
    axios
    .post(
        UNFOLLOWING_URL(),
      { userId: profile._id, followId: userId },
      { headers: { "auth-token": token } }
    )
    .then((res) => {
      //refresh
      dispatch(loginToken(profile._id, token));
      loadProfile();
    })
    .catch((err) => console.log(err));
}
  return (
    <Scroll>
      {user && (
        <Content>
          <Header>
            <Banner></Banner>
            <Avatar img={`${BASE_URL}/${user.profileImage}`}></Avatar>
          </Header>

          <Info>
            <FollowingSection>
              <h2>{user.username}</h2>
              {profile.following.includes(userId) ? (
                <button onClick={unfollowHandler}>Non seguire</button>
              ) : (
                <button onClick={followHandler}>Segui</button>
              )}
            </FollowingSection>

            <h4>{user.name}</h4>
            <div>
              <h3>follower: {user.followerNumber}</h3>
              <h3>following: {user.followingNumber}</h3>
            </div>

            <h3>Bio:</h3>
            <p>{user.bio}</p>
          </Info>
          <TweetList>
            {user.tweets &&
              user.tweets.map((tweet) => (
                <Tweet tweet={tweet} key={tweet.tweet._id} />
              ))}
          </TweetList>
        </Content>
      )}
    </Scroll>
  );
};

const Info = styled.div`
  margin-top: 8rem;
  h3 {
    padding: 0;

  }
  h4 {
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    margin-bottom: 1rem;
    h3 {
      margin-right: 1rem;
    }
  }
  p {
    margin-bottom: 3rem;
  }

  @media (max-width: 800px){
      padding: 0 1rem;
      h2{
          font-size: 1.5rem;
          font-weight: 500;
      }
  }
`;
const Content = styled.div`
  width: 100%;
`;

const TweetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10vh;
`;

const FollowingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: transparent;
    border: none;
    outline: none;
    padding: 0 2rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Header = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 20vh;
  min-height: 20vh;
  position: relative;
`;
const Banner = styled.div`
  background: #838383;
  width: 100%;
  height: 20vh;
  max-height: 500px;
  min-height: 150px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;
const Avatar = styled.div`
  width: 10rem;
  height: 10rem;
  max-width: 150px;
  max-height: 150px;
  z-index: 4;
  background: #b4b4b4;
  position: absolute;
  bottom: -5rem;
  cursor: pointer;
  left: 2rem;
  border-radius: 7.5rem;
  background-image: url("${(props) => props.img}");
`;
export default UserInfo;
