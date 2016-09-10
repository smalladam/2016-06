import React, { PropTypes } from 'react'

let arr = [
  '嗨,约吗? 1','叔叔，我们不约！1','我是最帅的！1','你是最丑的！1','我们是宇宙无敌组合！1',
  '嗨,约吗? 2','叔叔，我们不约！2','我是最帅的！2','你是最丑的！2','我们是宇宙无敌组合！2',
  '嗨,约吗? 3','叔叔，我们不约！3','我是最帅的！3','你是最丑的！3','我们是宇宙无敌组合！3',
  '嗨,约吗? 4','叔叔，我们不约！4','我是最帅的！4','你是最丑的！4','我们是宇宙无敌组合！4',
  '嗨,约吗? 5','叔叔，我们不约！5','我是最帅的！5','你是最丑的！5','我们是宇宙无敌组合！5',
  '嗨,约吗? 6','叔叔，我们不约！6','我是最帅的！6','你是最丑的！6','我们是宇宙无敌组合！6',
  '嗨,约吗? 7','叔叔，我们不约！7','我是最帅的！7','你是最丑的！7','我们是宇宙无敌组合！7',
  '嗨,约吗? 8','叔叔，我们不约！8','我是最帅的！8','你是最丑的！8','我们是宇宙无敌组合！8',

];

class Test extends React.Component {
  constructor(){
    super();
    this.state={
      page:0,
      pageItems:5
    }
  }
  handleStep(i){
    this.setState({page:i})
  }
  handleGo(i){
    let _page = this.state.page + i;
    let pageItems = this.state.pageItems;
    let pageNum = Math.ceil(arr.length/pageItems);
    if (_page<0) {
      alert('已经是第一页了');
    }else if (_page >= pageNum) {
      alert('已经是最后一页')
    }else {
      this.setState({page:_page});
    }
  }
  handleJump(){
    let gopagenum = this.refs.gopagenum.value;
    let pageItems = this.state.pageItems;
    let pageNum = Math.ceil(arr.length/pageItems);
    let reg = /^\d+$/;
    if (reg.test(gopagenum) && gopagenum>0 && gopagenum < pageNum+1) {
      let toNum = Number(this.refs.gopagenum.value) - 1;
      this.setState({page:toNum});
    }else(
      alert('请输入有效数字')
    )
  }
  render () {
    let showArr = [];
    let num = this.state.page;
    let pageItems = this.state.pageItems;
    for (let i = num*pageItems; i < (num+1)*pageItems; i++) {
      showArr.push(
        arr[i]
      )
    }
    let items=showArr.map( (item,i) => <p key={i}>{item}</p> )

    let btns = [];
    let btnNum = Math.ceil(arr.length/pageItems);
    for (let i = 0; i < btnNum; i++) {
      btns.push(
        <button key={i} onClick={this.handleStep.bind(this,i)} >第{i+1}页</button>
      )
    }

    return(
      <div>
        {items}
        <button onClick={this.handleGo.bind(this,-1)}>上一页</button>
        {btns}
        <button onClick={this.handleGo.bind(this,1)}>下一页</button>
        <br />
        <input type="text" placeholder='请输入跳转页数' ref='gopagenum' />
        <button onClick={this.handleJump.bind(this)}>跳转</button>
      </div>
    )
  }
}

export default Test;
