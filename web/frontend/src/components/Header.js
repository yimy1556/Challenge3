import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Carrito from './Carrito'


const Header = (props) => {

    console.log(props)
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
                            <h1>
                                logged in as {props.userlogged.firstName}</h1>
                            <Carrito />
                        </>
                        :
                        <>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">LogIn</NavLink>
                            <Carrito />
                        </>}
                </nav>
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
