import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutlinedButton = styled(Link)`
  display: flex;
  height: 2.5px;
  min-width: 150px;
  min-height: 50px;

  border-radius: 3rem;
  font-size: 1.25rem;
  font-weight: 500;

  color: white;
  background-color: transparent;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-width: 2px;
    background-color: whiteE0;
  }

  :active {
    background-color: whiteD0;
  }

  @media only screen and (min-width: 1200px) {
    background-color: white;
    color: #620bd0;
    border: 1px solid #620bd0;
    border-radius: 1.2rem;
  }
`;

//
//#620bd0;
export const FilledButton = styled(Link)`
  width: 100%;
  height: 2.5px;
  min-width: 150px;
  min-height: 50px;

  border-radius: 3rem;
  font-size: 1.25rem;
  font-weight: 500;

  color: #620bd0;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-width: 2px;
    background-color: whiteE0;
  }

  :active {
    background-color: whiteD0;
  }

  @media only screen and (min-width: 1200px) {
    background-color: #620bd0;
    color: white;
    border-radius: 1.2rem;
    :hover {
      background-color: #620bd0e0;
    }
  }
`;

export const Field = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 1.15rem;

  :hover, :focus {
    outline: 1px solid #620bd0;
    ::placeholder {
      color: black;
    }
  }
`;