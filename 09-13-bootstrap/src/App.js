import React, { PropTypes } from 'react'

import Navbar from './components/Navbar'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return(
      <div>
       <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
