import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import p1 from '../../Assets/ER-2.jpg.webp'
import p2 from '../../Assets/Moon.jpg'
import p3 from '../../Assets/Reservoir_Dogs_t800.jpg'
import p4 from '../../Assets/something.jpeg'
import p5 from '../../Assets/tenet1.png'
import p6 from '../../Assets/the-tree-of-life.png'
import p7 from '../../Assets/FMA2.jpg'
import p8 from '../../Assets/ExMachina.jpg'
import p9 from '../../Assets/IV.jpg'
import p10 from '../../Assets/BR2049.jpg'
import p11 from '../../Assets/Parasite.jpg'
import p12 from '../../Assets/BR2049-2.webp'
import './style.css'

const ImageGal2 = (props) => {
    return(
        <section>
            <div className='c1'>
            <AliceCarousel autoPlay autoPlayInterval="0" autoPlayDirection='rtl' animationDuration='10000' animationEasingFunction='linear' infinite='true' disableButtonsControls='true' disableDotsControls='true'>
      <img src={p7} className="sliderimg"/>
      <img src={p8} className="sliderimg"/>
      <img src={p9} className="sliderimg"/>
      <img src={p10} className="sliderimg"/>
      <img src={p11} className="sliderimg"/>
      <img src={p12} className="sliderimg"/>
        </AliceCarousel>
            </div>
            <div className='c2'>
            <AliceCarousel autoPlay autoPlayInterval="0" animationDuration='10000' animationEasingFunction='linear' infinite='true' disableButtonsControls='true' disableDotsControls='true'>
      <img src={p1} className="sliderimg"/>
      <img src={p2} className="sliderimg"/>
      <img src={p3} className="sliderimg"/>
      <img src={p4} className="sliderimg"/>
      <img src={p5} className="sliderimg"/>
      <img src={p6} className="sliderimg"/>
        </AliceCarousel>
            </div>
        </section>
        
    )
}
export default ImageGal2