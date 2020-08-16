import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrentForecast from './components/Current';
import WeekForecast from './components/WeekForecast';
import ErrorPage from './components/ErrorPage';
import background from './assets/mars.jpg';
import classes from './css/classes';

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <div className={classes.Image}>
          <img src={background} alt='Mars the planet' />
        </div>
        <div className={classes.Content}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/current' component={CurrentForecast} />
            <Route exact path='/week' component={WeekForecast} />
            <Route path='/' component={ErrorPage} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
