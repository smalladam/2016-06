import React, { PropTypes } from 'react';
import Card from './Card';
import './main.css';
import data from './data';
import Test from './Test'

class App extends React.Component {
  render () {
    // let cards=data.map((item,i) => )
    return(
      <div>
        <Card item={data} />
        <Test />
      </div>
    )
  }
}

export default App;
