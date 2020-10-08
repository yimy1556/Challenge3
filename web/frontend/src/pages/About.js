import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import Footer from '../components/Footer'
import banner from '../images/bannerShop.jpg'
import cloth from '../images/clothing2.jpg'
import ChatBotComponent from '../components/ChatBotComponent'
import ReactPlayer from 'react-player'
import ambassadors from '../images/ambassadors.png'
import { Link, DirectLink, Element, Events, animateScroll as sscrollSpy, scroller } from 'react-scroll'

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
                


                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', alignContent: 'center', backgroundImage: `url(${cloth})`, minWidth: '100%', height: '80vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <h2 id="ourStory">OUR STORY</h2>
                    <Link style={{color:'whitesmoke', textDecoration:'underline', cursor:'pointer'}} className="scroll__video" to="scroll__video" onClick={() => this.scrollTo()} >Go to the video</Link>
                </div>


                <div className="containerAbout" style={{ marginTop: '10px' }}>
                    <div className="photoAbout" style={{ backgroundImage: `url(https://instagram.faep4-1.fna.fbcdn.net/v/t51.2885-15/e35/57400207_851926991853538_7690681489965528085_n.jpg?_nc_ht=instagram.faep4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=zksFJsS5JMIAX_OCrLw&_nc_tp=18&oh=f5955111445ca5eb47c4b655c54fe5b8&oe=5FA1B6F6)` }}>

                    </div>
                    <div className="textAbout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                        <h3>Our origins</h3>
                        <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                        <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                    </div>
                </div>


                <div className="containerAbout">
                    <div className="textAbout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundColor: 'whitesmoke' }}>
                        <h3>Products That Wear in Not Out</h3>
                        <p style={{ padding: '2em 5em' }}>
                            It wasn’t easy, but after countless hours of research and way too much coffee, we custom engineered our own Pyca™ fabric. We knew we needed something durable yet breathable which our tri-blend fabric delivers and then some.
                            We’ve all been there before, you find a shirt that fits well but then it is limited in colors, styles or even worse, it disappears from existence since it is part of a one time seasonal collection. We’re changing that.</p>
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



                <Element name="scroll__video" className="scroll__video" >
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 5rem', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3>Watch the Video</h3>
                        </div>
                        <ReactPlayer url='https://vimeo.com/442496645' width={'100%'} height={'70vh'} controls={true} />
                    </div>
                </Element>
                <div style={{ display: 'flex', margin: '5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60vw', justifyContent: 'center', backgroundColor: '#ffffff', padding: '2rem' }}>
                        <h3>Meet Our Ambassadors</h3>
                        <p>Over this past year it's been an absolute pleasure to be a part of such an amazing team at Cuts Clothing. The company strives at producing top quality products and is continuously striving to innovate its brand for its customers. I can't say enough how much they do for their influencers to make sure they are happy with the clothing and the company. Also with everything going on in the world the last little while, Cuts is continuously donating to causes which shows why this is such an amazing company to be a part of. I look forward to the future with Cuts and all the amazing things ahead!</p>
                    </div>
                    <div className="photoAbout" style={{ backgroundImage: `url(${ambassadors})` }}>

                    </div>

                </div>
                {/* <div style={{ margin: '5rem 10%', textJustify: 'unset', backgroundColor: 'whitesmoke', padding: '2rem' }}>
                    Pyral is the award-winning online retail destination for men's style, combining the best international menswear with expert advice and inspirational content. The site sells over 450 leading international brands, with new products added three times a week. Pyral offers express worldwide shipping to 170 countries (with same day service in London and New York) and a free collection service for returns and exchanges. Designers available include Tom Ford, Brunello Cucinelli, Balenciaga, Gucci, Polo Ralph Lauren, Loro Piana, A.P.C, Amiri and Nike.

                    The site is curated, edited and served by an independent world-class team, benefiting from the global infrastructure of the YOOX NET‑A‑Pyral Group, which includes the award-winning luxury website NET‑A‑Pyral.

                    Pyral publishes The Pyral Post newspaper six times a year, alongside our online magazine The Journal which publishes up-to-the-minute daily style news, all put together by a team of dedicated editors. Pyral provides unrivalled style advice and customer care service including a dedicated personal shopping team and free collection for returns and exchanges. Pyral currently operates from four offices in three continents. The HQ is in London, and the company has an office in Manhattan and distribution centers in London, New York and Hong Kong. Pyral is now part of YOOX NET‑A‑Pyral GROUP, following the merger of YOOX Group and THE NET‑A‑Pyral GROUP in October 2015.
                </div> */}
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}

export default About