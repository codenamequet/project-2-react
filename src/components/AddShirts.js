import React, {Component} from 'react'
import axios from 'axios'
import {SHIRTS_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

import Shirts from './Shirts'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}

class AddShirts extends Component {
    state = {
        shirts: {},
        toDashboard: false
    }

    handleName = (e) => {
        if (e.target.value) this.setState({shirts: Object.assign(this.state.shirts, {name: e.target.value})})
    }

    handleCategory = (e) => {
        if (e.target.value) this.setState({shirts: Object.assign(this.state.shirts, {category: e.target.value})})
    }

    handleColor = (e) => {
        if (e.target.value) this.setState({shirts: Object.assign(this.state.shirts, {color : e.target.value})})
    }

    handleImage = (e) => {
        if (e.target.value) this.setState({shirts: Object.assign(this.state.shirts, {images: e.target.value})})
    }

    handleTags = (e) => {
        if (e.target.value) this.setState({shirts: Object.assign(this.state.shirts, {tags: e.target.value})})
    }

    handleSubmit = () => {
        axios.post(`${SHIRTS_URL}/${this.state.shirts.name}`, {shirts: this.state.shirts})
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err))
    }

    render() {
        let shirts = this.state.shirts
        console.log('shirts is', shirts)
        console.log(`this is the state at the end: ${this.state.shirts}`)
        // console.log(`the url is: ${SHOES_URL}/${this.state.shirts.name}`)
        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: `/shirts/${shirts.name}`,
                state: {shirts:shirts},
            }} />
        }
        return(
            <div>
            <div>
                <Shirts />
                <h3 style={headerStyle}>Add Shirts</h3>
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
    
export default AddShirts
