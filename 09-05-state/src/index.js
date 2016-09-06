import React from 'react';
import ReactDOM from 'react-dom';

import Tab from "./Tab.js";
import Navbar from "./Navbar.js";
import Ref from './Ref.js';
import RefNav from './RefNav.js'



class App extends React.Component {
    constructor(){
        super();
        this.state={
          nowShow:2
        }
      }
      handleClick(X){
        this.setState({nowShow:X})
      }
      // handleClick2(){
      //   this.setState({nowShow:2})
      // }
      // handleClick3(){
      //   this.setState({nowShow:3})
      // }
      render () {
        let styles={
          box1:{width:'400px',height:'300px',border:'2px solid blue',backgroundColor:'green',display:this.state.nowShow==1 ? 'block' :'none'},
          box2:{width:'400px',height:'300px',border:'2px solid blue',backgroundColor:'red',display:this.state.nowShow==2 ? 'block' :'none'},
          box3:{width:'400px',height:'300px',border:'2px solid blue',backgroundColor:'yellow',display:this.state.nowShow==3 ? 'block' :'none'}
        }
        return(
          <div>
            <div>
             <button onClick={this.handleClick.bind(this,1)} >第一名</button>
             <button onClick={this.handleClick.bind(this,2)} >第二名</button>
             <button onClick={this.handleClick.bind(this,3)} >第三名</button>
            </div>
             <div style={styles.box1}>我是张志阳</div>
             <div style={styles.box2}>我是孙浩</div>
             <div style={styles.box3}>我是张子疼</div>
             <Navbar />
             <Ref />
             <RefNav />
          </div>

        )
      }
    }
ReactDOM.render(<RefNav />,document.getElementById('app'));
