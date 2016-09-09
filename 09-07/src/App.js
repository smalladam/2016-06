import React, { PropTypes } from 'react';
import Card from './Card';
import data from './data';


class App extends React.Component {
  render () {
    // let cards=data.map((item,i) => )
    return(
      <div>
        <Card item={data} />
        <data />
      </div>
    )
  }
}

export default App;
