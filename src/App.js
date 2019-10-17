import React from 'react';
import './App.css';
import ArticleDataLoader from './component/ArticleDataLoader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (  
    <Router>
      <Switch>
        <Route path="/" exact component={ArticleDataLoader} />
      </Switch>
    </Router>
  );
}

export default App;
