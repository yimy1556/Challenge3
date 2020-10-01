import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'
import Faqs from '../components/Faqs'
import VideoBackground from '../components/VideoBackground'


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

                <Header />
                <Faqs />
                <ChatBotComponent />
                <VideoBackground />
                <Footer />
            </>
        )
    }
}

export default About