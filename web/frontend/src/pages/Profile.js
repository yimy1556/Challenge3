import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'


class Profile extends React.Component {


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
                <h1>This is your Profile</h1>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Profile