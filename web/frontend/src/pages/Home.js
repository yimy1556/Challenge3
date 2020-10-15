import React from 'react'
import { NavLink } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBotComponent from '../components/ChatBotComponent'

// Images
import Photo1 from '../images/1.jpg'
import Photo2 from '../images/2.jpg'
import Photo3 from '../images/3.jpg'
import Photo4 from '../images/4.jpg'
import bannerHome from '../images/bannerHome.jpg'
import hoodies from '../images/hoodies.jpg'
import threeGuys from '../images/threeGuys.jpg'
import clothing from '../images/clothing.jpg'

// Styles
import '../styles/home.css'

class Home extends React.Component {

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
                <div className="containerBanner" style={{ backgroundImage: `url(${bannerHome})` }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 id="newIn">NEW IN</h1>
                        <button id="buttonShop2"><NavLink to="/shop">Shop Now</NavLink></button>
                    </div>
                </div>
                <div id="containerThree">
                    <div className="photoHome" style={{ backgroundImage: `url(${Photo1})` }}></div>
                    <div className="photoHome" style={{ backgroundImage: `url(${Photo2})` }}></div>
                    <div className="photoHome" style={{ backgroundImage: `url(${Photo3})` }}></div>
                    <div className="photoHome" style={{ backgroundImage: `url(${Photo4})` }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="imgHomeText" >
                        <div className="imgHome" style={{ backgroundImage: `url(${hoodies})` }}></div>
                        <div className="imgText" >
                            <h3 style={{ margin: '1vh 0vh' }}>Products That Wear in Not Out</h3>
                            <h5 style={{ fontWeight: 'lighter', textAlign: 'center' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</h5>
                        </div>
                    </div>
                </div>
                <div className="shopNowPhotos">
                    <div className="anotherPhotos" style={{ backgroundImage: `url(${threeGuys})` }}>
                        <button style={{ display: 'flex', justifyContent: 'end', margin: '65vh 5vh' }} className="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                    </div>
                    <div className="anotherPhotos" style={{ backgroundImage: `url(${clothing})` }}>
                        <button style={{ display: 'flex', justifyContent: 'end', margin: '65vh 5vh' }} className="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                    </div>
                </div>
                <div className="containerInsta">
                    <h3 style={{ margin: '2vh auto' }}>#wemakeit</h3>
                    <h5 className="hashtags">Demand versatile performance. Follow the journey for originality and expression at @pyral</h5>
                    <div className="instaDiv" >
                        <div className="oneDiv">
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/25/17891492716647625/standard_resolution.jpg)` }}></div>
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/14/17848977176285314/standard_resolution.jpg)` }}></div>
                        </div>
                        <div className="oneDiv">
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/57/17878968142792357/standard_resolution.jpg)` }}></div>
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/30/17842593536342330/standard_resolution.jpg)` }}></div>
                        </div>
                    </div>
                </div>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Home