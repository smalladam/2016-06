import React, { PropTypes } from 'react';
import { link } from 'react-router';


class About extends React.Component {
  render () {
    return(
      <div>
        <link to='/' activeStyle={{color:'red'}} activeClassNam='hahhaha' >App</Link><br/>
        <link to='/about' activeStyle={{color:'red'}} activeClassNam='hahhaha' >About</Link><br/>
        <link to='/login' activeStyle={{color:'red'}} activeClassNam='hahhaha' >Login</Link><br/>
      </div>
    )
  }
}

export default About;
