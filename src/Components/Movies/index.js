import React from 'react'
import { Route, Router } from 'react-router'
import { NavLink } from 'react-router-dom'
import MA1 from '../MovieArticles/MA1'
import MA2 from '../MovieArticles/MA2'
import title from '../../Assets/SVG/MoviesTitle.svg'
import './style.css'

/**
* @author
* @function Movies
**/

const Movies = (props) => {
  return(
    <section className='movie-sec'>
        <div className='homebutt-div'>
                <NavLink to='/'>
                    <p className='homebutt'>Home</p>
                </NavLink>
            </div>
        <img className='movies-title' src={title} alt='movietitle' />
        <div className='movie-articles'>
            <div className='ma1-div'>
                <NavLink to='/movies/A1'>
                    <p className='ma1-title'>"If You Created Me, Who Created You?"</p>
                </NavLink>
            </div>
            <div className='ma2-div'>
                <NavLink to='/movies/A2'>
                    <p className='ma2-title'>Article 2 Title (TBD)</p>
                </NavLink>
            </div>
        </div>
    </section>
   )

 }

export default Movies