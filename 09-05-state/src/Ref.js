import React  from 'react';
import $ from 'jquery';

class Ref extends React.Component {
  handleClick(){
    // console.log(this.refs.sss);
    let myRef = this.refs.shabi;
    $(myRef).toggle(3000);
  }
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vw',
        backgroundColor:'green',
        border:'2px solid #000'
      }
    }
    return(
     <div>
      <button onClick={this.handleClick.bind(this)}>快来点我啦！</button>
      <div ref="shabi" style={styles.root}>我是大的！</div>
     </div>
   )
  }
}

export default Ref;
