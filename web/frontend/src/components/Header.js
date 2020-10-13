
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ShopCart from './ShopCart'
import PersonIcon from '@material-ui/icons/Person';




const Header = (props) => {
    console.log(props)
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
                                <NavLink to="/profile"><PersonIcon style={{ color: '#111111', fontSize: 40 }}></PersonIcon><span style={{ textTransform: 'capitalize', fontSize: '0.8em' }}>{props.userlogged.firstName}</span> </NavLink>
                            </div>
                            <ShopCart bott={props.bott} />
                        </>
                        :
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/shop">Shop</NavLink>
                                <NavLink to="/register"> <PersonIcon style={{ color: '#111111', fontSize: 40 }}></PersonIcon></NavLink>

                            </div>
                            <ShopCart bott={props.bott} />
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
