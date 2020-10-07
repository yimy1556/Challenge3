import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import Newsletter from '../components/Newsletter'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { animateScroll as scroll } from 'react-scroll'
import GooglePlay from '../images/google-play-badge.svg'


class Footer extends React.Component {

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        const logo = require('../images/pyral.png')

        return (
            <>
                <footer >
                    <div id="container__links__news__scroll__footer">
                        <div id="logo__footer">
                            <NavLink to="/">Pyral</NavLink>
                        </div>
                        <div id="links__footer">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavLink to="/faqs">FAQs</NavLink>
                        </div>
                        <div id="news__rowScroll">
                            <div>
                                <Newsletter />
                            </div>
                            <div>
                                <ArrowUpwardIcon style={{ backgroundColor: 'white', borderRadius: '50%', fontSize: '2.5rem' }} onClick={this.scrollToTop} />
                            </div>
                        </div>
                    </div>
                    <div id="icons__social">
                        <div>
                            <NavLink to="/" ><WhatsAppIcon style={{ color: 'white', fontSize: '35px' }} /></NavLink>
                            <NavLink to="/" ><InstagramIcon style={{ color: 'white', fontSize: '35px' }} /></NavLink>
                            <NavLink to="/" ><FacebookIcon style={{ color: 'white', fontSize: '35px' }} /></NavLink>
                        </div>
                        <div>
                            <img src={GooglePlay}></img>
                        </div>
                    </div>
                    <hr id="hr"></hr>
                    <div id="reserved__footer">
                        <span>© Pyral, A mindhub Company  -  All rights reserved</span>
                    </div>
                </footer>

            </>
        )
    }
}

export default Footer