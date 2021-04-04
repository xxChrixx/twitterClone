import styled from "styled-components";

function RoundButton({ text, color = "black", backgroundColor = "white", borderColor = "black" }) {
    const StyledRoundButton = styled.button`
        width: 50%;
        height: 2.5px;
        min-width: 250px;
        min-height: 50px;
        outline: none;
        border-radius: 20px;
        font-family: "Nunito", sans-serif;
        font-size: 1.25rem;
        font-weight: 500;

        color: ${color};
        background-color: ${backgroundColor};
        border: 1px solid ${borderColor};

        :hover {
            border-width: 2px;
            background-color: ${backgroundColor}E0;
        }

        :active {
            background-color: ${backgroundColor}D0;
        }
    `;

    return (
        <StyledRoundButton>{text}</StyledRoundButton>
    );
}

export default RoundButton