import React, { PropTypes } from 'react'
import Bg1 from './images/1.jpg'
import Bg2 from './images/2.jpg'
import Bg3 from './images/3.jpg'
class Work extends React.Component {
  render () {
    return(
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={Bg1} alt="..." />
            <div className="caption">
              <h3>我是小帅阳</h3>
              <p>hello</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={Bg2} alt="..." />
            <div className="caption">
              <h3>我是阳小帅</h3>
              <p>hello</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={Bg3} alt="..." />
            <div className="caption">
              <h3>我是帅小阳</h3>
              <p>hello</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
