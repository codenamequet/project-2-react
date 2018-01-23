import React, { Component } from 'react'

const footerBody = {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
}

const footerMain = {
    flex: '1 0 auto'
}

class Footer extends Component {
    render() {
        return (
            <div class='footer'>
            <body>
                <head>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css" />
                    <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
                    <title>Project 2</title>
                </head>
            <main>
            </main>
                <footer class="page-footer red darken-2">
                    <div class="container">
                        <div class="row">
                        <div class="col l6 s12">
                            <h5 class="black-text">Style Board</h5>
                            <p class="black-text text-lighten-4">Get your outfits together with less effort</p>
                        </div>
                            <div class="col l2 offset-2 s12">
                            <h5 class="black-text">Links</h5>
                            <div class="col l2 s12"></div>
                            <ul>
                            <li><a class="black-text text-lighten-3" href="/">Home</a></li>
                            {/* <li><a class="black-text text-lighten-3" href="/closet">Closet</a></li> */}
                            <li><a class="black-text text-lighten-3" href="/about">About</a></li>
                            {/* <li><a class="black-text text-lighten-3" href="#!">More</a></li> */}
                            {/* <li><a class="black-text text-lighten-3" href="/closet/accessories">Accessories</a></li>
                            <li><a class="black-text text-lighten-3" href="/closet/shirts">Shirts</a></li>
                            <li><a class="black-text text-lighten-3" href="/closet/pants">Pants</a></li>
                            <li><a class="black-text text-lighten-3" href="/closet/shoes">Shoes</a></li> */}
                            </ul>
                        </div>
                         {/* <div class="col l2 s12">
                            <ul>
                            <li><a class="black-text text-lighten-3" href="/closet/accessories"></a>Accessories</li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container black-text">
                        © 2017 MDR Designs
                        {/* <a class="black-text text-lighten-4 right" href="#!">More Links</a> */}
                        </div>
                    </div>
                    </footer>
            <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
            <script src="assets/js/script.js"></script>
            {/* Compiled and minified JavaScript */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script>
            </body>
            </div>

            
        )
    }
}

export default Footer
