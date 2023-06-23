import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../data/carouselItems';

import { nanoid } from 'nanoid'

const WelcomeHero = () => {
  return (
    <Carousel>
      {carouselItems.map((item) => {
        return(
            <Carousel.Item key={nanoid()}>
                <img className={item.className} src={item.src} alt={item.alt}/>
                <Carousel.Caption>
                    <h3>{item.captionTitle}</h3>
                    <p>{item.captionDescription}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default WelcomeHero