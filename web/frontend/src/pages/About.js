import React from 'react'
import CoverPageAbout from '../components/CoverPageAbout'
import photoStore from '../images/aboutMessage.jpg'
import '../styles/about.css'

class About extends React.Component {
    render() {
        return (
            <>
                <CoverPageAbout />
                <div className="container__message__about">
                    <p>
                        An individual's personality is shown through their sense of style, whether it is: <br/>
                        casual, classic, chic, or trendy. Women wear clothes for different purposes. <br/>
                        These may include that if they want to look thin and tall, they wear more classic clothing. ... <br/>
                        That highlights their personality as well as mood.
                    </p>
                    <img src={photoStore} alt="" />
                </div>
                
                
            </>
        )
    }
}

export default About