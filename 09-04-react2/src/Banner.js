import React from 'react';
import ReactDOM from 'react-dom';

class Banner extends React.Component {
  render () {
      let styles={
        root:{
          width:"100%",
          height:"800px",
          backgroundColor:"yellow"
        },
        h1:{
          color:"#000",
          fontSize:"24px",
          fontWeight:"lighter"
        }
        }
    return(

      <div style={styles.root}>
          <h1 style={styles.h1}>我是Banner</h1>
      </div>
    )
  }
}

export default Banner;
