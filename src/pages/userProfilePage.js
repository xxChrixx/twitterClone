import React from "react";

import styled from "styled-components";

import UserInfo from '../components/userInfo'

//Redux
import { useSelector, useDispatch } from "react-redux";


const StyledProfile = styled.div`
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

const ProfilePage = () => {
    const { profile } = useSelector((state) => state.user);
return(
    <StyledProfile>
        <header>
            <StyledTitle >
                Profilo
            </StyledTitle>
        </header>
        <UserInfo userId={profile._id}/>
    </StyledProfile>
)
};

export default ProfilePage;
