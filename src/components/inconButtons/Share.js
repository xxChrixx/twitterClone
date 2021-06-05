import React from "react"
import styled from 'styled-components'

const Container = styled.div`

border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
svg{
  display: flex;
  height: 40px; 
  path{
    transition: all 0.4s ease-in-out;
  }
}
:hover{
  background: rgba(98,22,208,0.3);
  svg{
    path{
      fill: purple;
    }
    
  }
}`
function Share(props) {
  return (
    <Container>
 <svg
      viewBox="0 0 133 122"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M60.621 22.323v66.252h11.653V22.346l16.762 16.761 8.24-8.24-22.6-22.6.027-.027L66.463 0l-.027.027-.004-.004-8.24 8.24.004.004-22.577 22.577 8.241 8.24 16.761-16.761z" />
      <path d="M11.653 109.874V45.101H0v76.429h11.653v-.002h109.453v.002h11.653v-.002h.003v-11.654h-.003V45.101h-11.653v64.773H11.653z" />
    </svg>
    </Container>
   
  )
}

export default Share
