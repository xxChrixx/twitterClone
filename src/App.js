import react,{useEffect} from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import styled from "styled-components";

//Pages
import WelcomePage from "./pages/welcomePage";
import Home from './pages/home'

//Redux
import { useSelector } from "react-redux";

//Animation
import { AnimatePresence } from "framer-motion";


function App() {
const usehistory = useHistory();
const {token} = useSelector(state => state.user)
  useEffect(()=>{
if(token ===""){
  usehistory.push("/")
}
  },[token])
  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>


      <Route path="/" exact>
        <WelcomePage />
      </Route>
      
      <Route path="/Home">
        <Home/>
      </Route>


      </AnimatePresence>
    </div>
  );
}

export default App;
