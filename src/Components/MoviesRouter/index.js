import React from 'react'
import { Route, Router } from 'react-router'
import MA1 from '../MovieArticles/MA1'
import MA2 from '../MovieArticles/MA2'
import Movies from '../Movies'

/**
* @author
* @function MoviesRouter
**/

const MoviesRouter = (props) => {
  return(
    <section>
        <div className='movie-routes'>
            <Route path='/movies/' exact component={Movies} />
            <Route path='/movies/A1' component={MA1} />
            <Route path='/movies/A2' component={MA2} />
        </div>
    </section>
   )

 }

export default MoviesRouter