import { Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

import Login from "./components/Login.js"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;