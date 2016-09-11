import  React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Timer.js'

class Main extends React.Component {
  constructor(){
    super();
    this.state={
      num:0,
      desctory:false
    }
  }
  handleClick(){
    this.setState({num:this.state.num+5})
  }
  handleDesctroy(){
    this.setState({desctroy:true})
  }

    render () {
      if (this.state.desctroy){
        return null
      }
      return(
        <div>
          <App propsNum={this.state.num} />
          <button onClick={this.handleClick.bind(this)}>click</button>
          <button onClick={this.handleDesctroy.bind(this)}>销毁组件</button><br />
          <Timer />
        </div>
      )
}
}

ReactDOM.render(<Timer />, document.getElementById('app'))
