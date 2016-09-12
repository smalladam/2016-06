import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import About from './About';
import Login from './Login';
import Content from './Content';

class Routers extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="about" component={About}>
            <Route path="content" component={Content} />
          </Route>
          <Route path="login" component={Login} />
        </Route>
      </Router>
    )
  }
}
export default Routers;
//  / App
// /about  App About
// /login App Login
// /about/content  App About Content
