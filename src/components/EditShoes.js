import React, {Component} from 'react'
import axios from 'axios'
import {SHOES_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

import Shoes from './Shoes'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}

class EditShoes extends Component {
    state = {
        shoes: {},
        // shoes: this.props.location.shoes,
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
        axios
        .put(`${SHOES_URL}/${this.state.shoes.name}`, {shoes: this.state.shoes})
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
        console.log(`these are the props: ${this.props}`)
        let test = this.props
        return(
            <div>
            <div>
                {/* <Shoes /> */}
                <h3 style={headerStyle}>Edit {shoes.name}</h3>
                {/* <p>also testing out ${test}</p> */}
                <input type='text' placeholder={shoes.name} onChange={this.handleName} />
                <input type='text' placeholder={shoes.category} onChange={this.handleCategory} />
                <input type='text' placeholder={shoes.color} onChange={this.handleColor} />
                <input type='text' placeholder={shoes.image} onChange={this.handleImage} />
                <input type='text' placeholder={shoes.tags} onChange={this.handleTags} />
                

               <input style={buttonStyle} type='button' value='submit' onClick={this.handleSubmit} />
            </div>
            </div>
        )
    }
}
    
export default EditShoes
