import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import withReduxBoot from './commons/redux/withReduxBoot';
import UserListPage from './users/pages/UserListPage';
import UserAddPage from './users/pages/UserAddPage';
import UserDetailsPage from './users/pages/UserDetailsPage';

/* eslint-disable react/jsx-filename-extension */
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/UserDetailsPage" component={UserDetailsPage} />
      <Route exact path="/UserAddPage" component={UserAddPage} />
      <Route exact path="/UserListPage" component={UserListPage} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default withReduxBoot(Routes);
