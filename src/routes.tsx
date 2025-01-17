import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
    <Switch>
      <Route path="/app" component={OrphanagesMap} />
    </Switch>
  </BrowserRouter>
)