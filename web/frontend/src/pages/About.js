import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
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

                <h1>Este es la pagina about</h1>
                <Footer />
            </>
        )
    }
}

export default About