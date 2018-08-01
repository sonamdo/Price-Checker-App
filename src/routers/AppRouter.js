import React from 'react';
import PriceCheckerApp from '../components/PriceCheckerApp';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path = "/" component = {PriceCheckerApp} />
    </div>
  </BrowserRouter>
)

export default AppRouter;
