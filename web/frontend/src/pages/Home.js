import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/home.css'
import InfoContainer from '../components/InfoContainer'
import ChatBotComponent from '../components/ChatBotComponent'
import { NavLink } from 'react-router-dom'
import Photo1 from '../images/1.jpg'
import Photo2 from '../images/2.jpg'
import Photo3 from '../images/3.jpg'
import Photo4 from '../images/4.jpg'
import cloth from '../images/clothing.jpg'
import mens from '../images/mens.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animateScroll as scroll } from 'react-scroll'


class Home extends React.Component {

    componentDidMount() {
        this.scrollToTop()
    }


    scrollToTop() {
        scroll.scrollToTop();
    }

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

                <div>

                    <div>
                        <div style={{ display: 'flex', backgroundImage: `url(https://s7d2.scene7.com/is/image/aeo/20200915-mhp-matchup-lg?scl=1&qlt=60&fmt=jpeg)`, backgroundSize: "cover", height: '80vh', maxWidth: '100vw', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 style={{ fontSize: '6.5em', color: '#111111', fontWeight: "600" }} >NEW IN</h1>
                                <button id="buttonShop2"><NavLink to="/shop">Shop Now</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tresfotos">
                    <div className="fotoHome" style={{ backgroundImage: `url(${Photo1})` }}></div>
                    <div className="fotoHome" style={{ backgroundImage: `url(${Photo2})` }}></div>
                    <div className="fotoHome" style={{ backgroundImage: `url(${Photo3})` }}></div>
                    <div className="fotoHome" style={{ backgroundImage: `url(${Photo4})` }}></div>
                </div>

                <div style={{ display: 'flex',flexDirection:'column'}}>
                    <div className="imgHomeText" style={{display: 'flex',margin:'6vh auto', width:'100%', justifyContent:'center'}}>
                        <div className="imgHome" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/50/17898804379567950/standard_resolution.jpg)`, justifyContent:'center' }}></div>
                        <div className="imgText" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                            <h3 style={{margin:'1vh 0vh'}}>Products That Wear in Not Out</h3>  
                            <h5 style={{ fontWeight:'lighter', textAlign:'center' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="shopnowPhotos"  style={{textAlign: 'center', justifyContent: 'center', width:'100%',margin: '10vh 0vh'}}>
                        <div className="anotherPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/91/17890619152640791/standard_resolution.jpg)` }}>
                            <button style={{display:'flex', justifyContent:'end', margin:'65vh 5vh'}} id="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                        </div>
                        <div className="anotherPhotos" style={{backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/85/17967839827327785/standard_resolution.jpg)` }}>
                            <button style={{display:'flex', justifyContent:'end', margin:'65vh 5vh'}} id="buttonShop"><NavLink to="/shop">Shop Now</NavLink></button>
                        </div>
                    </div>
                </div>
                       
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%'}}>
                {/* <div style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/30/17842593536342330/standard_resolution.jpg)`, height:'60vh',backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div> */}
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom:'3vh'}}>
                        <h3 style={{margin:'2vh auto'}}>#wemakeit</h3>
                        <h5 className="hashtags" style={{margin:'2vh auto', fontWeight:'lighter', textAlign:'center'}}>Demand versatile performance. Follow the journey for originality and expression at @pyral</h5>
                        <div className="instaDiv" style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', margin:'5vh 0vh'}}>
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
                </div>




                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default Home