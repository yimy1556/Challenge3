import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Carrito from './Carrito'
import PersonIcon from '@material-ui/icons/Person';



const HeaderAdmin = (props) => {
    return (
        <>

            <header>
                <NavLink to="/" className="brand"><h1>Pyral.admin</h1></NavLink>
                <nav>
                    <>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <NavLink to="/new">New</NavLink>
                            <NavLink to="/modify">Modify</NavLink>
                            <NavLink to="/delete">Delete</NavLink>
                            <NavLink to="/profile"> <PersonIcon style={{ color: 'black', fontSize: 40 }}></PersonIcon></NavLink>
                            <NavLink to="/logOut">Logout</NavLink>
                        </div>
                    </>
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

export default connect(mapStateToProps)(HeaderAdmin)
