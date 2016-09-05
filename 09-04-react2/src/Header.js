import React from 'react';
import ReactDOM from 'react-dom';
import {Blue} from "./style.js";

class Header extends React.Component {
  render () {
    let styles={
      root:{
        width:"800px",
        height:"100px",
        // backgroundColor:"#e6e6e6"

    },
    h1:{
      color:"#ffffff",
      fontWeight:"lighter"
    }
  };

    return(
      <div style={styles.root}>
          <h1 style={styles.h1}>我是Header</h1>
      </div>
    )
}
}

export default Header;
