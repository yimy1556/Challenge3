import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'
import production from '../images/production ID_4652327.mp4'
import { NavLink } from 'react-router-dom'

class About extends React.Component {


    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }


    render() {
        return (
            <>

                <div className="container__video__about">
                    <video src={production} autoPlay loop></video>
                </div>
                <div className="container__overlay"></div>
                <div className="container__content">
                    <div className="container__links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                    <div>
                        <p>Simple goes with everything...</p>
                        <button variant="contained" color="primary">Go!</button>   
                    </div>
                </div>
            </>
        )
    }
}

export default About