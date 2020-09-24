import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Carrito from './Carrito'
import PersonIcon from '@material-ui/icons/Person';



const Header = (props) => {
    const logo = require('../images/logoblanco.png')

    return (
        <>

            <header>
                <NavLink to="/" className="brand"><h1>Pyral</h1></NavLink>
                <nav>
                    {props.userlogged.token !== ''
                        ?
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/shop">Shop</NavLink>
                                <NavLink to="/profile"> <PersonIcon style={{ color: 'black', fontSize: 40 }}></PersonIcon></NavLink>
                                <NavLink to="/logOut">Logout</NavLink>
                            </div>
                            <Carrito />
                        </>
                        :
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/shop">Shop</NavLink>
                                <NavLink to="/register"> <PersonIcon style={{ color: 'black', fontSize: 40 }}></PersonIcon></NavLink>

                            </div>
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
