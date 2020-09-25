import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import whatsapp from '../images/whatsapp.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Footer extends React.Component{
    
    render(){
        const logo = require('../images/pyral.png')

        return(
            <>
            <footer >
                <nav className="container_links_footer">
                    <div>
                        <NavLink to="/" className="brand"><h1>Pyral</h1></NavLink>
                    </div>
                    <div>
                        <NavLink to="/"><img src={whatsapp} alt="" /></NavLink>
                        <NavLink to="/"><img src={instagram} alt="" /></NavLink>
                        <NavLink to="/"><img src={facebook} alt="" /></NavLink>
                    </div>
                    <div>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                    </div>
                </nav>
            </footer>
        </>
        )
    }
}

export default Footer