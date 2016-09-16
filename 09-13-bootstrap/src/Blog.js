import React, { PropTypes } from 'react';

class Blog extends React.Component {
  render () {
    console.log(this.props);
  return(
    <div>
    { this.props.params.title=='A' ? '我是A页面':
      this.props.params.title=='B' ? '我是B页面':
      this.props.params.title=='C' ? '我是C页面': '您访问的页面不存在！！'
      }
    </div>
  )
  }
}

export default Blog;
