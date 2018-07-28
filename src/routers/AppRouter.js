import React from 'react';
import PriceCheckerApp from '../components/PriceCheckerApp';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <Route path = "/" component = {PriceCheckerApp}/>
  </ BrowserRouter>
)

export default AppRouter;
