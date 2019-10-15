import React from 'react';
import Article from './component/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (  
    <Router>
      <Switch>
        <Redirect from="/" exact to={`/article-1`} />
        <Route path="/:article" exact component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
