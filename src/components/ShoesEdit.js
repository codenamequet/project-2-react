import React, {Component} from 'react'
import axios from 'axios'
import {SHOES_URL} from '../constants.js'
import {Redirect} from 'react-router-dom'

// import Shoes from './Shoes'

const headerStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    width: '100vw',
    marginBottom: '10vh'
}


class ShoesEdit extends Component {
    state = {
        shoe: this.props.location.state.shoe,
        toDashboard: false
    }

    handleName = (e) => {
        if (e.target.value) this.setState({shoe: Object.assign(this.state.shoe, {name: e.target.value})})
    }

    handleCategory = (e) => {
        if (e.target.value) this.setState({shoe: Object.assign(this.state.shoe, {category: e.target.value})})
    }

    handleColor = (e) => {
        if (e.target.value) this.setState({shoe: Object.assign(this.state.shoe, {color : e.target.value})})
    }

    handleImage = (e) => {
        if (e.target.value) this.setState({shoe: Object.assign(this.state.shoe, {images: e.target.value})})
    }

    handleTags = (e) => {
        if (e.target.value) this.setState({shoe: Object.assign(this.state.shoe, {tags: e.target.value})})
    }

    handleSubmit = () => {
        axios
        .put(`${SHOES_URL}/${this.state.shoe.name}`, {shoes: this.state.shoe})
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err))
    }

    render() {
        let shoe = this.state.shoe
        console.log('sneaker is', shoe)
        console.log(`this is the state at the end: ${this.state.shoe}`)
        // console.log(`the url is: ${SHOE_URL}/${this.state.shoe.name}`)
        if (this.state.toDashboard === true) {
            return <Redirect to={{
                pathname: `/shoes/${shoe.name}`,
                state: {shoe: shoe},
            }} />
        }
        return(
            <div>
                <h1>{shoe.name}</h1>
                <div>
                {/* <ShoesContainer /> */}
                <h3 style={headerStyle}>Edit {shoe.name}</h3>
                {/* <p>also testing out ${test}</p> */}
                <input type='text' placeholder={shoe.name} onChange={this.handleName} />
                <input type='text' placeholder={shoe.category} onChange={this.handleCategory} />
                <input type='text' placeholder={shoe.color} onChange={this.handleColor} />
                <input type='text' placeholder={shoe.image} onChange={this.handleImage} />
                <input type='text' placeholder={shoe.tags} onChange={this.handleTags} />
                

               <input style={buttonStyle} type='button' value='submit' onClick={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
    
export default ShoesEdit
