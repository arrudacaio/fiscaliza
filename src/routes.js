import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/index.js';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>


  );
}