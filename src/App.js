import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import styled from "styled-components";

//Pages
import WelcomePage from "./pages/welcomePage.js";
import Subscribe from "./pages/subscribe.js";
import Login from "./pages/login.js";
import Navbar from "./pages/navbar.js";
import Sidebar from "./pages/sidebar.js";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const StyledSidebar = styled.div`
    width: 100%;
    height: 100%;
    flex-basis: 20%;
`;

const StyledMain = styled.main`
    width: 100%;
    height: 100%;
    flex-basis: 60%;
`;

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

      <Route path="/(Home|Explore|Notifications|Messages)">
        <StyledDiv>
          <StyledSidebar>
            <Navbar />
          </StyledSidebar>
          <StyledMain>
            <Route path="/Home">
              {/* Home */}
            </Route>
            <Route path="/Explore">
              {/* Esplora */}
            </Route>
            <Route path="/Notifications">
              {/* Notifiche */}
            </Route>
            <Route path="/Messages">
              {/* Messaggi */}
            </Route>
          </StyledMain>
          <StyledSidebar>
            <Sidebar />
          </StyledSidebar>
        </StyledDiv>
      </Route>
    </div>
  );
}

export default App;