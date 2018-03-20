import React, { Component } from 'react'
import axios from 'axios'
import { SHOES_URL } from '../constants.js'
// import './Shoes.css'

const shoesStyle = {
    color: 'blue',
    // width: '200px',
    // height: '250px',
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
        // .then(response => {console.log(response.data)})
        // .then(response => console.log(response))
        .catch(err => console.log(err))
        // console.log(this.state.shoes)
        }
    
    render () {
        let shoes = this.state.shoes
        // console.log('shoes is now ', shoes)
        console.log('shoes[0] is ', shoes)
        console.log('shoes[0].shoes is ', shoes)
        return (
            <div>
                {/* <p>{shoes.length && shoes[0].name}</p> */}
                <img style={shoesStyle} src={shoes.length && shoes[0].images} />
                {/* <p>{this.shoes.name}</p> */}
            </div>
        )
    } 
    // this.state.shoes.map((shoes, index) => {
    //     return <li key={index}>shoes.name</li>
}

export default Shoes
