import React from 'react';
import PriceCheckerApp from '../components/PriceCheckerApp';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header title = "Bike Price Checker" subtitle = "Check stores in the GTA for Bike Prices"/>
      <Switch>
        <Route path = "/" component = {PriceCheckerApp} exact = {true}/>
        <Route path = "/about" component = {AboutPage} exact = {true}/>
        <Route component = {NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
