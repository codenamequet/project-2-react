import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { SHOES_URL }       from '../constants.js'
import { Redirect }         from 'react-router-dom'
import axios                from 'axios'

class ShoesDetails extends Component {
    state = {
        shoe: this.props.location.state.shoe,
        toDashboard: false
    }

    handleDelete = () => {
        axios
        .delete(`${SHOES_URL}/${this.state.shoe.name}`)
        .then(this.setState({toDashboard: true}))
        .catch(err => console.log(err))
    }

    render() {
        let shoe = this.state.shoe
        console.log(shoe)
        if (this.state.toDashboard) return <Redirect to='shoes' />
        return (
            <div>
                <div>
                    <h1>{shoe.name}</h1>
                    <div>
                    <img className='img-itemdetails' src={shoe.images} alt='shoe' />
                    <p>Name: {shoe.name}</p>
                    <p>Category: {shoe.category}</p>
                    <p>Color: {shoe.color}</p>
                    <p>Image: {shoe.image}</p>
                    <p>Tags: {shoe.tags}</p>
                    <button>
                        <Link to={{
                            pathname: `/shoes/${shoe.name}/edit`,
                            state: {shoe: shoe}
                        }}>
                            edit
                        </Link>
                    </button>
                    <button onClick={this.handleDelete}>
                        <Link to={{
                            pathname: `/shoes/${shoe.name}`,
                            state: {shoe: shoe}
                        }}>
                            Delete
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoesDetails
