import React from 'react'

class Tab extends React.Component {
  constructor(){
    super();
    this.state={
      nowShow:1,
      boxColor:'teal'
    }
  }
  handleClick(x,y){
    this.setState({
      nowShow:x,
      boxColor:y
    })
  }
  render () {
    let box1 = "我是王成";
    let box2 = "我是朱琳";
    let box3 = "我是傻逼";
    let styles={
      root:{
        width:'100vw',
        height:'100vw',
        margin:'0 auto',
        backgroundColor:this.state.boxColor
      }
    }

    return(
      <div>
        <div>
          <button onClick={this.handleClick.bind(this,1,'teal')} >第一名</button>
          <button onClick={this.handleClick.bind(this,2,'yellow')} >第二名</button>
          <button onClick={this.handleClick.bind(this,3,'green')} >第三名</button>
        </div>
        <div style={styles.root}>
          {
            this.state.nowShow==1 ? box1:
            this.state.nowShow==2 ? box2:
            this.state.nowShow==3 ? box3: '一花一世界,一鸟一天堂'

          }
        </div>
      </div>

    )

  }
}

export default Tab;
