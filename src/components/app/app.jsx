import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
