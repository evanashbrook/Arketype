import React from 'react'
import { Route, Router } from 'react-router'
import { NavLink } from 'react-router-dom'
import title from '../../Assets/SVG/PhilosophyTitle.svg'
import './style.css'

/**
* @author
* @function Philosophy
**/

const Philosophy = (props) => {
  return(
    <section className='philosophy-sec'>
        <img className='phi-title' src={title} alt='phi' />
        <div className='philosophy-articles'>
            <div className='pa1-div'>
            <NavLink to='/philosophy/A1'>
                <p className='pa1-title'>How The Right Definition of Racism Explains Everything</p>
            </NavLink>
            </div>
            <div className='pa2-div'>
            <NavLink to='/philosophy/A2'>
                <p className='pa2-title'>Article 2 Title (TBD)</p>
            </NavLink>
            </div>
        </div>
    </section>
   )

 }

export default Philosophy