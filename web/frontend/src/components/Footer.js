import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import whatsapp from '../images/whatsapp.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import Newsletter from '../components/Newsletter'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


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
                            <div> <NavLink to="/" id="icon__whatsapp"><WhatsAppIcon style={{ color: 'white', fontSize: 35 }} /></NavLink></div>
                            <div> <NavLink to="/" ><InstagramIcon style={{ color: 'white', fontSize: 35 }} /></NavLink></div>
                            <div><NavLink to="/" ><FacebookIcon style={{ color: 'white', fontSize: 35 }} /></NavLink></div>
                        </div>

                    </div>
                    <div>
                        <Newsletter />
                    </div>
                </footer>
                <div className="all__reserved">
                    <hr className="hr" />
                    <span>© Pyral, A mindhub Company  -  All rights reserved</span>
                </div>

            </>
        )
    }
}

export default Footer