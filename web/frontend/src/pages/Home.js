import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import InfoContainer from '../components/InfoContainer'
import PhotoContainer from '../components/PhotoContainer'
import ChatBotComponent from '../components/ChatBotComponent'
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
                        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550246141-363ccad4018d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', height: '100vh', maxWidth: '100vw' }}>
                            <div id="buttonContainer">
                                <h1>Spring 2020</h1>
                                <button id="buttonShop">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundImage: `url(${banner2})`, backgroundSize: "cover", height: '100vh', maxWidth: '100vw' }}>
                            <div id="buttonContainer">
                                <h1>Spring 2020</h1>
                                <button id="buttonShop">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <div id="dosfotos">
                    <div className="fotosHome" style={{ backgroundImage: `url(${PhotoOne})`, height: '60vw', width: '40vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${PhotoTwo})`, height: '60vw', width: '40vw' }}></div>
                </div>

                <div id="tresfotos">
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo1})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo2})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo3})`, height: '35vw', width: '20vw' }}></div>
                    <div className="fotosHome" style={{ backgroundImage: `url(${Photo4})`, height: '35vw', width: '20vw' }}></div>
                </div>


                <InfoContainer />
                <PhotoContainer />
                {/* <Slider /> */}
                <div className="container__maps">
                    <p>how to get?</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52550.411906110974!2d-58.457845831582944!3d-34.59402664815089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabe8581d31d%3A0x50d32a5e364a418d!2sKahlo%20-%20Clothing%20Women!5e0!3m2!1sen!2sar!4v1600820856751!5m2!1sen!2sar"></iframe>
                </div>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Home
