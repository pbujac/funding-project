import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLayout from '../PageLayout/PageLayout';
import Home from '../../views/Home/Home';

const Routes = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </PageLayout>
);

export default Routes;
