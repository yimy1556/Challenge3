import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Carrito from './Carrito'


const Header = (props) => {
    const logo = require('../images/logoblanco.png')

    return (
        <>
            <header>
                <NavLink to="/" id="brand"><h1><img src={logo} style={{width: "15vw"}}></img></h1></NavLink>
                <nav>
                    {props.userlogged.token !== ''
                        ?
                        <>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/logOut">Logout</NavLink>
                            <h6 style={{marginLeft:"1vw", marginBottom:"-3vh"}}>
                                logged in as {props.userlogged.firstName}</h6>
                            <Carrito />
                        </>
                        :
                        <>
                            <NavLink to="/">Home</NavLink>
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
