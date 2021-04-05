import { Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";


//Pages
import WelcomePage from "./pages/welcomePage"



function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/">
        <WelcomePage />
      </Route>
    </div>
  );
}

export default App;