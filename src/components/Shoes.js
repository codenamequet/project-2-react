import React, { Component } from 'react'
import axios from 'axios'
import { SHOES_URL } from '../constants.js'


class Shoes extends Component {
    state = {
        shoes: [],
    }
    
    render () {
        return (
            <div>
                <p>Shoes are here!</p>
            </div>
        )
    }
}

axios
.get(`${SHOES_URL}`)
.catch(err => console.log(err))


export default Shoes
