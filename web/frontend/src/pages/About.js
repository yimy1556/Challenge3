import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import Footer from '../components/Footer'
import banner from '../images/bannerShop.jpg'
import cloth from '../images/clothing2.jpg'
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
                <Header />

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${cloth})`, minWidth: '100%', height: '55vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <h2 id="ourStory">OUR STORY</h2>
                </div>

                <div className="containerAbout" >
                    <div className="photoAbout" style={{ backgroundImage: `url(https://instagram.faep4-1.fna.fbcdn.net/v/t51.2885-15/e35/57400207_851926991853538_7690681489965528085_n.jpg?_nc_ht=instagram.faep4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=zksFJsS5JMIAX_OCrLw&_nc_tp=18&oh=f5955111445ca5eb47c4b655c54fe5b8&oe=5FA1B6F6)` }}>

                    </div>
                    <div className="textAbout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Our origins</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>
                </div>

                <div className="containerAbout">
                    <div className="textAbout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Products That Wear in Not Out</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>
                    <div className="photoAbout" style={{ backgroundImage: `url(https://instagram.faep4-1.fna.fbcdn.net/v/t51.2885-15/e35/21909845_1944770939094922_1181941533474029568_n.jpg?_nc_ht=instagram.faep4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=lja4nkjg6ugAX-sDhDa&_nc_tp=18&oh=99f125f1ab99acad5d39871a956cbd25&oe=5FA074CE)` }}>

                    </div>
                </div>

                <div className="containerAbout">
                    <div className="photoAbout" style={{ backgroundImage: `url(${banner})` }}>

                    </div>
                    <div className="textAbout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Products That Wear in Not Out</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>
                </div>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default About