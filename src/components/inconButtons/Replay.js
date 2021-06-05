import React from "react"
import styled from 'styled-components'

const ContainerSvg = styled.div`

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
  background: rgba(0,0,255,0.3);
  svg{
    path{
      stroke: #0707b9;
    }
    
  }
}
`


function Replay(props) {
  return (
    <ContainerSvg>
 <svg
      viewBox="0 0 428 420"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M239.792 280.984v133.649l148.153-160.746c21.236-19.205 34.588-46.973 34.588-77.835v-66.273c0-57.913-47.018-104.932-104.932-104.932H109.779C51.866 4.847 4.847 51.866 4.847 109.779v66.273c0 57.914 47.019 104.932 104.932 104.932h130.013z"
        fill="none"
        stroke="#000"
        strokeWidth={20}
      />
    </svg>
    </ContainerSvg>
   
  )
}

export default Replay
