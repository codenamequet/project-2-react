import React    from 'react'
import { Link } from 'react-router-dom'

const shoesStyle = {
  width: '15vw',
  height: '25vh',
}

const font = {
  color: 'black',
  fontSize: '24px'
}

const ShoesList = (props) => {
  const shoes = props.shoes
  return (
    <div className='row'>
      <ul className='shoe-container'>
        {
          shoes.map((shoe, index) => {
            return (
              <Link to={{
                pathname: `/shoes/${shoe.name}`,
                state: {shoe: shoe}
              }}> 
                <li className='shoe-list-li' key={index}>
                  <div className='image-wrap'>
                    <img className='img-item-list image' style={shoesStyle} src={shoe.images} alt="shoe"/>
                  </div>
                  <div>
                    <h2 className='name-list' style={font}>{shoe.name}</h2>
                  </div>
                </li>
              </Link>
            )
          })
        }
      </ul>
      <div>
        <button>
          <Link to='/shoes/add'>Add New Shoe</Link>
        </button>
      </div>
    </div>
  )
}

export default ShoesList
