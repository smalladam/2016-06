import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import App from './App';
import About from './About';
import Work from './Work';
import Home from './Home';

class  Routers extends React.Component {
  render () {
   return(
     <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </Route>
     </Router>
   );
  }
}

export default Routers;
