import React, {Component} from 'react'
import axios from 'axios'
import {ACCESSORIES_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

import Accessories from './Accessories'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}

class AddAccessories extends Component {
    state = {
        accessories: {},
        toDashboard: false
    }

    handleName = (e) => {
        if (e.target.value) this.setState({accessories: Object.assign(this.state.accessories, {name: e.target.value})})
    }

    handleCategory = (e) => {
        if (e.target.value) this.setState({accessories: Object.assign(this.state.accessories, {category: e.target.value})})
    }

    handleColor = (e) => {
        if (e.target.value) this.setState({accessories: Object.assign(this.state.accessories, {color : e.target.value})})
    }

    handleImage = (e) => {
        if (e.target.value) this.setState({accessories: Object.assign(this.state.accessories, {images: e.target.value})})
    }

    handleTags = (e) => {
        if (e.target.value) this.setState({accessories: Object.assign(this.state.accessories, {tags: e.target.value})})
    }

    handleSubmit = () => {
        axios.post(`${ACCESSORIES_URL}/${this.state.accessories.name}`, {accessories: this.state.accessories})
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err.response))
        console.log(`state should work here it is ${this.state.accessories}`)
    }

    render() {
        let accessories = this.state.accessories
        console.log('accessories is', accessories)
        console.log(`this is the state at the end: ${this.state.accessories}`)
        console.log(`the url is: ${ACCESSORIES_URL}/${this.state.accessories.name}`)
        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: `/accessories/${accessories.name}`,
                state: {accessories:accessories},
            }} />
        }
        return(
            <div>
            <div>
                <Accessories />
                <h3 style={headerStyle}>Add Accessories</h3>
                <input type='text' placeholder='name' onChange={this.handleName} />
                <input type='text' placeholder='category' onChange={this.handleCategory} />
                <input type='text' placeholder='color' onChange={this.handleColor} />
                <input type='text' placeholder='image' onChange={this.handleImage} />
                <input type='text' placeholder='tags' onChange={this.handleTags} />

               <input style={buttonStyle} type='button' value='submit' onClick={this.handleSubmit} />
            </div>
            </div>
        )
    }
}
    
export default AddAccessories
