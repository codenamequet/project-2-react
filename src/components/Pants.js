import React, { Component } from 'react'
import axios from 'axios'
import { PANTS_URL } from '../constants.js'

const pantsStyle = {
    color: 'blue',
    // width: '200px',
    // height: '250px'
    width: '15vw',
    height: '35vh',
}

class Pants extends Component {
    state = {
        pants: [],
    }
    
    componentDidMount () {
        axios
        .get(`${PANTS_URL}`)
        .then(response => this.setState({pants: response.data.pants}))
        .catch(err => console.log(err))
        }
    
    render () {
        let pants = this.state.pants
        return (
            <div>
                <img style={pantsStyle}src={pants.length && pants[0].images} />
                <img style={pantsStyle}src={pants.length && pants[1].images} />
            </div>
        )
    } 
}

export default Pants
