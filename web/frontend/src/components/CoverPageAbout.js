import React from 'react'
import '../styles/coverPageAbout.css'
import image00 from '../images/image00.jpg'
import image01 from '../images/image01.jpg'
import image02 from '../images/image02.jpg'

const CoverPageAbout = () => {

    return (
        <>
            <div className="container__super__coverPageAbout">
                <div>
                    <span>
                        LOOKING FOR MORE <br/>
                         STUFF LIKE THIS?
                    </span>
                </div>
                <div class="container__sections">
                    <section>
                        <img src={image00} alt="Photo by Andy Watkins on Unsplash" height="350px" width="200px" className="image1"
                        /> </section>
                    <section>
                        <img src={image01} alt="Photo by Andy Watkins on Unsplash" height="250px" width="300px" className="image2"
                        />
                    </section>
                    <section>
                        <img src={image02} alt="Photo by Andy Watkins on Unsplash" height="250px" width="300px" className="image6" />
                    </section>
                </div>
                <div>
                    <span>
                        We make an exclusive <br/> 
                        garment for you,<br/>
                        we are different and unique.
                        </span>
                </div>
            </div>


        </>
    )
}

export default CoverPageAbout