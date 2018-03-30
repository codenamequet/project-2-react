import React, { Component } from 'react'
import axios from 'axios'
import { SHOES_URL } from '../constants.js'
import {Link} from 'react-router-dom'

const shoesStyle = {
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
        // console.log('shoes[0] is ', shoes)
        // console.log('shoes[0].shoes is ', shoes)
        console.log(shoes[0])
        return (
            <div>
                
                <img style={shoesStyle} src={shoes.length && shoes[0].images} />
                <img style={shoesStyle} src={shoes.length && shoes[1].images} />
                <img style={shoesStyle} src={shoes.length && shoes[2].images} />
                <img style={shoesStyle} src={shoes.length && shoes[3].images} />
                <img style={shoesStyle} src={shoes.length && shoes[4].images} />
                <img style={shoesStyle} src={shoes.length && shoes[5].images} />
                {/* <p>{shoes.length && shoes[0].name}</p> */}
            </div>
        )
    } 
    // this.state.shoes.map((shoes, index) => {
    //     return <li key={index}>shoes.name</li>
}

export default Shoes
