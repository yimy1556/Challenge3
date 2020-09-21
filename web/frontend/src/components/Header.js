import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <NavLink to="/" id="brand"><h1>Pyral</h1></NavLink>
                <nav>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">LogIn</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header