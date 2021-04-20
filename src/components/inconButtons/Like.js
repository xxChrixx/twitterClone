import React from 'react';
import styled from 'styled-components';



const Svg = styled.svg`



`
const Container = styled.div`

border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.4s ease-in-out;
svg{
  path{
    transition: all 0.5s ease-out;
  }
}
:hover{
  background: rgba(255,0,0,0.4);
  svg{
    path{
      stroke: #9c2323;
    }
    
  }
}
`


const Like = () =>{
    return (
      <Container>
<Svg
          viewBox="0 0 157 134"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={1.5}
         
        >
          <path
            d="M78.066 27.95L65.729 15.613c-13.92-13.92-36.522-13.92-50.442 0-13.92 13.919-13.92 36.521 0 50.441l62.866 62.866 50.441-50.442-.087-.086 12.663-12.663c13.92-13.92 13.92-36.522 0-50.442-13.919-13.92-36.521-13.92-50.441 0L78.066 27.95z"
            fill="none"
            stroke="#000"
            strokeWidth={9.69}
          />
        </Svg>
      </Container>
        
      )
}


export default Like;