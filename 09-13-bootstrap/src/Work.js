import React, { PropTypes } from 'react';
import Card from  './components/Card.js';
import Bg1 from './images/1.jpg';
import Bg2 from './images/2.jpg';
import Bg3 from './images/3.jpg';
import Bg4 from './images/4.jpg';

let cardData = [
  {title:'第一天',desc:'第一天的东西',img:Bg1,src:'A'},
  {title:'第二天',desc:'第二天的东西',img:Bg2,src:'B'},
  {title:'第三天',desc:'第三天的东西',img:Bg3,src:'C'},
  {title:'第四天',desc:'第四天的东西',img:Bg4,src:'D'},
]
class Work extends React.Component {
  render () {
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
         {cardData.map( (item,i) => <Card {...item} key={i} />)}
        </div>
      </div>
    )
  }
}

export default Work;
