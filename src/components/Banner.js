import React from 'react'
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../imagens/Banner1.jpg'
import Banner2 from '../imagens/Banner2.jpg'
import Banner3 from '../imagens/Banner3.png'



function Banner() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100" id="carrossel-img"
              src= { Banner1 }
              alt="Imagem 1 do carrossel"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" id="carrossel-img"
              src= { Banner2 }
              alt="Imagem 2 do carrossel"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" id="carrossel-img"
              src= { Banner3 }
              alt="Imagem 3 do carrossel" 
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
=======
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Banner() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <ExampleCarouselImage text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
>>>>>>> 3a769a234cd5aa8ec02abc9d8c91322f2f98bec4
}

export default Banner