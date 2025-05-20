import React from 'react'
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
}

export default Banner