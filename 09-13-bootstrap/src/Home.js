import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  handleClick(){
    browserHistory.push('Work')
  }
  render () {
  return(
    <div className="jumbotron">
    <h1>欢迎光临！</h1>
    <p>here is smalladam</p>
    <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleClick.bind(this)}>learn more</a></p>
    </div>
  )
  }
}

export default Home
