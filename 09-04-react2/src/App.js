import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';


class App extends React.Component{
  render() {
    return (
      <div className='demo'>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

 export default App;
