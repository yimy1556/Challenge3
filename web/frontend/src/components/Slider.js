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
              src="https://images.unsplash.com/photo-1530648344624-7ee981c2ed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="container__image__slider"
              src="https://images.unsplash.com/photo-1489649229750-405a5e346d27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
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