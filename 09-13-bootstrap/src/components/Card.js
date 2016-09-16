import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Bg1 from '../images/1.jpg';

class Card extends React.Component {
  handleJump(){
    let address = this.props.url;
    browserHistory.push(`/blog/${this.props.src}`)
  }
  render () {
  return(
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={this.props.img} />
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a> </p>
        </div>
      </div>
    </div>
  )
  }
}
Card.defaultProp={
  title:'我是帅小阳',
  desc:'我是描述',
  img:Bg1
}
export default Card;
