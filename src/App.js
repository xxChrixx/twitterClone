import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import styled from "styled-components";

//Pages
import WelcomePage from "./pages/welcomePage";
import Subscribe from "./pages/subscribe";
import Login from "./components/login.js";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>


      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/Subscribe">
        <WelcomePage />
        <Subscribe />
      </Route>

      </AnimatePresence>
    </div>
  );
}

export default App;
