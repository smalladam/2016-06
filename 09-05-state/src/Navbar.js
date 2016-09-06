import React, { PropTypes } from 'react'

class Navbar extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  handleClick(){
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    let styles={
      navbar:{
        transition:'all 0.8s',
        position:'absolute',
        top:'0',
        left:this.state.show ? '0' : "-20%",
        height:'100%',
        width:'20%',
        backgroundColor:'yellow'
      },
      cover:{
        display:this.state.show ? 'block' : 'none',
        position:'absolute',
        top:'0',
        left:'0',
        bottom:'0',
        right:'0',
        backgroundColor:'rgba(0,0,0,0.2)',
      }
    }
  return(
    <div>
      <button onClick={this.handleClick.bind(this)}> 快来戳我！</button>
      <div onClick={this.handleClick.bind(this)} style={styles.cover}>我是罩罩</div>
      <div style={styles.navbar}>我是导航</div>
    </div>
  )
  }
}

export default Navbar;
