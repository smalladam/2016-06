import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    let styles={
      width:"100%",
      height:"100px",
      backgroundColor:"#e6e6e6"
    },
    h1:{
      color:"#000",
      fontWeight:"lighter"
    }

    return(
      <div style={styles}>
          <h1 style={styles.h1}>我是Header</h1>
      </div>
    )
  }
}

export default Header;
