import React, { PropTypes } from 'react'

class Children extends React.Component {
  render () {
    return(
      <h1>this.props.children<h1>
    )

  }
}

recatDOM.render(
  <div>
   <Children>hello</Children>
  </div>
)
// export default Children;
