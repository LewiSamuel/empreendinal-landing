import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


