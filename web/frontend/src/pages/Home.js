import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import InfoContainer from '../components/InfoContainer'
import ChatBotComponent from '../components/ChatBotComponent'
import { NavLink } from 'react-router-dom'
import banner2 from '../images/banner2.jpg'
import PhotoOne from '../images/uno.jpg'
import PhotoTwo from '../images/dos.jpg'
import Photo1 from '../images/1.jpg'
import Photo2 from '../images/2.jpg'
import Photo3 from '../images/3.jpg'
import Photo4 from '../images/4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
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
                        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550246141-363ccad4018d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', height: '70vh', maxWidth: '100vw' }}>
                            <div id="buttonContainer">
                                <h1>Spring 2020</h1>
                                <button id="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundImage: `url(https://images.pexels.com/photos/3707182/pexels-photo-3707182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, backgroundSize: "cover", height: '70vh', maxWidth: '100vw' }}>
                            <div id="buttonContainer">
                                <h1 style={{ color: 'white' }}>Spring 2020</h1>
                                <button id="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
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
                <InfoContainer />
                <div id="dosfotos">
                    <div className="fotosHome" style={{ backgroundImage: `url(https://images.pexels.com/photos/724499/pexels-photo-724499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, height: '40vw', width: '41vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(https://images.pexels.com/photos/3473516/pexels-photo-3473516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, height: '40vw', width: '41vw' }}></div>
                </div>


                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Home
