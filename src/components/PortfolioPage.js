import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <NavLink to="/portfolio/1">Item One</NavLink>
    <NavLink to="/portfolio/2">Item Two</NavLink>
  </div>
);

export default PortfolioPage;