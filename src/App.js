import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Accessories from './components/Accessories'
import Shirts from './components/Shirts'
import Pants from './components/Pants'
import Shoes from './components/Shoes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Accessories />
       <Shirts />
       <Pants />
       <Shoes />
       <Footer />
      </div>
    )
  }
}

export default App;
