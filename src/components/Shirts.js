import React, { Component } from 'react'
import axios from 'axios'
import { SHIRTS_URL } from '../constants.js'

const shirtsStyle = {
    color: 'blue',
    // width: '200px',
    // height: '250px'
    width: '15vw',
    height: '35vh',
}

class Shirts extends Component {
    state = {
        shirts: [],
    }
    
    componentDidMount () {
        axios
        .get(`${SHIRTS_URL}`)
        .then(response => this.setState({shirts: response.data.shirts}))
        .catch(err => console.log(err))
        }
    
    render () {
        let shirts = this.state.shirts
        console.log('shirts[0] is ', shirts)
        console.log('shirts[0].shirts is ', shirts)
        return (
            <div>
                {/* <p style={shirtsStyle}>{shirts.length && shirts[0].name}</p> */}
                <img style={shirtsStyle}src={shirts.length && shirts[0].images} />
                <img style={shirtsStyle}src={shirts.length && shirts[1].images} />
            </div>
        )
    } 
}

export default Shirts
