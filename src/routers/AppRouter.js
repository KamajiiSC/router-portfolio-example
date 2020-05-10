import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/portfolio' />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
 
  </BrowserRouter>
);

export default AppRouter;
