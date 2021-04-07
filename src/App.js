import { Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";


//Pages
import WelcomePage from "./pages/welcomePage";
import Subscribe from "./pages/subscribe";
import Login from "./pages/login.js";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/Subscribe">
        <Subscribe />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </div>
  );
}

export default App;