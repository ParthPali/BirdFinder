import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ShowComponents from './index.jsx';
import ShowLogin from './login.jsx';
function App() {
  return (
    <Router>
      <Route exact path="/" component={ ShowLogin }/>
      <Route exact path="/login" component={ ShowLogin }/>
      <Route exact path="/index" component={ ShowComponents }/>
    </Router>
  );
}

export default App;
