import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signin' components={Signin} />
          <Route exact path='/' components={Home} />
          <Route components={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
