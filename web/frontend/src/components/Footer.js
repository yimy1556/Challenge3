import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import whatsapp from '../images/whatsapp.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '25px' }}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                        </div>
                        <div >
                            <NavLink to="/" style={{ paddingLeft: '5px' }}><img src={whatsapp} alt="" /></NavLink>
                            <NavLink to="/" style={{ paddingLeft: '5px' }}><img src={instagram} alt="" /></NavLink>
                            <NavLink to="/" style={{ paddingLeft: '5px' }}><img src={facebook} alt="" /></NavLink>
                        </div>

                    </div>
                    <div>
                        <Newsletter />
                    </div>

                </footer>
            </>
        )
    }
}

export default Footer