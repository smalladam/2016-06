import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(){
        super();
        this.state={
          num:0
        }
      }
      handleClick(){
        this.setState({
          num : this.state.num+1
        })
      }
      handleClick1(){
        this.setState({
          num : this.state.num-1
        })
      }
      handleClick2(){
        this.setState({
          num : this.state.num-1
        })
      }
      render () {
        return(
          <div>
             {this.state.num}
             <button onClick={this.handleClick.bind(this)}>+1</button>
             <button onClick={this.handleClick1.bind(this)}>-1</button>
             <p onClick={this.handleClick2.bind(this)}>今天是周一，一起出去玩吧</p>
          </div>
        )
      }
    }

ReactDOM.render(<Hello />,document.getElementById('app'));
