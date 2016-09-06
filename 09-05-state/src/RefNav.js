import React from 'react';
import RefNavBar from './RefNavBar';

class RefNav extends React.Component {
  handleClick(){
    this.refs.leftNav.handleToggle();
  }
  render () {
    let styles={
      root:{
        backgroundColor:'#purple',
        padding:"20px"
      }
    }
  return(
    <div style={styles.root}>
      <button onClick={this.handleClick.bind(this)}>click</button>
      <RefNavBar ref="leftNav"/>
    </div>
  )
  }
}

export default RefNav;
