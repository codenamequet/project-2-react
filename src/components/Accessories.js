import React, { Component } from 'react'
import axios from 'axios'
import { ACCESSORIES_URL } from '../constants.js'

const accessoriesStyle = {
    color: 'blue',
    width: '200px',
    height: '200px',
    // width: '15vw',
    // height: '25vh',
}

class Accessories extends Component {
    state = {
        accessories: [],
    }
    
    componentDidMount () {
        axios
        .get(`${ACCESSORIES_URL}`)
        .then(response => this.setState({accessories: response.data.accessories}))
        .catch(err => console.log(err))
        }
    
    render () {
        let accessories = this.state.accessories
        return (
            <div>
                <img style={accessoriesStyle}src={accessories.length && accessories[0].images} />
            </div>
        )
    } 
}

export default Accessories
