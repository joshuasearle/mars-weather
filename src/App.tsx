import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrentForecast from './components/Current';
import WeekForecast from './components/WeekForecast';
import ErrorPage from './components/ErrorPage';

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/current' component={CurrentForecast} />
          <Route exact path='/week' component={WeekForecast} />
          <Route path='/' component={ErrorPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
