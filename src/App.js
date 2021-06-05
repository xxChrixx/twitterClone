import react, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import styled from "styled-components";
//Pages
import WelcomePage from "./pages/welcomePage";
import Navbar from "./components/navbar.js";
import Sidebar from "./components/sidebar.js";
import UserPage from "./pages/userPage";
import Home from "./pages/home";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { loginToken } from "./actions/userAction";

//Animation
import { AnimatePresence } from "framer-motion";
//import cookie
import { useCookies } from "react-cookie";

function App() {
  const history = useHistory();
  const { token, isLoading } = useSelector((state) => state.user);
  const [cookies, setCookie] = useCookies(["auth"]);
  const dispatch = useDispatch();

  //  useEffect(() => {
  //    console.log('test');
  //    if(cookies.auth){
  //      if(cookies.auth.token !== "" && cookies.auth.id !== ""){
  //        dispatch(loginToken(cookies.auth.id,cookies.auth.token));
  //
  //      }
  //    }
  //    if(isLoading === false){
  //     // history.push('/home')
  //    }
  //  }, [isLoading]);

  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/Profile/edit" exact> 
          <UserPage />
        </Route>
        <Route path="/(Home|Explore|Notifications|Messages)">
          <StyledDiv>
            <div className="navbar" style={{}}>
              <Navbar />
            </div>

            <div className="main-container">
              <Route path="/Home">
                <Home />
              </Route>

              <Route path="/Explore">{/* Esplora */}</Route>

              <Route path="/Notifications">{/* Notifiche */}</Route>

              <Route path="/Messages">{/* Messaggi */}</Route>
            </div>

            <div className="sidebar">
              <Sidebar />
            </div>
          </StyledDiv>
        </Route>
      </AnimatePresence>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .navbar {
    flex-basis: 25%;
  }
  .sidebar {
    flex-basis: 25%;
  }
  .main-container {
    flex-basis: 50%;
  }
  @media only screen and (max-width: 800px) {
    .navbar {
      flex-basis: 30%;
    }
    .sidebar {
      display: none;
      visibility: none;
    }
    .main-container {
      flex-basis: 65%;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .main-container {
      order: -1;
    }
    .navbar {
      flex-basis: 10vh;
    }
  }
`;

export default App;
