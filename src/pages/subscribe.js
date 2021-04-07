import React, { useState } from "react";
import styled from "styled-components";

import { Field, FilledButton } from "../style/ReusableStyle";

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: #620bd0;
`;

const StyledContent = styled.div`
  width: 450px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: white;
  box-shadow: 0 0 10px gray;
  padding: 20px 30px;

  h1 {
    font-size: calc(25px + 1.5vw);
    font-weight: 900;
    letter-spacing: 1px;
    color: #620bd0;
  }

  .fields {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 15px;
  }

  .dateFields {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 2.5%;
  }

  .dateFields>select {
      width: 100%;
      height: 25px;
      color: #333;
  }

  .dateInput {
    :hover, :focus {
        outline: 1px solid #620bd0;
        ::placeholder {
        color: black;
        }
    }
  }

  #SignUpButton {
      width: 50%;
      float: right;
      margin: 25px 0;
      color: white;
      background-color: #620bd0;
      border-radius: 1.2rem;

      :hover {
            background-color: #620bd0e0;
        }
  }

  .selectPlaceHolder {
      color: #333;
  }

  @media only screen and (max-width: 700px) {
      width: 100vw;
      height: 100vh;
  }
`;

const months = [
    { name: "Gennaio", day: 31 }, { name: "Febbraio", day: 28 }, { name: "Marzo", day: 31 },
    { name: "Aprile", day: 30 }, { name: "Maggio", day: 31 }, { name: "Giugno", day: 30 },
    { name: "Luglio", day: 31 }, { name: "Agosto", day: 31 }, { name: "Settembre", day: 30 },
    { name: "Ottobre", day: 31 }, { name: "Novembre", day: 30 }, { name: "Dicembre", day: 31 }
];

const Subscribe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(1900);
    const currentDate = new Date();
    return (
        <StyledPage>
            <StyledContent>
                <header>
                    <h1>ISCRIVITI</h1>
                </header>
                <div className="content">
                    <div className="fields">
                        <Field placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                        <Field placeholder="Mail" onChange={(e) => setEmail(e.target.value)} />
                        <Field placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Field placeholder="Conferma password" onChange={(e) => setConfirmedPassword(e.target.value)} />
                        <div className="date">
                            <p>Data di nascita</p>
                            <div className="dateFields">
                                <select className="dateInput" name="month" onChange={(e) => { setMonth(parseInt(e.target.value)); if (day > months[parseInt(e.target.value)].day) { setDay(1) } }}>
                                    {months.map(month => month.name).map((month, index) => <option value={index}>{month}</option>)}
                                </select>
                                <select className="dateInput" name="day" onChange={(e) => setDay(parseInt(e.target.value) + 1)}>
                                    {Array.from(Array(months[month].day).keys()).map(number => <option value={number++}>{number++}</option>)}
                                </select>
                                <select className="dateInput" name="year" onChange={(e) => setYear(parseInt(e.target.value))}>
                                    {Array.from({ length: currentDate.getFullYear() - 1900 + 1 }, (_, i) => currentDate.getFullYear() - i - 1).map(number => <option value={number++}>{number++}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <FilledButton id="SignUpButton" to="UserData">Iscriviti</FilledButton>
                </div>
            </StyledContent>
        </StyledPage>
    );
}

export default Subscribe;