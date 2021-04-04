import styled from "styled-components";
import RoundButton from "./RoundButton";

const StyledLoginForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

    h1 {
        text-transform: uppercase;
        font-family: "Nunito", sans-serif;
        font-weight: 900;
        font-size: 4.5rem;
        color: #620BD0;
    }

    .button-container {
        margin: 10% 0;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;
    }

    
`;

function LoginForm() {
    return (
        <StyledLoginForm action="" method="post">
            <h1>Twitta insieme a noi !</h1>
            <div className="button-container">
                <RoundButton text="Iscriviti" color="white" backgroundColor="#620BD0" borderColor="#620BD0" />
                <RoundButton text="Accedi" color="#620BD0" backgroundColor="white" borderColor="#620BD0" />
            </div>
        </StyledLoginForm>
    );
}

export default LoginForm;