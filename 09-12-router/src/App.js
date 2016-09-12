import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/" activeStyle={{color: 'red'}}>App</Link><br/>
        <Link to="/about" activeStyle={{color: 'red'}}>About</Link><br/>
        <Link to="/login" activeStyle={{color: 'red'}}>Login</Link><br/>
        <Link to="/about/content" activeStyle={{color: 'red'}}>content</Link>
        {this.props.children}

        <footer>我是footer</footer>
      </div>
    );
  }
}

export default App;
