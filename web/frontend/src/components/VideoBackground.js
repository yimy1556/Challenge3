import React from 'react'
import ReactPlayer from "react-player"
import '../styles/about.css'
import video from '../images/guiño.mp4'

class VideoBackground extends React.Component {
    render() {
        return (
            <>
                <div className="container__data__video">
                    <div className="container__video">
                        <ReactPlayer
                            controls={false}
                            loop
                            width={"100%"}
                            playing={true}
                            muted={true}
                            url={video}
                        />
                    </div>
                    <p>
                        <span>How do I check my gift card balance?</span><br />
                        Please visit http://www.pyral.com/us/gift-cards to check your balance
                </p>
                </div>
            </>
        )
    }
}

export default VideoBackground