import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import DayForecast from './components/DayForecast';
import WeekForecast from './components/WeekForecast';

const App: React.SFC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/day' component={DayForecast} />
        <Route exact path='/week' comonent={WeekForecast} />
      </Switch>
    </Router>
  );
};

export default App;
