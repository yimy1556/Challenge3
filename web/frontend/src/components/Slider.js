import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';  
import banner from '../images/banner.svg'
import '../styles/slider.css'

class Slider extends React.Component {
    render() {
        return (
            <>

<Carousel>
  <Carousel.Item>
    <img
      className="container__image__slider"
      src={banner}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
       className="container__image__slider"
      src={banner}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="container__image__slider"
      src={banner}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

            </>
        )
    }
}

export default Slider