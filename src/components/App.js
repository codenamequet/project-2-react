import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AddAccessories from './AddAccessories'
import AddShirts from './AddShirts'
import AddPants from './AddPants'
// import AddShoes from './AddShoes'
import EditShoes from './EditShoes'
import Landing from './Landing'
import About from './About'

import ShoesContainer from './ShoesContainer'
import ShoesDetails        from './ShoesDetails'
import ShoesEdit           from './ShoesEdit'
// import ShoesAdd            from './ShoesAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <main>
        <Switch>
          <Route exact path='/' render={() => (<Landing />)} />
          {/* <Route exact path='/accessories' render={() => (<AddAccessories />)} />
          <Route exact path='/shirts' render={() => (<AddShirts />)} />
          <Route exct path='/pants' render={() => (<AddPants />)} /> */}
          <Route exact path='/shoes' render={(props) => (<ShoesContainer {...props}/>)}/>
          {/* <Route exact path='/shoes' render={() => (<AddShoes />)} /> */}
          {/* <Route path='/shoes/:name/edit' render={props => (<ShoesEdit {...props} />)} /> */}
          <Route path='/shoes/:name' render={(props) => (<ShoesDetails {...props}/>)}/>
          <Route path='/about' render={() => (<About />)} />
          <Route exact path='/*' render={() => (<Landing />)} />
        </Switch>
      </main>
      <Footer />
      </div>
    )
  }
}

export default App;
