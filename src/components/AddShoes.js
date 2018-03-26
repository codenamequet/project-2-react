import React, {Component} from 'react'
import axios from 'axios'
import {SHOES_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}

class AddShoes extends Component {
    state = {
        shoes: {},
        toDashboard: false
    }

    handleName = (e) => {
        if (e.target.value) this.setState({shoes: Object.assign(this.state.shoes, {name: e.target.value})})
    }

    handleCategory = (e) => {
        if (e.target.value) this.setState({shoes: Object.assign(this.state.shoes, {category: e.target.value})})
    }

    handleColor = (e) => {
        if (e.target.value) this.setState({shoes: Object.assign(this.state.shoes, {color : e.target.value})})
    }

    handleImage = (e) => {
        if (e.target.value) this.setState({shoes: Object.assign(this.state.shoes, {images: e.target.value})})
    }

    handleTags = (e) => {
        if (e.target.value) this.setState({shoes: Object.assign(this.state.shoes, {tags: e.target.value})})
    }

    handleSubmit = () => {
        axios.post(`${SHOES_URL}/${this.state.shoes.name}`, {shoes: this.state.shoes})
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err))
    }

    render() {
        let shoes = this.state.shoes
        console.log('sneaker is', shoes)
        console.log(`this is the state at the end: ${this.state.shoes}`)
        // console.log(`the url is: ${SHOES_URL}/${this.state.shoes.name}`)
        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: `/shoes/${shoes.name}`,
                state: {shoes:shoes},
            }} />
        }
        return(
            <div>
            <div>
                <h3 style={headerStyle}>Add Shoes</h3>
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
    
export default AddShoes
