import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      {/* switch: 여러 Route  중 하나만 렌더링 할 수 있게 해준다. */}
      <Switch>
        <Route></Route>
      </Switch>  
    </Router>
      
  )
}