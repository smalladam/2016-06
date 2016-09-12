import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
    return(
      <div>
        <h1>我是about组件</h1>
        {this.props.children}
      </div>
    )
  }
}

export default About;
