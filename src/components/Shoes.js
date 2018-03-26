import React, { Component } from 'react'
import axios from 'axios'
import { SHOES_URL } from '../constants.js'

const shoesStyle = {
    color: 'blue',
    width: '15vw',
    height: '25vh',
}

class Shoes extends Component {
    state = {
        shoes: [],
    }

    componentDidMount () {
        axios
        .get(`${SHOES_URL}`)
        .then(response => this.setState({shoes: response.data.shoes}))
        .catch(err => console.log(err))

        }
    
    render () {
        let shoes = this.state.shoes
        console.log('shoes[0] is ', shoes)
        console.log('shoes[0].shoes is ', shoes)
        return (
            <div>
                <img style={shoesStyle} src={shoes.length && shoes[0].images} />
                <img style={shoesStyle} src={shoes.length && shoes[1].images} />
                <img style={shoesStyle} src={shoes.length && shoes[2].images} />
                <img style={shoesStyle} src={shoes.length && shoes[3].images} />
                {/* <p>{this.shoes.name}</p> */}
            </div>
        )
    } 
    // this.state.shoes.map((shoes, index) => {
    //     return <li key={index}>shoes.name</li>
}

export default Shoes
