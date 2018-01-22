import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css" />
                    <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
                    <title>Project 2</title>
                </head>
                {/* <ul id="dropdown1" class="dropdown-content">
                    <li><a href="/closet/accessories/">Accessories</a></li>
                    <li><a href="/closet/shirts/">Shirts</a></li>
                    <li><a href="/closet/pants">Pants</a></li>
                    <li><a href="/closet/shoes">Shoes</a></li>
                </ul> */}
                <nav class="red darken-2">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo black-text">Style Board</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/" class="black-text">Home</a></li>
                            {/* Dropdown Trigger */}
                            {/* <li><a href="/closet" data-target="dropdown1" class="black-text">Closet</a></li> */}
                            <li><a href="/about" class="black-text">About</a></li>
                            {/* Dropdown Trigger */}
                            {/* <li><a class ="dropdown-trigger" href="#" data-target="dropdown1" class="black-text"><i class="material-icons black">more_vert</i></a></li> */}
                            <form class="right">
                                <div class="input-field">
                                <input id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                                </div>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
