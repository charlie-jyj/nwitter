import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  // [상태, 상태 관리 함수] js destructuring assignment
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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