import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Field, FilledButton } from "../style/ReusableStyle";



//animations
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animation/animation";



//page
import ConfirmData from './confirmData'

const StyledPage = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  position: fixed;
  z-index: 100;
`;

const StyledContent = styled(motion.div)`
  width: 450px;
  height: auto;
  overflow-y: hidden;
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
  P {
    color: red;
  }
  .fields {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 15px;
  }

  #SignInButton {
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
const StyledBorn = styled.div`
display: flex;
justify-content: space-between;
 select {
     
      width: 30%;
      height: 25px;
      color: #333;
      :hover, :focus {
        outline: 1px solid #620bd0;
        ::placeholder {
        color: black;
        }
    }
  }
`
const Subscribe = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const [bornYear, setBornYear] = useState(2000);
  const months = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("it", {
      month: "short",
    });
  });
  const [bornMonth, setBornMonth] = useState(months[0]);
  const [bornDay, setbornDay] = useState(1);
  const [dayList, setDayList] = useState([]);
  const [DataOpen, setDataOpen] = useState(false);


  const validateDate = (date) =>{
      const currentDate = new Date();
      if(currentDate.getFullYear - date.getFullYear > 16) return true
      return false
  }

  const SubmitHandler = async () => {
 
    if (
        
      email === "" ||
      password === "" ||
      name === "" ||
      username === "" ||
      password2 === ""
    )
      return setErrorMessage("Compila tutti i campi");
    if (password !== password2)
      return setErrorMessage("Le password non coincidono");
      const monthIndex = months.indexOf(bornMonth) +1;
      const bornDate = new Date(`${monthIndex}/${bornDay}/${bornYear}`);
      console.log(validateDate(bornDate));
    if(validateDate(bornDate)) return setErrorMessage("età non valida");
    
    setErrorMessage("");
    setDataOpen(true);

    

   
  };

  const CloseHandler = (e) => {
    if (e.target.id === "StyledPage") {
      setOpen(false);
    }
  };
 

  //born date select

  const Yeaders = (years) => {
    const currentYear = new Date().getFullYear();

    let yearsArray = [];
    for (let i = 0; i < years; i++) {
      yearsArray.push(currentYear - i);
    }
    return yearsArray;
  };
  const years = Yeaders(70);

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    
    const monthIndex = months.indexOf(bornMonth) +1;

    const dayinMonth = daysInMonth(monthIndex,bornYear)
    let daysArray = [];
    for (let i = 0; i < dayinMonth; i++) {
        daysArray.push(i+1);
    }
   setDayList(daysArray);
  }, [bornMonth, bornYear]);




  return (
    <>
      {open ? (
         
        <StyledPage
          onClick={CloseHandler}
          id="StyledPage"
          initial="hidden"
          animate="show"
          variants={pageAnimation}
        >
            <ConfirmData open={DataOpen} setOpen={setDataOpen} data={{name: name, email:email,password: password,username: username,year: bornYear,month: bornMonth, day:bornDay, monthNumber:(months.indexOf(bornMonth) +1) }}/>
          <StyledContent variants={fade}>
            <header>
              <h1>ISCRIVITI</h1>
            </header>
            <div className="content">
              <form className="fields">
                <p>{errMessage}</p>
                <Field
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                />
                <Field
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Field
                  placeholder="Mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Field
                  type="password"
                  placeholder="Ripeti password"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <h4>Data di nascita: </h4>
                <StyledBorn>
                  <select  onChange={(e) => setBornYear(e.target.value)} value={bornYear} >
                    {years.map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>
                  <select onChange={(e) => setBornMonth(e.target.value)} value={bornMonth}>
                    {months.map((month) => (
                      <option key={month}>{month}</option>
                    ))}
                  </select>
                  <select onChange={e=> setbornDay(e.target.value)} value={bornDay}>
                    {dayList &&
                      dayList.map((day) => <option key={day}>{day}</option>)}
                  </select>
                </StyledBorn>
              </form>
              <FilledButton id="SignInButton" onClick={SubmitHandler}>
                Iscriviti
              </FilledButton>
            </div>
          </StyledContent>
        </StyledPage>
      ) : (
        ""
      )}
    </>
  );
};

export default Subscribe;
