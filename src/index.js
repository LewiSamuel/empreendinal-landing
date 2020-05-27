import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Email from './pages/email';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/email' exact component={Email} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


