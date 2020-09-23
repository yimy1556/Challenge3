import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Carrito from './Carrito'


const Header = (props) => {

    return (
        <>
            <header>
                <NavLink to="/" id="brand"><h1>Pyral</h1></NavLink>
                <nav>
                    {props.userlogged.token !== ''
                        ?
                        <>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/logOut">Logout</NavLink>
                            <h6>
                                logged in as {props.userlogged.firstName}</h6>
                            <Carrito />
                        </>
                        :
                        <>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">LogIn</NavLink>

                        </>}
                </nav>
                <Carrito />
            </header>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userlogged: state.authReducer
    }
}

export default connect(mapStateToProps)(Header)
