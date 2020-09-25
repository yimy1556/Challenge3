import React from 'react'
import CoverPageAbout from '../components/CoverPageAbout'
import photoStore from '../images/aboutMessage.jpg'
import Header from '../components/Header'
import Trail2 from '../components/Trail2'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'


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
                <Trail2></Trail2>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default About