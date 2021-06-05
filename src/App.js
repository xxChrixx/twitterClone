import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

//Pages
import WelcomePage from "./pages/welcomePage";
import Home from "./pages/home";
import UserPage from './pages/userPage';


//Redux
import { useSelector,useDispatch } from "react-redux";
import { loginToken } from "./actions/userAction";

//Animation
import { AnimatePresence } from "framer-motion";
//import cookie
import { useCookies } from "react-cookie";

function App() {
  const history = useHistory();
  const { token, isLoading} = useSelector((state) => state.user);
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
      

        <Route path="/Home" exact>
          <Home />
        </Route>

        <Route path="/Profile/edit">
          <UserPage />
        </Route>

        <Route path="/" exact>
          <WelcomePage />
        </Route>
      </AnimatePresence>
    </div>
  );
}

export default App;
