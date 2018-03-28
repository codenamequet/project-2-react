import React from 'react'

const headerStyle = {
    textAlign: 'center'
}
const paragraphStyle = {
    textAlign: 'center',
    fontSize: '20px'
}

const About = () => (
    <React.Fragment>
        <h1 style={headerStyle}>About</h1>
        <p style={paragraphStyle}>StyleBoard is a virtual closet app that allows you to put together outfits anywhere, anytime.</p>
    </React.Fragment>
)

export default About
