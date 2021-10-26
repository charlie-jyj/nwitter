import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

// isLoggedIn 상위에서 전달받은 prop
const AppRouter = ({isLoggedIn}) => {
  
  return (
    <Router>
      {/* switch: 여러 Route  중 하나만 렌더링 할 수 있게 해준다. */}
      <Switch>
        {isLoggedIn? 
          (
            <Route exact path="/">
              <Home />
            </Route>
          ) : (
            <Route exact path="/">
              <Auth />
            </Route>
          )}
      </Switch>  
    </Router>
      
  )
}

export default AppRouter;