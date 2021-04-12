import { Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

//Pages
import WelcomePage from "./pages/welcomePage";
import Subscribe from "./pages/subscribe";
import Login from "./pages/login.js";
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/Subscribe">
        <WelcomePage />
        <Subscribe />
      </Route>
      <Route path="/Login">
        <Login />
        <WelcomePage />
      </Route>


      <Route path="/Home">
        <Home />
      </Route>

    </div>
  );
}

export default App;
