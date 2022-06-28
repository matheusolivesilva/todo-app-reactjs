import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { ReactElement } from 'react';

export const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
