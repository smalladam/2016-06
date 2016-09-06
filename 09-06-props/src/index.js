import React from 'react';
import ReactDOM from 'react-dom';
import Btn from './Btn';

// class App extends React.Component {
//   render () {
//     console.log(this.props);
//     return(
//       <div>
//          我是父组件传来的:<br/>
//          {this.props.name[0]}
//          {this.props.name[1]}
//          {this.props.name[2]}
//       </div>
//     )
//   }
// }
//   let obg=['我是大叔腾','我是美女桑','我是帅小阳']
// ReactDOM.render(<App  name={{...obg}} />,document.getElementById('app'));
let content=[
  {title:'hello',bg:'#C2185b'},
  {title:'hello',bg:'#795543'},
  {title:'hello',bg:'#328963'},
  {title:'hello',bg:'#722358'},
  {title:'hello',bg:'#932892'},
];
// let btns=[<Btn title="smalladam" bg="#c21858"/>,<Btn title='我是小帅阳' bg='#5360FE'/>]
let btns=[];

for (let i=0; i < content.length;i++){
  btns.push(
    <Btn title={content[i].title} bg={content[i].bg} key={i}/>
  )
}
let btns=content.map(function (item,index){
  return <Btn title={item,title} bg={item.bg} key={index} />
})

console.log([1,2].map(item,index) => <Btn title={item.title} bg={item.bg} key={index} />)

ReactDOM.render(
  <div>
    {btns}
  </div>
  ,document.getElementById('app'));
