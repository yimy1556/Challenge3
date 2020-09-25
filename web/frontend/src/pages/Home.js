import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import InfoContainer from '../components/InfoContainer'
import PhotoContainer from '../components/PhotoContainer'
import ChatBotComponent from '../components/ChatBotComponent'

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
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550246141-363ccad4018d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', height: '88vh', maxWidth: '100vw' }}>
                    <div id="buttonContainer">
                        <h1>Spring 2020</h1>
                        <button id="buttonShop">Shop Now</button>
                    </div>
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