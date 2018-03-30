import React, {Component} from 'react'
import Accessories from './Accessories'
import Shirts from './Shirts'
import Pants from './Pants'
import Shoes from './Shoes'
// import ShoesContainer from './ShoesContainer'

class Landing extends Component {
    render () {
        return (
            <div>
                <Accessories />
                <Shirts />
                <Pants />
                <Shoes />
                {/* <ShoesContainer /> */}
            </div>
        )
    }
}

export default Landing
