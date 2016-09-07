import React, { PropTypes } from 'react'

class Btn extends React.Component {
  render () {
    let styles={
      btn:{
        borderRadius:'5px',
        border:'none',
        backgroundColor:this.props.bg,
        padding:'10px 20px'
      }
    }
    return(
      <div>
        <button style={styles.btn}>{this.props.title}</button>
      </div>
    )

  }
}
Btn.defaultProps = {
  title:'请输入标题',
  bg:'#4238771'
};

export default Btn;
