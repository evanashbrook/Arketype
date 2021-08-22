import React from 'react'
import './style.css'
import b1t from '../../Assets/SVG/BlogT.svg'
import FB from '../../Assets/SVG/FilmBox.svg'
import PB from '../../Assets/SVG/PhilosophyBox.svg'
import b1p from '../../Assets/SVG/b1prism.svg'
import lines from '../../Assets/SVG/Lines.svg'
import Diamond from '../../SVGs/diamond'
import Liner from '../../SVGs/linez'
import brack from '../../Assets/SVG/brackets.svg'
import { NavLink } from 'react-router-dom'
import mtitle from '../../Assets/SVG/MoviesT.svg'
import ptitle from '../../Assets/SVG/PhilosophyT.svg'

/**
* @author
* @function Block0
**/

const Block1 = (props) => {
  return(
    <section className='blocksec'>
        <div className='block1'>
            <img className='b1title' src={b1t} alt='b1t' />
            <div className='lines'>
                <Liner />
            </div>
            <div className='lines2'>
                <Liner />
            </div>
            <div className='articlesdiv'>
                <div className='movie-articles'>
                <p className='movies-title'>[Movies]</p>
                <div className='ma1-div'>
                    <NavLink to='/movies/A1'>
                        <p className='ma1-title'>"If You Created Me, Who Created You?"</p>
                        <p className='ma1-author'>By: Evan Ashbrook</p>
                    </NavLink>
                </div>
                <div className='ma2-div'>
                    <NavLink to='/movies/A2'>
                        <p className='ma2-title'>Article 2 Title (TBD)</p>
                        <p className='ma2-author'>By:</p>
                    </NavLink>
                </div>
                </div>
                <div className='philosophy-articles'>
                <p className='phi-title'>[Philosophy]</p>
                    <div className='pa1-div'>
                    <NavLink to='/philosophy/A1'>
                        <p className='pa1-title'>How The Right Definition of Racism Explains Everything</p>
                        <p className='pa1-author'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa2-div'>
                    <NavLink to='/philosophy/A2'>
                        <p className='pa2-title'>What is Objectivity?</p>
                        <p className='pa2-author'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa3-div'>
                    <NavLink to='/philosophy/A3'>
                        <p className='pa3-title'>The Argument for Objective Meaning</p>
                        <p className='pa3-author'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                    <div className='pa4-div'>
                    <NavLink to='/philosophy/A4'>
                        <p className='pa4-title'>Philosophy Must Be Treated Like Art</p>
                        <p className='pa4-author'>By: Evan Ashbrook</p>
                    </NavLink>
                    </div>
                </div>               
            </div>
        </div>
    </section>
   )

 }

export default Block1