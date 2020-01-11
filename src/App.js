import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import withAuth from './hocs/withAuth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/' component={withAuth(Home)} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
