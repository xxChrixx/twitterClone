import { Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    
    <div className="App">
      <GlobalStyles/>
        <Route path="/">
        <h3>twitter app</h3>
        </Route>
    
    </div>
  );
}

export default App;
