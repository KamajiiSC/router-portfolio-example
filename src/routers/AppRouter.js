import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact={true} />
        <Route path='portfolio' />
        <Route path='contact' />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
 
  </BrowserRouter>
);

export default AppRouter;
