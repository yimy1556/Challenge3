import React from 'react'
import ReactPlayer from 'react-player'
import { Element, Events, animateScroll as scroller } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBotComponent from '../components/ChatBotComponent'

// Images
import banner from '../images/bannerShop.jpg'
import cloth from '../images/clothing2.jpg'
import newYork from '../images/newYork.jpg'
import ambassadors from '../images/ambassadors.jpg'
import clothAbout from '../images/clothAbout.jpg'

// Styles
import '../styles/about.css'

class About extends React.Component {


    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }

    render() {
        return (
            <>
                <Header />

                <div className="bannerAbout" style={{ backgroundImage: `url(${cloth})` }}>
                    <h2 id="ourStory">OUR STORY</h2>
                </div>

                <div className="bigContainerAbout" >
                    <div className="containerAbout">
                        <div className="photoAbout" style={{ backgroundImage: `url(${newYork})` }}>

                        </div>
                        <div className="textAbout" >
                            <h3>Our origins</h3>
                            <p className="firstText">We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                            <p className="secondText">You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                        </div>
                    </div>

                    <div className="containerAbout" style={{ margin: '3vh 0vh' }}>
                        <div className="textAbout" >
                            <h3>Products That Wear in Not Out</h3>
                            <p className="firstText">
                                It wasn’t easy, but after countless hours of research and way too much coffee, we custom engineered our own Pyca™ fabric. We knew we needed something durable yet breathable which our tri-blend fabric delivers and then some.
                            We’ve all been there before, you find a shirt that fits well but then it is limited in colors, styles or even worse, it disappears from existence since it is part of a one time seasonal collection. We’re changing that.</p>
                        </div>
                        <div className="photoAbout" style={{ backgroundImage: `url(${clothAbout}` }}>

                        </div>
                    </div>

                    <div className="containerAbout">
                        <div className="photoAbout" style={{ backgroundImage: `url(${banner})` }}>

                        </div>
                        <div className="textAbout" >
                            <h3>We were spared no lesson of construction</h3>
                            <p className="firstText">We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                            <p className="secondText">You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                        </div>
                    </div>
                    <Element name="scroll__video" className="scroll__video" >
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 5rem', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3>Watch the Video</h3>
                            </div>
                            <ReactPlayer url='https://vimeo.com/442496645' width={'100%'} height={'70vh'} controls={true} />
                        </div>
                    </Element>
                    <div style={{ display: 'flex', margin: '5rem' }}>
                        <div className="textAbout" >
                            <h3>Meet Our Ambassadors</h3>
                            <p className="secondText">Over this past year it's been an absolute pleasure to be a part of such an amazing team at Cuts Clothing. The company strives at producing top quality products and is continuously striving to innovate its brand for its customers. I can't say enough how much they do for their influencers to make sure they are happy with the clothing and the company. Also with everything going on in the world the last little while, Cuts is continuously donating to causes which shows why this is such an amazing company to be a part of. I look forward to the future with Cuts and all the amazing things ahead!</p>
                        </div>
                        <div className="photoAbout" style={{ backgroundImage: `url(${ambassadors})` }}>

                        </div>
                    </div>
                    <ChatBotComponent />
                </div>
                <Footer />
            </>
        )
    }
}

export default About