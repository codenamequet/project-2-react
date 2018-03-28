import React, {Component} from 'react'
import axios from 'axios'
import {PANTS_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

import Pants from './Pants'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}

class AddPants extends Component {
    state = {
        pants: {},
        toDashboard: false
    }

    handleName = (e) => {
        if (e.target.value) this.setState({pants: Object.assign(this.state.pants, {name: e.target.value})})
    }

    handleCategory = (e) => {
        if (e.target.value) this.setState({pants: Object.assign(this.state.pants, {category: e.target.value})})
    }

    handleColor = (e) => {
        if (e.target.value) this.setState({pants: Object.assign(this.state.pants, {color : e.target.value})})
    }

    handleImage = (e) => {
        if (e.target.value) this.setState({pants: Object.assign(this.state.pants, {images: e.target.value})})
    }

    handleTags = (e) => {
        if (e.target.value) this.setState({pants: Object.assign(this.state.pants, {tags: e.target.value})})
    }

    handleSubmit = () => {
        axios
        .post(`${PANTS_URL}/${this.state.pants.name}`, {pants: this.state.pants})
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err))
    }

    render() {
        let pants = this.state.pants
        console.log('pants is', pants)
        console.log(`this is the state at the end: ${this.state.pants}`)
        // console.log(`the url is: ${PANTS_URL}/${this.state.pants.name}`)
        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: `/pants/${pants.name}`,
                state: {pants:pants},
            }} />
        }
        return(
            <div>
            <div>
                <Pants />
                <h3 style={headerStyle}>Add Pants</h3>
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
    
export default AddPants
