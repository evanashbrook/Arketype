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
import { NavLink } from 'react-router-dom'
import b1t from '../../Assets/SVG/BlogT.svg'
import ImageGalm from '../ImageGalm'


/**
* @author
* @function Block0
**/

const Block0m = (props) => {
    let tt = useRef(null)
    let intro = useRef(null)
    let d = useRef(null)
    let w = useRef(null)
    let slide = useRef(null)
    let ad = useRef(null)
    let tt2 = useRef(null)

    useEffect(() => {
        gsap.from(tt, {rotationX: 90, duration: 1, delay: 1.5})
        gsap.from(tt2, {rotationX: 90, duration: 1, delay: 1.5})
        gsap.from(intro, {xPercent: -120, duration: 1, delay: 1.5})
        gsap.from(ad, {xPercent: -120, duration: 1, delay: 1.5})
        gsap.from(d, {yPercent: 200, xPercent: 400, duration: 1, delay: 1.5})
        gsap.from(w, {xPercent: -100, duration: 1, delay: 1.5})
        gsap.from(slide, {opacity: 0, duration: 4, delay: 2.5})
    })
  return(
    <section className='blocksec'>
        <div className='block0'>
        <img className='title-m' src={title} alt='title' ref={el=>tt=el}/>
        <div className='intro-block-m' ref={el=>intro=el}>
            <p className='site-title-m'>Where Film Meets Philosophy</p>
            <p className='watermark-m' ref={el=>w=el}>A website by Evan Ashbrook</p>
        </div>
        <div className='gallery-m' ref={el=>slide=el}>
            <ImageGalm />
        </div>
            <div className='lines-m'>
                <Liner />
            </div>
            <div className='linesleft-m'>
                <LinesL />
            </div>
            <div className='linestop-m'>
                <Linestop />
            </div>
            <div className='diamond-m' ref={el=>d=el}>
            <Diamond />
            </div>
            <img className='b1title-m' src={b1t} alt='b1t' ref={el=>tt2=el}/>
            <div className='lines2-m'>
                <Liner />
            </div>
            <div className='lines3-m'>
                <Liner />
            </div>
            <div className='articlesdiv-m' ref={el=>ad=el}>
                <div className='movie-articles-m'>
                <p className='movies-title-m'>[Movies]</p>
                <div className='ma1-div'>
                    <NavLink to='/movies/A1'>
                        <p className='ma1-title-m'>"If You Created Me, Who Created You?"</p>
                        <p className='ma1-author-m'>By: Evan Ashbrook</p>
                    </NavLink>
                </div>
                <div className='ma2-div'>
                    <NavLink to='/movies/A2'>
                        <p className='ma2-title-m'>Article 2 Title (TBD)</p>
                        <p className='ma2-author-m'>By:</p>
                    </NavLink>
                </div>
                </div>
                <div className='philosophy-articles-m'>
                <p className='phi-title-m'>[Philosophy]</p>
                    <div className='pa1-div'>
                    <NavLink to='/philosophy/A1'>
                        <p className='pa1-title-m'>How The Right Definition of Racism Explains Everything</p>
                        <p className='pa1-author-m'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa2-div'>
                    <NavLink to='/philosophy/A2'>
                        <p className='pa2-title-m'>What is Objectivity?</p>
                        <p className='pa2-author-m'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa3-div'>
                    <NavLink to='/philosophy/A3'>
                        <p className='pa3-title-m'>The Argument for Objective Meaning</p>
                        <p className='pa3-author-m'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa4-div'>
                    <NavLink to='/philosophy/A4'>
                        <p className='pa4-title-m'>Philosophy Must Be Treated Like Art</p>
                        <p className='pa4-author-m'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                </div>               
            </div>
            
            
        </div>
    </section>
   )

 }

export default Block0m