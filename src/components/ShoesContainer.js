import React, { Component } from 'react'
import { SHOES_URL } from '../constants.js'
import ShoesList from './ShoesList'
import axios from 'axios'

class ShoesContainer extends Component {
  state = {
    shoes: []
  }

  componentDidMount() {
    axios
    .get(`${SHOES_URL}`)
    .then(res => this.setState({shoes: res.data.shoes}))
    .catch(err => console.log(err))
  }

  render () {
    let shoes = this.state.shoes
    console.log(shoes)
    return (
      <React.Fragment>
        <div><ShoesList shoes={shoes}/></div>
      </React.Fragment>
      // <div><p>Words</p>
      // <img src={shoes.length && shoes[0].images} />
      
    ) 
  }
}

export default ShoesContainer
