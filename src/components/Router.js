import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

// isLoggedIn : 상위에서 전달받은 prop
const AppRouter = ({isLoggedIn}) => {
  
  return (
    <Router>
      {/* switch: 여러 Route  중 하나만 렌더링 할 수 있게 해준다. */}
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn? 
          (
            <>
            <Route exact path="/">
              <Home />
            </Route>
            {/* path 에 따라 다른 page를 render 한다 */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            </>
          ) : (
            // exact path는 정확하게 주소가 / 인 경우에 해당한다.
            // logout 후에는 isLoggedIn === false 인데 path 는 /profile 이므로 아래 코드는 무시된다.
            <Route exact path="/">
              <Auth />
            </Route>
          )}
          {/* <Redirect from="*" to="/"/> */}
      </Switch>  
    </Router>
      
  )
}



export default AppRouter;