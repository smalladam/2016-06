import React, { Component }  from 'react';

import Bgc1 from './images/1.jpg';
import Bgc2 from './images/2.jpg';
import Bgc3 from './images/3.jpg';
import Bgc4 from './images/4.jpg';

class App extends Component {
  constructor(){
    super();
    this.state={
      nowShow:0
    }
  }
  tick(i) {
    // clearInterval(this.interval);
    this.setState({nowShow: this.state.nowShow + i});
    // let t=setTimeout(this.interval=setInterval(this.tick.bind(this,1),3000),3000)
  }
  componentWillUpdate(nextProps,nextState){
    if (nextState.nowShow>3) {
      this.setState({nowShow:0})
    }
    if(nextState.nowShow<0){
      this.setState({nowShow:3})
    }
  }
  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this,1), 3000);
  }
  Jump(x){
    this.setState({nowShow:x})
  }

  render () {
    let styles={
      root:{
        width:'100%',
        overflow:'hidden',
        position:'relative'
      },
      ul:{
        transform:'translateX(-' + this.state.nowShow*25 +'%)',
        width:'400%',
        transition:'all 0.5s',
      },
      li:{
        listStyle:'none',
        width:'25%',
        float:'left',
      },
      img:{
        display:'block',
        width:'100%',
        cursor:'pointer'
      }
    }
    return(
      <div style={styles.root}>
        <ul style={styles.ul} className="clearfix">
          <li style={styles.li}><img src={Bgc1} style={styles.img}/></li>
          <li style={styles.li}><img src={Bgc2} style={styles.img}/></li>
          <li style={styles.li}><img src={Bgc3} style={styles.img}/></li>
          <li style={styles.li}><img src={Bgc4} style={styles.img}/></li>
        </ul>
        <span className="arrow left" onClick={this.tick.bind(this,-1)}>&lt;</span>
        <span className="arrow right" onClick={this.tick.bind(this,1)}>&gt;</span>
          <div className="dot">
            <span onClick={this.Jump.bind(this,0)}>1</span>
            <span onClick={this.Jump.bind(this,1)}>2</span>
            <span onClick={this.Jump.bind(this,2)}>3</span>
            <span onClick={this.Jump.bind(this,3)}>4</span>
          </div>

      </div>
    )
  }
}

export default App;
