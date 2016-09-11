import React, { Component } from 'react'

class  Timer extends React.Component {
  constructor(){
    super();
    this.state={
      second:59
    }
  }
  tick(){
    this.setState({second: this.state.second - 1});
  }
  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this),1000);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextState);
    if (nextState.second>-1){
      return true
    }else{
      clearInterval(this.interval);
      return false
    }
  }
  render () {
    return(
      <div>
         <h1>还有{this.state.second}秒即将爆炸！</h1>
      </div>
    )

  }
}

export default Timer;
