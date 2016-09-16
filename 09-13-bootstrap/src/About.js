import React, { PropTypes } from 'react';
import axios from "axios";

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/smalladam')
    .then((res) =>{
      console.log(res.data);
      this.setState({
        data:res.data,
        wait:false
      })
    })
  }
  render () {
  return(
    <div>
   {
     this.state.wait ? 'wait loading......' :
     <img src={this.state.data.avatar_url} />
    }
    </div>
  )
  }
}

export default About;
