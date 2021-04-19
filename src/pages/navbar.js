import React from "react";
import styled from "styled-components";

import NavLink from "./navlink.js"
import Logo from "./../components/Logo.js"
import { FilledButton } from "../style/ReusableStyle";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 0;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .navbar-container {
        height: 100%;
        margin: 0 auto;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .logo-header {
        height: 10vh;

        svg {
            width: auto;
            height: inherit;
        }
    }
`;

const StyledNav = styled.nav`
    height: 100%;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;

    .tweet-button {
      height: 45px;
      min-width: 100px;
      min-height: 25px;
      font-size: 1rem;

      border-radius: 1.5rem;
      background-color: #620bd0;
      color: white;

      :hover {
            background-color: #620bd0e0;
        }
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    gap: 2.5vh;
`;

const Navbar = () => {
    return (
        <StyledContainer>
            <div className="navbar-container">
                <div className="logo-header">
                    <Logo title={true} />
                </div>
                <StyledNav>
                    <StyledDiv>
                        <NavLink path="/home" text="Home" imgPath="./icons/home.svg" />
                        <NavLink path="/explore" text="Esplora" imgPath="./icons/explore.svg" />
                        <NavLink path="/notifications" text="Notifiche" imgPath="./icons/notifications.svg" />
                        <NavLink path="/messages" text="Messaggi" imgPath="./icons/messages.svg" />
                        <NavLink path="/profile" text="Profilo" imgPath="./icons/profile.svg" />
                    </StyledDiv>
                    <FilledButton className="tweet-button" to="#">Twitta</FilledButton>
                </StyledNav>
            </div>
        </StyledContainer>
    );
}

export default Navbar;