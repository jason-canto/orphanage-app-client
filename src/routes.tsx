import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import MapApp from './pages/MapApp';
import Orphanage from './pages/Orphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={MapApp}/>
        <Route path="/map/create" component={CreateOrphanage}/>
        <Route path="/map/:id" exact component={Orphanage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
