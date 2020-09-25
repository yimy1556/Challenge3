import React from 'react'
import CoverPageAbout from '../components/CoverPageAbout'
import photoStore from '../images/aboutMessage.jpg'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'


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

                <Header style={{ background: 'black' }} />
                <CoverPageAbout />
                <div className="container__message__about">
                    <p>
                        An individual's personality is shown through their sense of style, whether it is: <br />
                        casual, classic, chic, or trendy. Women wear clothes for different purposes. <br />
                        These may include that if they want to look thin and tall, they wear more classic clothing. ... <br />
                        That highlights their personality as well as mood.
                    </p>
                    <img src={photoStore} alt="" />
                </div>
                <ChatBotComponent />
            </>
        )
    }
}

export default About