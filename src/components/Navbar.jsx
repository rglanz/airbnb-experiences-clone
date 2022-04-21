import React from 'react'
import logo from '../assets/logo.png'


function Navbar() {
    return(
        <nav className="nav">
            <img src={logo} alt="" className="nav__logo"/>
        </nav>
    )
}

export default Navbar
