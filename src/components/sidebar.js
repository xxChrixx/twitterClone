import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

import NavLink from "./navlink.js"
import Logo from "./../components/Logo.js"
import { FilledButton } from "../style/ReusableStyle";

//Redux
import { useDispatch } from "react-redux";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 5vh 0;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .sidebar-container {
        height: 100%;
        margin: 0 auto;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .logout-header {
        margin-top: 1vh;
    }
    p{
        cursor: pointer;
    }
`;


const StyledDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    gap: 2.5vh;
`;

const Sidebar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const LogoOutHandler = () => {

        dispatch({ type: "LOG_OUT" });
        history.push('/')
    }

    return (
        <StyledContainer>
            <div className="sidebar-container">
                <div className="logout-header">
                    <p onClick={LogoOutHandler}>Logout</p>
                </div>
            </div>
        </StyledContainer>
    );
}

export default Sidebar;