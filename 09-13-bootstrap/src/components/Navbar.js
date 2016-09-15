import React, { Component } from 'react';
import { Link } from 'react-router'

class Navbar extends React.Component {
  render () {
  return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">SMALLADAM</a>
          </div>
          <ul className="nav nav-pills" >
              <li role="presentation"><Link to ="/"
              activeStyle={{backgroundColor:'yellow',color:'#000'}} onlyActiveOnIndex={true}>Home</Link></li>
              <li role="presentation" ><Link to ="/work"
              activeStyle={{backgroundColor:'yellow',color:'#000'}} >Work</Link></li>
              <li role="presentation" ><Link to ="/about"
              activeStyle={{backgroundColor:'yellow',color:'#000'}} >About</Link></li>
          </ul>
        </div>
      </nav>

    </div>
  )
  }
}

export default Navbar;
