import React, {Component} from 'react'
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'

class Landing extends Component {
    render () {
        return (
            <div>
                <Accessories />
                <Shirts />
                <Pants />
                <Shoes />
            </div>
        )
    }
}

export default Landing
