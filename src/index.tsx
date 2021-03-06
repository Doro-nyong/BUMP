import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Reset } from './components/style/Reset';
import { Font } from './components/style/Font';

import App from './App';

import UpDownGame from './components/game/updown';

ReactDOM.render(
  <>
    <Font />
    <Reset />
    <Router basename={'/BUMP'}>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/updown" exact={true} component={UpDownGame} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);
