import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import whatsapp from '../images/whatsapp.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import Newsletter from '../components/Newsletter'



class Footer extends React.Component {

    render() {
        const logo = require('../images/pyral.png')

        return (
            <>
                <footer >

                    <div>
                        <NavLink to="/" className="brand"><h1>Pyral</h1></NavLink>
                    </div>
                    <div className="container__items__footer">
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                        </div>
                        <div className="container__icons__social" >
                            <div> <NavLink to="/" id="icon__whatsapp"><img src={whatsapp} alt="" /></NavLink></div>
                            <div> <NavLink to="/" ><img src={instagram} alt="" /></NavLink></div>
                            <div><NavLink to="/" ><img src={facebook} alt="" /></NavLink></div>
                        </div>

                    </div>
                    <div>
                        <Newsletter />
                    </div>
                    <span>© Pyral, A mindhub Company  -  All rights reserved</span>   
                </footer>
            </>
        )
    }
}

export default Footer