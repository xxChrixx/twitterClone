
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
  background: rgba(0,255,0,0.3);
  svg{
    path{
      fill: green;
    }
    
  }
}`
function Retweet(props) {
  return (
    <Container>
 <svg
      viewBox="0 0 323 307"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M33.99 21.588h-.001v216.408L7.422 211.43 0 218.852l45.766 45.766 7.422-7.422-.036-.037 38.52-38.52-7.422-7.422-25.019 25.018V21.836h227.226V0H55.825C43.856 0 34.124 9.65 33.99 21.588zM288.153 285.205h.002V68.797l26.566 26.567 7.422-7.423-45.766-45.766-7.422 7.422.037.037-38.52 38.52 7.422 7.422 25.018-25.018v214.399H35.687v21.836h230.631c11.969 0 21.702-9.65 21.835-21.588z" />
    </svg>
    </Container>
   
  );
}

export default Retweet;
