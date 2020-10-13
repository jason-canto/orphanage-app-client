import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import MapApp from './pages/MapApp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/map" component={MapApp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
