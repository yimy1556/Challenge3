import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'
import ChangePass from '../components/ChangePass'


class Profile extends React.Component {


    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }


    render() {

        console.log(this.props)

        return (
            <>

                <Header />
                <h1>This is your Profile</h1>
                <ChangePass />
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Profile