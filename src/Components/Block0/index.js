import React, { useEffect, useRef } from 'react'
import './style.css'
import Prisms from '../../SVGs/Prisms'
import title from '../../Assets/SVG/ArketypeT.svg'
import lines from '../../Assets/SVG/Linez.svg'
import gsap from 'gsap/gsap-core'
import Diamond from '../../SVGs/diamond'
import graphic from '../../Assets/1x/NewGraphic.png'
import Liner from '../../SVGs/linez'
import ImageGal from '../ImageGal'
import LinesL from '../../SVGs/linesleft'
import { Linestop } from '../../SVGs/linestop'

/**
* @author
* @function Block0
**/

const Block0 = (props) => {
    let tt = useRef(null)
    let intro = useRef(null)
    let d = useRef(null)
    let w = useRef(null)
    let slide = useRef(null)

    useEffect(() => {
        gsap.from(tt, {rotationX: 90, duration: 1, delay: 1.5})
        gsap.from(intro, {xPercent: -120, duration: 1, delay: 1.5})
        gsap.from(d, {yPercent: 200, duration: 1, delay: 1.5})
        gsap.from(w, {xPercent: -100, duration: 1, delay: 1.5})
        gsap.from(slide, {opacity: 0, duration: 4, delay: 2.5})
    })
  return(
    <section className='blocksec'>
        <div className='block0'>
        <img className='title' src={title} alt='title' ref={el=>tt=el}/>
        <div className='main-box'>
        <div className='intro-block' ref={el=>intro=el}>
            <p>Where Film Meets Philosophy</p>
        </div>
        <div className='gallery' ref={el=>slide=el}>
            <ImageGal />
        </div>
        </div>
            <div className='lines'>
                <Liner />
            </div>
            <div className='linesleft'>
                <LinesL />
            </div>
            <div className='linestop'>
                <Linestop />
            </div>
            <div className='diamond' ref={el=>d=el}>
            <Diamond />
            </div>
            <p className='watermark' ref={el=>w=el}>A website by Evan Ashbrook</p>
            
            
        </div>
    </section>
   )

 }

export default Block0