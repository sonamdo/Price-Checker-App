import React from 'react';
import PriceCheckerApp from '../components/PriceCheckerApp';
import AboutPage from '../components/AboutPage';
import SkiPage from '../components/SkiPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header title = "Bike Price Checker" subtitle = "Check stores in the GTA for Bike and Ski Prices"/>
      <Switch>
        <Route path = "/" component = {PriceCheckerApp} exact = {true}/>
        <Route path = "/about" component = {AboutPage} exact = {true}/>
        <Route path = "/skis" component = {SkiPage} exact = {true}/>
        <Route component = {NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
