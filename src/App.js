import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Shoes from './components/Shoes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Shoes />
       <Footer />
      </div>
    )
  }
}

export default App;
