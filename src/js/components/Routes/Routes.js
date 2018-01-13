import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLayout from 'Components/PageLayout/PageLayout';
import ProductList from 'Views/ProductList/ProductList';

const Routes = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/" component={ProductList} />
    </Switch>
  </PageLayout>
);

export default Routes;
