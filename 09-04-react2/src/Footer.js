import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  styles(){
    return{
      root:{
        width:"800px",
        height:"100px",
        // backgroundColor:"green"
      },
      h1:{
        color:"#ffffff",
        fontSize:"24px",
        fontWeight:"lighter"
      }
      }
  }
  render () {

    return(
      <div style={this.styles().root}>
          <h1 style={this.styles().h1}>我是Footer</h1>
      </div>
    )
  }
}

export default Footer;
