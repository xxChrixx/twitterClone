import styled from "styled-components";

import Logo from "./Logo.js";
import LoginForm from "./LoginForm.js";

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    div {
        flex-basis: 50%;
        overflow: hidden;
    }

    .form-container {
        padding: 2.5% 5% 2.5% 3.5%;
        box-sizing: border-box;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-between;
    }

    footer {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;

        font-family: "Nunito", sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: gray;
    }

    .banner-container {
        background-color: #620BD0;
    }

    .login-banner {
        width: 100%;
        height: 100%;
    }
`;

function Login() {
    return (
        <StyledDiv>
            <div className="form-container">
                <header>
                    <Logo />
                </header>
                <LoginForm />
                <footer>
                    <p>© Boscaro Christian - Rossi Simone</p>
                    <p>Chi siamo</p>
                    <p>Termini di Servizi</p>
                </footer>
            </div>
            <div className="banner-container">
                <img className="login-banner" src="#" alt="Login Banner" />
            </div>
        </StyledDiv>
    );
}

export default Login;