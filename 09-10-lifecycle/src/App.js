import React from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      num:1
    }
    console.log('init');
  }
  ComponentWillMount(){
    console.log('will');
  }
ComponentDidMount(){
   console.log('did');
}
shouldComponentUpdate(nextProps,nextState){
  console.log(nextProps,nextState);
  if (nextState.num>5){
    return false
  }else{
    return true
  }
}
componentWillReceiveProps(nextProps){
    console.log('我的下一个props是',nextProps);
    if (nextProps.propsNum>5) {
      alert('xxxxxx')
    }
  }
componentWillUpdate(nextProps,nextState){
  console.log(' 我将要更新！');
}
componentDidUpdate(prevProps,prevState){
  console.log(prevProps,prevState);
  console.log('宝宝已更新完成！');
}
handleClick(){
  this.setState({num:this.state.num+1})
}
handleDesctroy(){
    this.setState({desctroy:true})
  }
  componentWillUnmount(){
    alert('componentWillUnmount');
  }

render () {
  console.log('render');
  return(
    <div>
      <p>我的state是: {this.state.num}</p>
      <button onClick={this.handleClick.bind(this)}>click</button><br />
      我的props是
      {this.props.propsNum}
    </div>
  )
}
}

export default App;
