import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
    width: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;

    :hover {
        p {
            color: #620bd0;
        }

        path {
            fill: #620bd0;
        }
    }

    p {
        color: black;
        font-size: 1rem;
        font-weight: 800;
    }

    img {
        width: 22.5px;
        height: auto;
    }

    @media (max-width: 750px){
        p{
            display: none;
        }
    }
`;

const NavLink = ({ path, text, imgPath }) => {
    return (
        <StyledDiv>
            <img src={imgPath} alt="" />
        <p>{text}</p>
        </StyledDiv>
    );
}

export default NavLink;