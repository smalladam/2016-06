import React from 'react';
import ReactDOM from 'react-dom';
import Bgc from '../images/banner-bgc.jpg';

class Banner extends React.Component {
  render () {
      let styles={
        root:{
          width:"800px",
          height:"600px",
          backgroundImage:`url(${Bgc})`,
          backgroundSize:'100% 100%',
          // backgroundColor:"yellow"
        },
        h1:{
          color:"#ffffff",
          fontSize:"24px",
          fontWeight:"lighter"
        },
        img:{
          width:"100px",
        }
        }
    return(

      <div style={styles.root}>
          <h1 style={styles.h1}>我是Banner</h1>
          <img style={styles.img} src={Bgc} title="hello" alt="world"/>
      </div>
    )
  }
}

export default Banner;
