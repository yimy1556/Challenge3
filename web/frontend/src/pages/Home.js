import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import InfoContainer from '../components/InfoContainer'
import ChatBotComponent from '../components/ChatBotComponent'
import { NavLink } from 'react-router-dom'
import Photo1 from '../images/1.jpg'
import Photo2 from '../images/2.jpg'
import Photo3 from '../images/3.jpg'
import Photo4 from '../images/4.jpg'
import cloth from '../images/clothing.jpg'
import mens from '../images/mens.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animateScroll as scroll } from 'react-scroll'


class Home extends React.Component {

    componentDidMount() {
        this.scrollToTop()
    }


    scrollToTop() {
        scroll.scrollToTop();
    }

    state = {
        showBot: false
    }

    show = () => {
        this.setState({
            showBot: !this.state.showBot
        })
    }
    theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: ' #111111',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: ' #111111',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        position: 'relative'
    };
    render() {
        return (
            <><Header />

                <Carousel>
                    <Carousel.Item>
                        <div style={{ backgroundImage: 'url(https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2020-09/24/1400/Newin_man.jpg?ver=20200927021501)', height: '80vh', maxWidth: '100vw', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div id="buttonContainer">
                                <h1 style={{ color: 'white' }}>Spring 2020</h1>
                                <button id="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundImage: `url(https://s7d2.scene7.com/is/image/aeo/20200915-mhp-matchup-lg?scl=1&qlt=60&fmt=jpeg)`, backgroundSize: "cover", height: '80vh', maxWidth: '100vw' }}>
                            <div id="buttonContainer2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 >Spring 2020</h1>
                                <button id="buttonShop2"><NavLink to="/shop">Shop Now</NavLink></button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>


                <div id="tresfotos">
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo1})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo2})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo3})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo4})`, height: '35vw', width: '20vw' }}></div>
                </div>


                <div style={{ display: 'flex', padding: '50px' }}>
                    <div className="fotosHome" style={{ backgroundImage: `url(${cloth})`, height: '40vw', width: '41vw' }}></div>
                    <div style={{ width: '60vw', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Products That Wear in Not Out</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>

                </div>

                <div style={{ display: 'flex', padding: '50px' }}>

                    <div style={{ width: '60vw', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Products That Wear in Not Out</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${mens})`, height: '40vw', width: '41vw' }}></div>
                </div>




                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Home