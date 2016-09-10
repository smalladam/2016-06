import React, { PropTypes } from 'react'

let arr = [
  '我想睡觉1','我想看电影1','我想吃好吃的1','我想回家1','我想睡觉1',
  '我想睡觉2','我想看电影2','我想吃好吃的2','我想回家2','我想睡觉2',
  '我想睡觉3','我想看电影3','我想吃好吃的3','我想回家3','我想睡觉3',
  '我想睡觉4','我想看电影4','我想吃好吃的4','我想回家4','我想睡觉4',
  '我想睡觉5','我想看电影5','我想吃好吃的5','我想回家5','我想睡觉5',
  '我想睡觉6','我想看电影6','我想吃好吃的6','我想回家6','我想睡觉6',
  '我想睡觉7','我想看电影7','我想吃好吃的7','我想回家7','我想睡觉7',
  '我想睡觉8','我想看电影8','我想吃好吃的8','我想回家8','我想睡觉8'
];

class  Test extends React.Component {
  constructor(){
    super();
    this.state={
      page:0
    }
  }
  handleStep(i){
    this.setState({page:i})
  }
  handleGo(i){
    let _page = this.state.page + i;
    let pageNum = Math.ceil(arr.length/4);

    if (_page < 0){
      alert('已经到达第一页！');
    }else if (_page > pageNum - 0){
      alert("已经到达最后一页！")
    }else{
      this.setState({page:_page})
    }
  }

  render () {
    let showArr = [];
    let num = this.state.page;
    for (let i = num*10; i < (num+1)*10; i++){
      showArr.push(
        arr[i]
      )
    };

    let items = showArr.map( (item,i) => <p key={i}>{item}</p>);

    let btnNum = Math.ceil(arr.length/10);
    let btns = [ ];
    for (let i = 0;i < btnNum;i++ ){
      btns.push(
        <button key = {i} onClick = {this.handleStep.bind(this,i)}>第{i+1}页</button>
      )
    }
    console.log(items);
  return(
    <div>
     {items}
     <button  onClick = {this.handleGo.bind(this,-1)}>上一页</button>
     {btns}
     <button  onClick = {this.handleGo.bind(this,1)}>下一页</button>
    </div>
  )
  }
}

export default Test ;
