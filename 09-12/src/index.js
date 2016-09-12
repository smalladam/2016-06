import  React from 'react';
import  ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import About from './About';
import Login from './Login';

// import Children from './Children.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/about' component={About} />
    <Route path='/login' component={Login} />
  </Router>, document.getElementById('app'));
